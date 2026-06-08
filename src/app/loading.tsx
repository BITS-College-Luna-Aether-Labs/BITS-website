/** Route-level loading spinner (shown during page transitions) */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-bits-green border-t-transparent" />
        <p className="text-sm text-bits-muted">Loading...</p>
      </div>
    </div>
  );
}
