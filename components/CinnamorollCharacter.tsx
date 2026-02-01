'use client';

import { useState, useEffect, useRef } from 'react';

const GIF_LOOP_INTERVAL_MS = 2500;
const EASTER_EGG_MESSAGES = [
  'ra comshap',
  "ra pares!",
  'ra waffle!',
  'ra valo!',
  'Dapani!',
];

const BURST_HEARTS = 10;
const BURST_RADIUS = 56;
const HEART_EMOJIS = ['🤍']; /* white heart for burst */
const heartPositions = Array.from({ length: BURST_HEARTS }, (_, i) => {
  const angle = (i / BURST_HEARTS) * 2 * Math.PI - Math.PI / 2;
  return {
    tx: `${Math.cos(angle) * BURST_RADIUS}px`,
    ty: `${Math.sin(angle) * BURST_RADIUS}px`,
    delay: `${i * 0.03}s`,
    emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
  };
});

const MESSAGE_DURATION_MS = 2200;

export function CinnamorollCharacter() {
  const [src, setSrc] = useState('/cina.gif');
  const [floatingMessage, setFloatingMessage] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const isShowingRef = useRef(false);
  const overlayKeyRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSrc((prev) => `/cina.gif?t=${Date.now()}`);
    }, GIF_LOOP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const triggerEffect = () => {
    if (isShowingRef.current) return;
    isShowingRef.current = true;
    overlayKeyRef.current += 1;
    const msg = EASTER_EGG_MESSAGES[clickCount % EASTER_EGG_MESSAGES.length];
    setFloatingMessage(msg);
    setClickCount((c) => c + 1);
    setTimeout(() => {
      setFloatingMessage(null);
      isShowingRef.current = false;
    }, MESSAGE_DURATION_MS);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    triggerEffect();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerEffect();
    }
  };

  return (
    <div className="mb-8 flex justify-center select-none outline-none">
      <div
        role="button"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onKeyDown={handleKeyDown}
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            key={`easter-${overlayKeyRef.current}`}
          >
            {/* Burst hearts */}
            {heartPositions.map((pos, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 text-2xl -translate-x-1/2 -translate-y-1/2"
                style={
                  {
                    '--tx': pos.tx,
                    '--ty': pos.ty,
                    animation: 'heart-burst 1.8s ease-out forwards',
                    animationDelay: pos.delay,
                  } as React.CSSProperties
                }
              >
                {pos.emoji}
              </span>
            ))}
            {/* Message bubble above character - no glow to avoid gradient halo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
              <div
                className="px-5 py-3 rounded-2xl bg-white border-2 border-blue-300/80 shadow-md"
                style={{
                  animation: 'float-message-pop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                }}
              >
                <span className="text-xl font-bold bg-linear-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap">
                  {floatingMessage}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
