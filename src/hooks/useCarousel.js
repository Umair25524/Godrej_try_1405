import { useState, useEffect, useCallback } from 'react';

export function useCarousel(itemCount, options = {}) {
  const { autoPlay = false, interval = 3000, startIndex = 0 } = options;
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isDragging, setIsDragging] = useState(false);

  // Move by direction (positive or negative)
  const move = useCallback(
    (direction) => {
      setActiveIndex((current) => (current + direction + itemCount) % itemCount);
    },
    [itemCount]
  );

  // Go to specific index
  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + itemCount) % itemCount);
    },
    [itemCount]
  );

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isDragging || itemCount < 2) return;
    const timer = setInterval(() => move(1), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isDragging, itemCount, interval, move]);

  return { activeIndex, move, goTo, isDragging, setIsDragging };
}