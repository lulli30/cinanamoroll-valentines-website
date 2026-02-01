'use client';

import { useState, useCallback } from 'react';
import type { Tulip } from '@/types/valentine';

export function useValentineState() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesClicked, setYesClicked] = useState(false);
  const [hideNo, setHideNo] = useState(false);
  const [tulips, setTulips] = useState<Tulip[]>([]);

  const handleNoHover = useCallback(() => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  }, []);

  const handleYesClick = useCallback(() => {
    setYesClicked(true);
    setHideNo(true);
    const newTulips: Tulip[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      delay: Math.random() * 0.5,
    }));
    setTulips(newTulips);
  }, []);

  const handleStartOver = useCallback(() => {
    setYesClicked(false);
    setHideNo(false);
    setNoButtonPosition({ x: 0, y: 0 });
    setTulips([]);
  }, []);

  return {
    noButtonPosition,
    yesClicked,
    hideNo,
    tulips,
    handleNoHover,
    handleYesClick,
    handleStartOver,
  };
}
