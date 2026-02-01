export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Soft blue orbs with custom float / breathe / drift */}
      <div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-bg-float"
        style={{ opacity: 0.3 }}
      />
      <div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-bg-breathe"
        style={{ opacity: 0.15, animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-bg-drift"
        style={{ opacity: 0.25, animationDelay: '0.5s' }}
      />
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl animate-bg-float"
        style={{ opacity: 0.12, animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 right-10 w-24 h-24 bg-blue-100 rounded-full blur-2xl animate-bg-breathe"
        style={{ opacity: 0.35, animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-200 rounded-full blur-3xl animate-bg-float-up"
        style={{ opacity: 0.1, animationDelay: '0s' }}
      />
      {/* Layer 2: More orbs for depth */}
      <div
        className="absolute top-1/4 right-1/4 w-36 h-36 bg-blue-200/80 rounded-full blur-3xl animate-bg-drift"
        style={{ opacity: 0.2, animationDelay: '3s' }}
      />
      <div
        className="absolute bottom-1/3 left-16 w-44 h-44 bg-blue-300/80 rounded-full blur-3xl animate-bg-float"
        style={{ opacity: 0.18, animationDelay: '4s' }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-28 h-28 bg-blue-100 rounded-full blur-2xl animate-bg-breathe"
        style={{ opacity: 0.28, animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-16 right-1/3 w-20 h-20 bg-blue-200 rounded-full blur-2xl animate-bg-float-up"
        style={{ opacity: 0.22, animationDelay: '5s' }}
      />
      {/* Layer 3: Subtle pulse for ambient feel */}
      <div
        className="absolute bottom-10 left-1/4 w-52 h-52 bg-blue-200 rounded-full blur-3xl animate-pulse"
        style={{ opacity: 0.08, animationDuration: '6s', animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl animate-pulse"
        style={{ opacity: 0.2, animationDuration: '5s', animationDelay: '1s' }}
      />
    </div>
  );
}
