# 接口与资源使用说明 (API & Resources Usage)

## 一、前端依赖库 (CDN)

本项目是一个**单页应用 (SPA)**，主要依赖成熟的第三方 CDN 库来实现高性能的视觉效果，这些库均为业界标准：

1.  **Three.js (r128)**
    *   **用途**: 3D 渲染。用于“建筑巡礼”章节的卢沟桥 3D 交互模型。
    *   **地址**: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`

2.  **GSAP (GreenSock Animation Platform)**
    *   **用途**: 高级动画控制。用于页面滚动动画、摄像机平滑运镜、时间轴联动。
    *   **核心库**: `gsap.min.js`
    *   **插件**: `ScrollTrigger.min.js` (滚动触发), `ScrollToPlugin.min.js` (平滑滚动)。

3.  **ECharts**
    *   **用途**: 数据可视化。用于“京西门户”章节的关税折线图。
    *   **地址**: `https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js`

4.  **D3.js**
    *   **用途**: (预留) 数据处理辅助。
    *   **地址**: `https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js`

## 二、数据策略 (Data Strategy)

为了确保**演示的稳定性**与**评审时的流畅性**，本项目**不依赖需要 Key 的实时外部 API**（如 Google Maps, Mapbox），而是采用了以下策略：

### 1. 模拟数据 (Mock Data)
*   **关税数据**: 在前端代码中预置了 `revenues` 数组，模拟了 1441-1911 年间的关税趋势（基于《清会典》等史料的走势特征）。
*   **历史事件**: 预置了 `events` 对象，包含关键年份的文本描述。

### 2. 本地化地图 (Canvas Simulation)
*   **原因**: 真实的历史地图 API（如中国历史地理信息系统 - CHGIS）通常需要复杂的权限和数据对接。
*   **解决方案**: 使用 **HTML5 Canvas** 手绘绘制了风格化的“京畿古地图”底图。
    *   优点：加载速度极快，无 API 限制，风格可自定义为“水墨/古风”，与页面高度统一。
    *   实现：在 `drawTraffic` 函数中通过贝塞尔曲线绘制了永定河走势，并用文字标签标注了主要地点。

## 三、后续扩展建议 (Future Improvements)

如果要在生产环境中发布，建议接入以下真实数据源：

1.  **地图服务**:
    *   可接入 **Mapbox GL JS** 配合自定义 Mapbox Studio 样式，将底图替换为明清时期的老北京地图切片。
    *   或使用 **Leaflet.js** 配合历史地图瓦片。

2.  **真实数据 API**:
    *   **中国历史文献联合目录**: 获取真实的古籍 OCR 数据。
    *   **国家统计局/中国海关**: 获取近代更精确的关税与贸易数据。

---

> **总结**: 目前的方案是一个**零依赖、零 Key** 的高保真原型，所有的数据与地图均为“代码级定制”，确保了在任何环境下打开即用，极大降低了演示风险。

