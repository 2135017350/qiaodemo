package com.bridge.rhyme.controller;

import com.bridge.rhyme.entity.Bridge;
import com.bridge.rhyme.repository.BridgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bridges")
@CrossOrigin(origins = "*")
public class BridgeController {

    @Autowired
    private BridgeRepository bridgeRepository;

    @GetMapping
    public ResponseEntity<List<Bridge>> getAllBridges() {
        List<Bridge> bridges = bridgeRepository.findAll();
        return ResponseEntity.ok(bridges);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bridge> getBridgeById(@PathVariable Integer id) {
        Optional<Bridge> bridge = bridgeRepository.findById(id);
        return bridge.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/province/{province}")
    public ResponseEntity<List<Bridge>> getBridgesByProvince(@PathVariable String province) {
        List<Bridge> bridges = bridgeRepository.findByProvince(province);
        return ResponseEntity.ok(bridges);
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Bridge>> getBridgesByType(@PathVariable String type) {
        List<Bridge> bridges = bridgeRepository.findByBridgeType(type);
        return ResponseEntity.ok(bridges);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Bridge>> searchBridges(@RequestParam String keyword) {
        List<Bridge> bridges = bridgeRepository.findByNameContaining(keyword);
        return ResponseEntity.ok(bridges);
    }

    @PostMapping
    public ResponseEntity<Bridge> createBridge(@RequestBody Bridge bridge) {
        Bridge saved = bridgeRepository.save(bridge);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bridge> updateBridge(@PathVariable Integer id, @RequestBody Bridge bridge) {
        Optional<Bridge> existing = bridgeRepository.findById(id);
        if (existing.isPresent()) {
            bridge.setId(id);
            Bridge updated = bridgeRepository.save(bridge);
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBridge(@PathVariable Integer id) {
        if (bridgeRepository.existsById(id)) {
            bridgeRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
