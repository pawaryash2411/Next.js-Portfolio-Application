'use client';

import React, { useEffect } from 'react';

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
      '(prefers-reduced-motion: reduce)'
    );

    class Rocket {
      position: { x: number; y: number };
      size: number;
      lag: number;
      angle: number;
      flameSize: number;

      constructor(x: number, y: number, size: number, lag: number) {
        this.position = { x, y };
        this.size = size;
        this.lag = lag;
        this.angle = 0;
        this.flameSize = 0;
      }

      drawRocket(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.angle);
        const scale = this.size / 28;
        context.scale(scale, scale);
        
        // Rocket body
        context.fillStyle = '#7042f88b';
        context.beginPath();
        context.moveTo(0, -20);
        context.lineTo(-8, -8);
        context.lineTo(-5, 0);
        context.lineTo(-10, 15);
        context.lineTo(0, 8);
        context.lineTo(10, 15);
        context.lineTo(5, 0);
        context.lineTo(8, -8);
        context.closePath();
        context.fill();
        
        // Rocket window
        context.fillStyle = '#E1F5FE';
        context.beginPath();
        context.arc(0, -5, 3, 0, Math.PI * 2);
        context.fill();
        
        // Rocket stripes
        context.fillStyle = '#FF9800';
        context.fillRect(-6, 2, 12, 2);
        context.fillRect(-4, 6, 8, 2);
        
        // Rocket flames (animated)
        this.flameSize = (this.flameSize + 0.2) % 3;
        const flameHeight = 10 + this.flameSize;
        
        // Yellow flame
        context.fillStyle = '#FFEB3B';
        context.beginPath();
        context.moveTo(-5, 15);
        context.lineTo(0, 15 + flameHeight * 1.5);
        context.lineTo(5, 15);
        context.closePath();
        context.fill();
        
        // Orange flame
        context.fillStyle = '#FF9800';
        context.beginPath();
        context.moveTo(-4, 15);
        context.lineTo(0, 15 + flameHeight);
        context.lineTo(4, 15);
        context.closePath();
        context.fill();
        
        // Red flame
        context.fillStyle = '#F44336';
        context.beginPath();
        context.moveTo(-3, 15);
        context.lineTo(0, 15 + flameHeight * 0.7);
        context.lineTo(3, 15);
        context.closePath();
        context.fill();
        
        context.restore();
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        // Calculate angle towards cursor
        const dx = x - this.position.x;
        const dy = y - this.position.y;
        this.angle = Math.atan2(dy, dx) + Math.PI / 2;
        
        // Smooth movement
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        
        this.drawRocket(context);
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
        console.log('Reduced motion enabled, cursor effect skipped.');
        return;
      }

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
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