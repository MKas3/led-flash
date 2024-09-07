import { useEffect, useState } from 'react';

export const useFps = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();
    let rafId: number;

    const onRequestAnimationFrame = () => {
      frameCount += 1;
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= 1000) {
        const calculatedFps = Math.round((frameCount * 1000) / elapsedTime);
        setFps(calculatedFps);
        frameCount = 0;
        startTime = currentTime;
      }

      rafId = requestAnimationFrame(onRequestAnimationFrame);
    };

    rafId = requestAnimationFrame(onRequestAnimationFrame);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return fps;
};
