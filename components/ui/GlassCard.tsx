interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className = "", hoverEffect = false }: GlassCardProps) {
  const hoverClass = hoverEffect
    ? "transition-[transform,background-color,box-shadow] duration-200 hover:scale-[1.02] hover:bg-white/15 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
    : ""

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-glass-border bg-glass-200 backdrop-blur-xl shadow-lg ${hoverClass} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  )
}

export default GlassCard
