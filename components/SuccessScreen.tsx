'use client';

import { useState, useEffect } from 'react';

const GIF_LOOP_INTERVAL_MS = 2500;
const TOTAL_STEPS = 7;

// Paste your song's YouTube video ID (e.g. from youtube.com/watch?v=VIDEO_ID) or leave empty to hide embed
const SONG_YOUTUBE_ID = 'Ip6cw8gfHHI';

// Add your photo paths (put images in public/album/ and list them here, e.g. '/album/photo1.jpg')
const PHOTO_ALBUM_IMAGES: string[] = [
  '/album/photo1.jpg',
  '/album/photo2.jpg',
  '/album/photo3.jpg',
  '/album/photo4.jpg',
  '/album/photo5.jpg',
  '/album/photo6.jpg',
];

const REASONS = [
  'Your smile makes my day brighter.',
  'You listen to me like no one else.',
  'You make ordinary moments feel special.',
  'I love who I am when I\'m with you.',
];

const FLOWERS = [
  { emoji: '🌷', message: 'Your kindness blooms everywhere.' },
  { emoji: '🌸', message: 'You make my world brighter.' },
  { emoji: '🌹', message: 'You\'re one of a kind.' },
  { emoji: '💐', message: 'I\'m so lucky to have you.' },
];

type SuccessScreenProps = {
  onStartOver: () => void;
};

export function SuccessScreen({ onStartOver }: SuccessScreenProps) {
  const [gifSrc, setGifSrc] = useState('/cina2.gif');
  const [step, setStep] = useState(0);
  const [revealedReasons, setRevealedReasons] = useState(0);
  const [pickedFlowers, setPickedFlowers] = useState<number[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setGifSrc((prev) => `/cina2.gif?t=${Date.now()}`);
    }, GIF_LOOP_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const handleNext = () => {
    if (step === 1) {
      if (revealedReasons < REASONS.length - 1) {
        setRevealedReasons((r) => r + 1);
      } else {
        setStep(2);
      }
    } else {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    }
  };

  const handlePickFlower = (index: number) => {
    if (pickedFlowers.includes(index)) return;
    setPickedFlowers((prev) => [...prev, index].sort((a, b) => a - b));
  };

  const isLastStep = step === TOTAL_STEPS - 1;

  const daysUntilValentines = () => {
    const feb14 = new Date(new Date().getFullYear(), 1, 14);
    const today = new Date();
    if (today > feb14) feb14.setFullYear(feb14.getFullYear() + 1);
    return Math.ceil((feb14.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div
      className={`animate-fade-in text-center mx-auto w-full ${step === 3 || step === 4 ? 'max-w-6xl' : 'max-w-xl'}`}
    >
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setStep(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === step
                ? 'bg-blue-500 scale-125'
                : i < step
                  ? 'bg-blue-300'
                  : 'bg-blue-200/60'
            }`}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>

      {/* Step 0: You said yes */}
      {step === 0 && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src={gifSrc}
              alt="Cinnamoroll"
              className="h-56 md:h-72 w-auto animate-gentle-bounce"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            You said yes!
          </h1>
          <p className="text-xl text-slate-700 font-medium">
            Thank you, Dapani. That made me so happy.
          </p>
          <p className="text-slate-600">Keep going — there’s a little more for you below.</p>
        </div>
      )}

      {/* Step 1: Reasons */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            A few reasons why I Like You
          </h2>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {REASONS.slice(0, revealedReasons + 1).map((reason, i) => (
              <li
                key={i}
                className="animate-fade-in p-4 rounded-2xl bg-white/80 border border-blue-200/60 shadow-md text-slate-700"
              >
                <span className="text-lg"></span> {reason}
              </li>
            ))}
          </ul>
          {revealedReasons < REASONS.length - 1 && (
            <p className="text-slate-500 text-sm">Click &quot;Next&quot; to reveal more.</p>
          )}
        </div>
      )}

      {/* Step 2: Pick a flower */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            Pick a flower
          </h2>
          <p className="text-slate-600">Click each one to reveal a little message.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {FLOWERS.map((flower, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handlePickFlower(i)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl min-w-[120px] transition-all duration-300 hover:scale-105 active:scale-95 ${
                  pickedFlowers.includes(i)
                    ? 'bg-blue-100/90 border-2 border-blue-300 shadow-lg'
                    : 'bg-white/80 border-2 border-blue-200/60 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <span className="text-4xl md:text-5xl">{flower.emoji}</span>
                {pickedFlowers.includes(i) ? (
                  <span className="text-sm font-medium text-slate-700 text-center animate-fade-in">
                    {flower.message}
                  </span>
                ) : (
                  <span className="text-sm text-slate-500">?</span>
                )}
              </button>
            ))}
          </div>
          {pickedFlowers.length > 0 && (
            <p className="text-slate-500 text-sm">
              {pickedFlowers.length < FLOWERS.length
                ? 'Pick another or click Next when you\'re ready.'
                : 'You picked them all!'}
            </p>
          )}
        </div>
      )}

      {/* Step 3: This song reminds me of you */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            This song reminds me of you
          </h2>
          <p className="text-lg font-semibold text-slate-700">
            d4vd – Here With Me
          </p>
          {SONG_YOUTUBE_ID ? (
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-2 border-blue-200/80">
              <iframe
                title="Song that reminds me of you"
                src={`https://www.youtube.com/embed/${SONG_YOUTUBE_ID}?autoplay=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic">
              Add your song: set SONG_YOUTUBE_ID in SuccessScreen.tsx (e.g. from youtube.com/watch?v=...)
            </p>
          )}
        </div>
      )}

      {/* Step 4: Our photo album */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            Our photo album
          </h2>
          <p className="text-slate-600">
            Some of our favourite moments together.
          </p>
          {PHOTO_ALBUM_IMAGES.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {PHOTO_ALBUM_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-blue-200/80 bg-slate-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Our memory ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic py-8">
              Add your photos: put images in the <code className="bg-slate-100 px-1 rounded">public/album/</code> folder, then add their paths to <code className="bg-slate-100 px-1 rounded">PHOTO_ALBUM_IMAGES</code> in SuccessScreen.tsx (e.g. &apos;/album/photo1.jpg&apos;).
            </p>
          )}
        </div>
      )}

      {/* Step 5: Countdown */}
      {step === 5 && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src={gifSrc}
              alt="Cinnamoroll"
              className="h-48 md:h-56 w-auto animate-gentle-bounce"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            See you on the 14th
          </h2>
          <div className="inline-flex flex-col items-center gap-1 p-6 rounded-3xl bg-white/90 border-2 border-blue-200 shadow-xl">
            <span className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {daysUntilValentines()}
            </span>
            <span className="text-slate-600 font-medium">days until Valentine&apos;s</span>
          </div>
          <p className="text-slate-600">
            I can’t wait to celebrate with you.
          </p>
        </div>
      )}

      {/* Step 6: The end + Start Over */}
      {step === 6 && (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            You’ve reached the end
          </h2>
          <p className="text-lg text-slate-600">
            Thanks for going through it all, Dapani. Iloveyou.
          </p>
          <button
            onClick={onStartOver}
            className="mt-6 px-8 py-3 bg-linear-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-400"
          >
            Start Over
          </button>
        </div>
      )}

      {/* Next button (except on last step) */}
      {!isLastStep && (
        <div className="mt-10">
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {step === 1 && revealedReasons < REASONS.length - 1
              ? 'Next reason'
              : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
