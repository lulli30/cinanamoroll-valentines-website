'use client';

import { AnimatedBackground } from '@/components/AnimatedBackground';
import { FloatingTulips } from '@/components/FloatingTulips';
import { SuccessScreen } from '@/components/SuccessScreen';
import { ValentineQuestion } from '@/components/ValentineQuestion';
import { useValentineState } from '@/hooks/useValentineState';

export default function ValentinesPage() {
  const state = useValentineState();
  const {
    noButtonPosition,
    yesClicked,
    hideNo,
    handleNoHover,
    handleYesClick,
    handleStartOver,
  } = state;

  return (
    <main className="min-h-screen w-full overflow-hidden bg-linear-to-br from-blue-50 via-blue-100 to-white flex items-center justify-center p-4">
      <AnimatedBackground />

      <FloatingTulips tulips={state.tulips} />

      <div
        className={`relative z-10 mx-auto text-center w-full ${yesClicked ? 'max-w-6xl' : 'max-w-2xl'}`}
      >
        {!yesClicked ? (
          <ValentineQuestion
            noButtonPosition={noButtonPosition}
            hideNo={hideNo}
            onYesClick={handleYesClick}
            onNoHover={handleNoHover}
          />
        ) : (
          <SuccessScreen onStartOver={handleStartOver} />
        )}
      </div>
    </main>
  );
}
