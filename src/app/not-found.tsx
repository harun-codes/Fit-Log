import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-6">
      <div className="text-center">
        <p className="text-sm font-bold tracking-widest text-[#C2F800]">
          404
        </p>

        <h1 className="mt-3 text-4xl font-extrabold text-white">
          PAGE NOT FOUND
        </h1>

        <p className="mt-3 text-gray-500">
          The workout or page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[#C2F800] px-6 py-3 text-sm font-bold text-black"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}