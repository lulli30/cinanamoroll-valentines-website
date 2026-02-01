export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Soft blue circles with multiple layers */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-25 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-35 blur-2xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
}
