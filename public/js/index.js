// import gsap from "gsap";
// 不使用 import，直接使用全局 gsap 对象

gsap.to("#some-id", { duration: 1, x: 100 });
// 确保只在目标元素存在时执行动画
document.addEventListener('DOMContentLoaded', function() {
    // 检查 Lenis 库是否加载
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

    // 只在目标元素存在时执行 GSAP 动画
    if (document.querySelector('#some-id') || document.querySelector('.some-element')) {
        // GSAP 动画代码
        gsap.registerPlugin(ScrollTrigger);
        // 你的动画逻辑
    }
});


document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 创建 timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 向 timeline 添加动画
    tl.to(".some-element", {
        x: 100,
        duration: 1
    });
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const nav = document.querySelector("nav");
    const header = document.querySelector(".header");
    const heroImg = document.querySelector(".hero-img");
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        context.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();

    const frameCount = 285;
    const currentFrame = (index) =>
        `/frames/frame_${(index + 1).toString().padStart(4, "0")}.jpg`;

    let images = [];
    let videoFrames = {frame: 0};
    let imagesToLoad = frameCount;

    const onLoad = () => {
        imagesToLoad--;
        if (!imagesToLoad) {
            render();
            setupScrollTrigger();
        }
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = onLoad;
        img.onerror = function () {
            onLoad.call(this);
        };
        img.src = currentFrame(i);
        images.push(img);
    }

    const render = () => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        const img = images[videoFrames.frame];
        if (img && img.complete && img.naturalWidth > 0) {
            const imageAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = canvasWidth / canvasHeight;
            let drawWidth, drawHeight, drawX, drawY;

            if (imageAspect > canvasAspect) {
                drawHeight = canvasHeight;
                drawWidth = drawHeight * imageAspect;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = drawWidth / imageAspect;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            }

            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
    };

    const setupScrollTrigger = () => {
        ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            end: `+=${window.innerHeight * 7}px`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const animationProgress = Math.min(progress / 0.9, 1);
                const targetFrame = Math.round(
                    animationProgress * (frameCount - 1)
                );
                videoFrames.frame = targetFrame;
                render();

                // 导航栏淡出
                if (progress <= 0.1) {
                    const navProgress = progress / 0.1;
                    const opacity = 1 - navProgress;
                    gsap.set(nav, {opacity});
                } else {
                    gsap.set(nav, {opacity: 0});
                }

                // 标题3D移动与淡出
                if (progress <= 0.25) {
                    const zProgress = progress / 0.25;
                    const translateZ = zProgress * -500;
                    let opacity = 1;
                    if (progress >= 0.2) {
                        const fadeProgress = Math.min(
                            (progress - 0.2) / (0.25 - 0.2),
                            1
                        );
                        opacity = 1 - fadeProgress;
                    }
                    gsap.set(header, {
                        transform: `translate(-50%, -50%) translateZ(${translateZ}px)`,
                        opacity,
                    });
                } else {
                    gsap.set(header, {opacity: 0});
                }

                // 主图3D移动与淡入
                if (progress < 0.6) {
                    gsap.set(heroImg, {
                        transform: "translateZ(1000px)",
                        opacity: 0,
                    });
                } else if (progress >= 0.6 && progress <= 0.9) {
                    const imgProgress = (progress - 0.6) / 0.3;
                    const translateZ = 1000 - imgProgress * 1000;
                    let opacity = 0;
                    if (progress <= 0.8) {
                        const opacityProgress = (progress - 0.6) / 0.2;
                        opacity = opacityProgress;
                    } else {
                        opacity = 1;
                    }
                    gsap.set(heroImg, {
                        transform: `translateZ(${translateZ}px)`,
                        opacity,
                    });
                } else {
                    gsap.set(heroImg, {
                        transform: "translateZ(0px)",
                        opacity: 1,
                    });
                }
            },
        });
    };

    window.addEventListener("resize", () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
    });
})