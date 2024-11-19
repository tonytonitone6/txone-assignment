import { useLayoutEffect, useRef } from 'react';


const useDistance = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    function calculatePosition() {
      if (containerRef.current && targetRef.current) {
        const containerScope = containerRef.current.getBoundingClientRect();
        const targetScope = targetRef.current.getBoundingClientRect();

      }
    }

    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
    }
  }, []);
}
