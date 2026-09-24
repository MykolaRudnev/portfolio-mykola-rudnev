interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className = "", hoverEffect = false }: GlassCardProps) {
  const hoverClass = hoverEffect ? "transition-colors duration-200 hover:bg-paper-2" : ""

  return (
    <div className={`rounded-xl border border-rule bg-sheet text-ink ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard
