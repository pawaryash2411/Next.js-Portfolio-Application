"use client";

import React, { useEffect } from "react";

interface FollowCursorProps {
  size?: number;
  lag?: number;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ size = 28, lag = 10 }) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // Particle system for enhanced effects
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number, angle: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.cos(angle + (Math.random() - 0.5) * 0.5) * (Math.random() * 3 + 1);
        this.speedY = Math.sin(angle + (Math.random() - 0.5) * 0.5) * (Math.random() * 3 + 1);
        this.color = `hsl(${Math.random() * 20 + 30}, 100%, ${Math.random() * 30 + 50}%)`;
        this.life = 0;
        this.maxLife = Math.random() * 20 + 10;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.95;
        this.speedY *= 0.95;
        this.life++;
        this.size *= 0.95;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = 1 - this.life / this.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    class Rocket {
      position: { x: number; y: number };
      size: number;
      lag: number;
      angle: number;
      flameSize: number;
      flameIntensity: number;
      particles: Particle[];
      trail: {x: number, y: number, size: number}[];
      wingWobble: number;
      wingWobbleDirection: number;

      constructor(x: number, y: number, size: number, lag: number) {
        this.position = { x, y };
        this.size = size;
        this.lag = lag;
        this.angle = 0;
        this.flameSize = 0;
        this.flameIntensity = 1;
        this.particles = [];
        this.trail = [];
        this.wingWobble = 0;
        this.wingWobbleDirection = 0.1;
      }

      drawRocket(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.angle);
        const scale = this.size / 28;
        context.scale(scale, scale);

        // Update wing wobble for dynamic effect
        this.wingWobble += this.wingWobbleDirection;
        if (this.wingWobble > 0.5 || this.wingWobble < -0.5) {
          this.wingWobbleDirection *= -1;
        }

        // Rocket body with metallic gradient and shine
        const bodyGradient = context.createLinearGradient(0, -20, 0, 15);
        bodyGradient.addColorStop(0, "#8a63ff");
        bodyGradient.addColorStop(0.3, "#7a53ff");
        bodyGradient.addColorStop(0.6, "#5a33cc");
        bodyGradient.addColorStop(1, "#4a2bb5");
        
        context.fillStyle = bodyGradient;
        
        // Rocket body with more aerodynamic shape
        context.beginPath();
        context.moveTo(0, -20);
        context.bezierCurveTo(-12, -10, -10, 5, -8, 8);
        context.lineTo(-6, 12);
        context.lineTo(-8, 15);
        context.lineTo(0, 10);
        context.lineTo(8, 15);
        context.lineTo(6, 12);
        context.lineTo(8, 8);
        context.bezierCurveTo(10, 5, 12, -10, 0, -20);
        context.fill();

        // Add metallic shine
        const shineGradient = context.createLinearGradient(-5, -15, 5, 15);
        shineGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        shineGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.4)");
        shineGradient.addColorStop(0.7, "rgba(255, 255, 255, 0.1)");
        shineGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        context.fillStyle = shineGradient;
        context.beginPath();
        context.moveTo(-4, -18);
        context.bezierCurveTo(-3, -10, -2, 5, -1, 10);
        context.lineTo(0, 12);
        context.lineTo(1, 10);
        context.bezierCurveTo(2, 5, 3, -10, 4, -18);
        context.closePath();
        context.fill();

        // Add panel lines with depth
        context.strokeStyle = "rgba(0,0,0,0.3)";
        context.lineWidth = 0.8;
        context.beginPath();
        context.moveTo(-6, -5);
        context.lineTo(-6, 10);
        context.moveTo(6, -5);
        context.lineTo(6, 10);
        context.stroke();
        
        context.strokeStyle = "rgba(255,255,255,0.2)";
        context.lineWidth = 0.5;
        context.beginPath();
        context.moveTo(-5.5, -4);
        context.lineTo(-5.5, 9);
        context.moveTo(5.5, -4);
        context.lineTo(5.5, 9);
        context.stroke();

        // Rocket window with more realistic appearance
        const windowGradient = context.createRadialGradient(0, -5, 0, 0, -5, 5);
        windowGradient.addColorStop(0, "#e6f7ff");
        windowGradient.addColorStop(0.6, "#66b3ff");
        windowGradient.addColorStop(1, "#1a75ff");
        
        context.fillStyle = windowGradient;
        context.beginPath();
        context.arc(0, -5, 4, 0, Math.PI * 2);
        context.fill();
        
        // Window highlight
        context.fillStyle = "rgba(255, 255, 255, 0.7)";
        context.beginPath();
        context.arc(-1.5, -6, 1.2, 0, Math.PI * 2);
        context.fill();

        // Rocket fins with dynamic wobble
        context.fillStyle = "#ffaa00";
        
        // Left fin
        context.save();
        context.translate(-8, 12);
        context.rotate(this.wingWobble * 0.1);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(-5, 8);
        context.lineTo(0, 5);
        context.closePath();
        context.fill();
        context.restore();
        
        // Right fin
        context.save();
        context.translate(8, 12);
        context.rotate(-this.wingWobble * 0.1);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(5, 8);
        context.lineTo(0, 5);
        context.closePath();
        context.fill();
        context.restore();

        // Rocket stripes with gradient
        const stripeGradient = context.createLinearGradient(-6, 0, 6, 0);
        stripeGradient.addColorStop(0, "#ff8c00");
        stripeGradient.addColorStop(0.5, "#ffaa00");
        stripeGradient.addColorStop(1, "#ff8c00");
        
        context.fillStyle = stripeGradient;
        context.fillRect(-6, 2, 12, 2);
        context.fillRect(-4, 6, 8, 2);

        // Enhanced animated flame with multiple layers
        this.flameSize = 5 + Math.sin(Date.now() / 100) * 2;
        this.flameIntensity = 0.8 + Math.random() * 0.2;

        // Outer flame (largest, most transparent)
        const outerFlame = context.createRadialGradient(
          0, 15, 0, 
          0, 15 + this.flameSize * 2, this.flameSize * 3
        );
        outerFlame.addColorStop(0, `rgba(255, 240, 100, ${0.7 * this.flameIntensity})`);
        outerFlame.addColorStop(1, "rgba(255, 180, 50, 0)");
        
        context.fillStyle = outerFlame;
        context.beginPath();
        context.moveTo(-6, 15);
        context.quadraticCurveTo(0, 15 + this.flameSize * 2.5, 6, 15);
        context.closePath();
        context.fill();

        // Middle flame
        const middleFlame = context.createRadialGradient(
          0, 15, 0, 
          0, 15 + this.flameSize * 1.5, this.flameSize * 2
        );
        middleFlame.addColorStop(0, `rgba(255, 150, 30, ${0.8 * this.flameIntensity})`);
        middleFlame.addColorStop(1, "rgba(255, 100, 0, 0)");
        
        context.fillStyle = middleFlame;
        context.beginPath();
        context.moveTo(-4, 15);
        context.quadraticCurveTo(0, 15 + this.flameSize * 1.8, 4, 15);
        context.closePath();
        context.fill();

        // Inner flame (most intense)
        const innerFlame = context.createRadialGradient(
          0, 15, 0, 
          0, 15 + this.flameSize, this.flameSize
        );
        innerFlame.addColorStop(0, `rgba(255, 80, 0, ${this.flameIntensity})`);
        innerFlame.addColorStop(0.7, "rgba(200, 40, 0, 0.5)");
        innerFlame.addColorStop(1, "rgba(150, 20, 0, 0)");
        
        context.fillStyle = innerFlame;
        context.beginPath();
        context.moveTo(-2, 15);
        context.quadraticCurveTo(0, 15 + this.flameSize * 1.2, 2, 15);
        context.closePath();
        context.fill();

        // Add some flame particles
        if (Math.random() > 0.7) {
          const particleAngle = this.angle - Math.PI/2 + (Math.random() - 0.5) * 0.5;
          this.particles.push(new Particle(
            this.position.x + Math.cos(particleAngle) * 15 * scale,
            this.position.y + Math.sin(particleAngle) * 15 * scale,
            particleAngle
          ));
        }

        context.restore();
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        // Calculate angle towards cursor
        const dx = x - this.position.x;
        const dy = y - this.position.y;
        this.angle = Math.atan2(dy, dx) + Math.PI / 2;

        // Add current position to trail
        this.trail.push({
          x: this.position.x,
          y: this.position.y,
          size: this.size
        });
        
        // Keep trail at a reasonable length
        if (this.trail.length > 10) {
          this.trail.shift();
        }

        // Smooth movement with easing
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = Math.min(distance / 10, 20);
        
        this.position.x += (x - this.position.x) / (this.lag * (0.5 + speed/40));
        this.position.y += (y - this.position.y) / (this.lag * (0.5 + speed/40));

        // Update and draw particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].update();
          this.particles[i].draw(context);
          
          if (this.particles[i].life > this.particles[i].maxLife) {
            this.particles.splice(i, 1);
          }
        }

        // Draw motion trail
        this.drawTrail(context);

        this.drawRocket(context);
      }

      drawTrail(context: CanvasRenderingContext2D) {
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const alpha = 0.1 + (i / this.trail.length) * 0.4;
          const size = point.size * (0.5 + (i / this.trail.length) * 0.5);
          
          context.globalAlpha = alpha;
          context.fillStyle = "#7a53ff";
          context.beginPath();
          context.arc(point.x, point.y, size / 4, 0, Math.PI * 2);
          context.fill();
        }
        context.globalAlpha = 1;
      }
    }

    const rocket = new Rocket(width / 2, height / 2, size, lag);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateRocket = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        rocket.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateRocket();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.");
        return;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [size, lag]);

  return null;
};

export default FollowCursor;