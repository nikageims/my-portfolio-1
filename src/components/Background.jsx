import { useEffect, useRef } from 'react';
import bgImage from '../assets/bg_nikmax.webp';

const Background = () => {
    const canvasRef = useRef(null);
    const mouseXRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let w, h;
        let particles = [];
        let animationFrameId;

        const initCanvas = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < 250; i++) {
                particles.push(new Particle());
            }
        };

        const handleMouseMove = (e) => {
            mouseXRef.current = (e.clientX / window.innerWidth) * 2 - 1;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.glow = Math.random() * 25 + 5;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + (mouseXRef.current * 1.5);

                if (this.y > h) {
                    this.y = -10;
                    this.x = Math.random() * w;
                }

                if (this.x > w + 10) this.x = -10;
                else if (this.x < -10) this.x = w + 10;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
                ctx.shadowBlur = this.glow;
                ctx.shadowColor = "yellow";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        initCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', initCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="bg-container">
                <img src={bgImage} alt="Background" className="bg-image" />
            </div>
            <canvas id="particles-canvas" ref={canvasRef}></canvas>
        </>
    );
};

export default Background;
