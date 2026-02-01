'use client';

import type { Tulip } from '@/types/valentine';

type FloatingTulipsProps = {
  tulips: Tulip[];
};

export function FloatingTulips({ tulips }: FloatingTulipsProps) {
  const firstTulip = tulips[0];
  const startX = firstTulip?.x ?? 0;
  const startY = firstTulip?.y ?? 0;
  const endX = startX * 3;
  const endY = (firstTulip?.y ?? 0) - 200;

  return (
    <>
      {tulips.map((tulip) => (
        <div
          key={tulip.id}
          className="fixed pointer-events-none text-4xl"
          style={{
            left: '50%',
            top: '50%',
            animation: 'tulip-float 3s ease-in forwards',
            animationDelay: `${tulip.delay}s`,
            transform: `translate(calc(-50% + ${tulip.x}px), calc(-50% + ${tulip.y}px))`,
          }}
        >
          🌷
        </div>
      ))}
      <style>{`
        @keyframes tulip-float {
          0% {
            opacity: 1;
            transform: translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0.5);
          }
        }
      `}</style>
    </>
  );
}
