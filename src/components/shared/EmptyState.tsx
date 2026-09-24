"use client";

import Link from "next/link";

const EmptyState = () => {
    return (
        <div className="flex min-h-[390px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#101113] px-6 text-center">

            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white">
                NOTHING HERE YET
            </h2>

            <p className="mt-4 max-w-xl text-base text-[#9CA3AF]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/workouts"
                className="mt-8 rounded-xl bg-[#C2F800] px-8 py-4 font-bold text-black transition duration-200 hover:scale-105 hover:bg-[#d5ff33]"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyState;