import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ 
  end, 
  duration = 2000, 
  suffix = '',
  className = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({ once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isIntersecting || hasAnimated.current) return;
    
    hasAnimated.current = true;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
