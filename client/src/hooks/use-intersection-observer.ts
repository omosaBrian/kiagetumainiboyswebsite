import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Custom hook to observe when an element intersects the viewport
 * 
 * @param options - IntersectionObserver options plus 'once' flag
 * @returns [ref, isIntersecting] - ref to attach to element, boolean for intersection state
 */
export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  once = false
}: IntersectionObserverOptions = {}): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If 'once' is true and element is intersecting, unobserve it
        if (once && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { root, rootMargin, threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [root, rootMargin, threshold, once]);

  return [ref, isIntersecting];
}
