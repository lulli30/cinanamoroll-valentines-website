'use client';

import { CinnamorollCharacter } from './CinnamorollCharacter';

type ValentineQuestionProps = {
  noButtonPosition: { x: number; y: number };
  hideNo: boolean;
  onYesClick: () => void;
  onNoHover: () => void;
};

export function ValentineQuestion({
  noButtonPosition,
  hideNo,
  onYesClick,
  onNoHover,
}: ValentineQuestionProps) {
  return (
    <div className="animate-fade-in">
      <CinnamorollCharacter />
      {/* Main text */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-2 leading-tight">
        Dapani,
      </h1>
      <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
        Will You Be My Valentine?
      </h2>
      {/* Buttons container */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
        <button
          onClick={onYesClick}
          className="relative px-12 py-4 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-blue-300 animate-glow-pulse"
        >
          <span className="relative z-10">YES</span>
          <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300 animate-pulse" />
        </button>
        {!hideNo && (
          <button
            onMouseEnter={onNoHover}
            onTouchStart={onNoHover}
            onClick={onNoHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
            className="relative px-12 py-4 bg-linear-to-r from-slate-100 to-slate-200 text-slate-700 text-2xl font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-slate-300 hover:border-slate-400 hover:scale-105 animate-wiggle"
          >
            NO
          </button>
        )}
      </div>
    </div>
  );
}
