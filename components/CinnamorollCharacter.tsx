'use client';

import { useState, useEffect } from 'react';

const GIF_LOOP_INTERVAL_MS = 2500;
const EASTER_EGG_MESSAGES = [
  'I love you! 💙',
  "You're the best!",
  'So happy you\'re here!',
  'Click me again! 💕',
  'Dapani! 💙',
];

export function CinnamorollCharacter() {
  const [src, setSrc] = useState('/cina.gif');
  const [floatingMessage, setFloatingMessage] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSrc((prev) => `/cina.gif?t=${Date.now()}`);
    }, GIF_LOOP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const handleClick = () => {
    const msg = EASTER_EGG_MESSAGES[clickCount % EASTER_EGG_MESSAGES.length];
    setFloatingMessage(msg);
    setClickCount((c) => c + 1);
    setTimeout(() => setFloatingMessage(null), 1500);
  };

  return (
    <div className="mb-8 flex justify-center select-none outline-none">
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        className="relative w-72 h-72 md:w-80 md:h-80 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-full"
        aria-label="Click Cinnamoroll for a surprise"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Cinnamoroll - click for a surprise!"
          className="w-full h-full object-contain pointer-events-none"
          style={{ width: '100%', height: '100%' }}
          draggable={false}
        />
        {floatingMessage && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-message text-xl font-bold text-blue-600 whitespace-nowrap drop-shadow-lg pointer-events-none"
            key={Date.now()}
          >
            {floatingMessage}
          </div>
        )}
      </div>
    </div>
  );
}
