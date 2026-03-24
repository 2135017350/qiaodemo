package com.bridge.rhyme.controller;

import com.bridge.rhyme.entity.Bridge;
import com.bridge.rhyme.repository.BridgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Autowired
    private BridgeRepository bridgeRepository;

    @Value("${kimi.api.key:}")
    private String kimiApiKey;

    private final List<Map<String, Object>> conversationHistory = new ArrayList<>();

    @PostMapping
    public ResponseEntity<Map<String, Object>> chat(@RequestBody Map<String, String> request) {
        String userMessage = request.get("message");
        
        List<Bridge> bridges = bridgeRepository.findAll();
        String bridgeContext = buildBridgeContext(bridges);
        
        String systemPrompt = buildSystemPrompt(bridgeContext);
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            if (kimiApiKey == null || kimiApiKey.isEmpty()) {
                String answer = processLocally(userMessage, bridges);
                response.put("message", answer);
                response.put("action", determineAction(userMessage, bridges));
            } else {
                String answer = callKimAI(systemPrompt, userMessage);
                response.put("message", answer);
                response.put("action", determineAction(userMessage, bridges));
            }
        } catch (Exception e) {
            String answer = processLocally(userMessage, bridges);
            response.put("message", answer);
            response.put("action", determineAction(userMessage, bridges));
        }
        
        return ResponseEntity.ok(response);
    }

    private String buildBridgeContext(List<Bridge> bridges) {
        StringBuilder sb = new StringBuilder();
        sb.append("中国著名桥梁列表：\n");
        for (Bridge bridge : bridges) {
            sb.append("- ").append(bridge.getName());
            if (bridge.getNameEn() != null) sb.append(" (").append(bridge.getNameEn()).append(")");
            sb.append("，位于").append(bridge.getProvince()).append(bridge.getCity());
            if (bridge.getBridgeType() != null) sb.append("，类型：").append(bridge.getBridgeType());
            if (bridge.getConstructionYear() != null) sb.append("，建于").append(bridge.getConstructionYear()).append("年");
            if (bridge.getDescription() != null) sb.append("。").append(bridge.getDescription());
            sb.append("\n");
        }
        return sb.toString();
    }

    private String buildSystemPrompt(String bridgeContext) {
        return "你是「桥韵中华」的智能导游小助手，名叫「桥宝」。你的任务是帮助用户了解中国著名桥梁，" +
               "回答关于桥梁的问题，并根据用户请求跳转到对应桥梁的详情页面。\n\n" +
               "桥梁信息：\n" + bridgeContext + "\n\n" +
               "回答要求：\n" +
               "1. 友好、亲切，用中文回答\n" +
               "2. 如果用户想查看某座桥，返回action为bridge，bridgeId为桥梁ID\n" +
               "3. 如果用户只是聊天，保持轻松友好\n" +
               "4. 简洁明了，不要太长的回复\n" +
               "5. 可以适当介绍桥梁的历史和特点";
    }

    private String callKimAI(String systemPrompt, String userMessage) throws Exception {
        String url = "https://api.moonshot.cn/v1/chat/completions";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(kimiApiKey);
        
        List<Map<String, Object>> messages = new ArrayList<>();
        messages.add(Map.of("role", "system", "content", systemPrompt));
        
        if (!conversationHistory.isEmpty()) {
            messages.addAll(conversationHistory);
        }
        messages.add(Map.of("role", "user", "content", userMessage));
        
        Map<String, Object> body = new HashMap<>();
        body.put("model", "kimi-k2.5");
        body.put("messages", messages);
        body.put("temperature", 0.7);
        
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
        
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);
        
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            if (choices != null && !choices.isEmpty()) {
                Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                String content = (String) message.get("content");
                
                conversationHistory.add(Map.of("role", "user", "content", userMessage));
                conversationHistory.add(Map.of("role", "assistant", "content", content));
                
                if (conversationHistory.size() > 10) {
                    conversationHistory.subList(0, 2).clear();
                }
                
                return content;
            }
        }
        
        return "抱歉，我现在有点困了，让我换个方式回答你吧。";
    }

    private String processLocally(String userMessage, List<Bridge> bridges) {
        String lowerMsg = userMessage.toLowerCase();
        
        for (Bridge bridge : bridges) {
            String name = bridge.getName().toLowerCase();
            String nameEn = bridge.getNameEn() != null ? bridge.getNameEn().toLowerCase() : "";
            
            if (lowerMsg.contains(name) || lowerMsg.contains(nameEn) || 
                lowerMsg.contains(bridge.getProvince()) || lowerMsg.contains(bridge.getCity())) {
                return "好的！让我带你看看" + bridge.getName() + "，这座桥位于" + 
                       bridge.getProvince() + bridge.getCity() + "，" + 
                       (bridge.getDescription() != null ? bridge.getDescription() : "");
            }
        }
        
        if (lowerMsg.contains("最长") || lowerMsg.contains("最大")) {
            return "中国最长的桥是港珠澳大桥，全长55公里，是世界上最长的跨海大桥！点击地图上的标记可以查看详情哦~";
        }
        
        if (lowerMsg.contains("历史") || lowerMsg.contains("古老")) {
            return "最古老的桥是赵州桥，建于隋朝(605-618年)，已经有1400多年历史了，是世界上现存最早的敞肩式石拱桥！";
        }
        
        if (lowerMsg.contains("你好") || lowerMsg.contains("hi") || lowerMsg.contains("hello")) {
            return "你好呀！我是桥宝，你的智能导游~ 可以问我任何关于中国桥梁的问题，或者说「看看XX桥」来查看桥梁详情哦！";
        }
        
        if (lowerMsg.contains("谢谢")) {
            return "不客气！很高兴能帮到你~ 还有什么想了解的吗？";
        }
        
        if (lowerMsg.contains("北京")) {
            return "北京有著名的卢沟桥，位于北京市丰台区，是「卢沟晓月」景观的所在地，桥上的石狮子非常有名！";
        }
        
        if (lowerMsg.contains("河北")) {
            return "河北有著名的赵州桥，又名安济桥，位于石家庄市赵县，是隋朝李春设计的，已有1400多年历史！";
        }
        
        return "我是桥宝，你的智能导游~ 可以问我关于中国著名桥梁的问题，比如「最长的大桥」、「古老的桥」或者直接说「看看卢沟桥」等，我帮你跳转查看详情！";
    }

    private Map<String, Object> determineAction(String userMessage, List<Bridge> bridges) {
        String lowerMsg = userMessage.toLowerCase();
        
        for (Bridge bridge : bridges) {
            String name = bridge.getName().toLowerCase();
            String nameEn = bridge.getNameEn() != null ? bridge.getNameEn().toLowerCase() : "";
            
            if (lowerMsg.contains(name) || lowerMsg.contains(nameEn) || 
                lowerMsg.contains(bridge.getProvince()) || lowerMsg.contains(bridge.getCity())) {
                Map<String, Object> action = new HashMap<>();
                action.put("type", "bridge");
                action.put("bridgeId", bridge.getId());
                action.put("bridgeName", bridge.getName());
                action.put("lat", bridge.getLatitude());
                action.put("lng", bridge.getLongitude());
                return action;
            }
        }
        
        Map<String, Object> action = new HashMap<>();
        action.put("type", "none");
        return action;
    }

    @PostMapping("/clear")
    public ResponseEntity<Void> clearHistory() {
        conversationHistory.clear();
        return ResponseEntity.ok().build();
    }
}
