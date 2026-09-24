"use client";

import { PlanContext } from "@/context/gymContext";
import { IWorkout } from "@/types/gymTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoMdTime, IoMdStar } from "react-icons/io";
import { IoFlame } from "react-icons/io5";

interface IPlanCardProps {
  gym: IWorkout;
}

const PlanListCard = ({ gym }: IPlanCardProps) => {
  const context = useContext(PlanContext) as {
    removeFromPlan: (id: number) => void;
    markAsDone: (id: number) => void;
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#131417] p-3 sm:flex-row sm:items-center">
      
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-xl bg-[#1a1b1e] sm:w-24">
        <Image
          src={gym.image}
          alt={gym.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-extrabold uppercase text-white">
          {gym.name}
        </h3>

        <p className="mt-1 text-xs text-[#9CA3AF]">
          {gym.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <IoMdTime className="text-[#00F846]" />
            {gym.duration} min
          </span>

          <span className="flex items-center gap-1">
            <IoFlame className="text-[#00F846]" />
            {gym.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <IoMdStar className="text-amber-400" />
            {gym.rating}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/workouts/${gym.id}`}
          className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-white hover:bg-white/10"
        >
          View Details
        </Link>

        <button
          onClick={() => context.markAsDone(gym.id)}
          className="rounded-full bg-[#C2F800] px-3 py-2 text-xs font-bold text-black"
        >
          ✓ Mark as Done
        </button>

        <button
          onClick={() => context.removeFromPlan(gym.id)}
          className="rounded-md border px-3 py-2 text-xs font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PlanListCard;