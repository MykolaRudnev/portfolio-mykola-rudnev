interface SkeletonBlockProps {
  className?: string
}

function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return <div className={`animate-pulse rounded-xl bg-white/8 ${className}`} />
}

export function PageSkeleton() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto w-full" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading page</span>
      <div className="mb-6 h-4 w-48">
        <SkeletonBlock className="h-4 w-48" />
      </div>
      <div className="text-center space-y-4 mb-16">
        <SkeletonBlock className="h-12 w-3/4 max-w-xl mx-auto" />
        <SkeletonBlock className="h-6 w-full max-w-lg mx-auto" />
        <SkeletonBlock className="h-6 w-2/3 max-w-md mx-auto" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-10 space-y-4">
        <SkeletonBlock className="h-24 w-full" />
        <SkeletonBlock className="h-24 w-full" />
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4">
      <SkeletonBlock className="h-4 w-32" />
      <SkeletonBlock className="h-7 w-3/4" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
    </div>
  )
}

export function ProjectsGridSkeleton() {
  return (
    <div className="px-6 max-w-7xl mx-auto py-12" aria-busy="true">
      <span className="sr-only">Loading projects</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["a", "b", "c", "d", "e", "f"].map((key) => (
          <div key={key} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <SkeletonBlock className="h-44 w-full rounded-none" />
            <div className="p-5 space-y-3">
              <SkeletonBlock className="h-5 w-1/2" />
              <SkeletonBlock className="h-4 w-full" />
              <SkeletonBlock className="h-4 w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SectionSkeleton() {
  return (
    <div className="px-6 max-w-5xl mx-auto py-14 space-y-6" aria-busy="true">
      <SkeletonBlock className="h-8 w-64 mx-auto" />
      <SkeletonBlock className="h-48 w-full" />
    </div>
  )
}
