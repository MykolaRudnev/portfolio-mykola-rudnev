export function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full py-32">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full blur-[4px] animate-pulse" />
        </div>
      </div>
    </div>
  )
}
