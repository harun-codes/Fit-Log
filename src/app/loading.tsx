export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#C2F800]" />

        <p className="text-sm font-semibold text-gray-400">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}
