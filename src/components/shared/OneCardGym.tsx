"use client";

import { PlanContext } from "@/context/gymContext";
import { IWorkout } from "@/types/gymTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoMdTime, IoMdStar } from "react-icons/io";
import { IoFlame } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface IPlanCardProps {
  gym: IWorkout;
  mode?: "plan" | "saved";
}

const PlanListCard = ({
  gym,
  mode = "plan",
}: IPlanCardProps) => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "PlanListCard must be used inside PlanProvider"
    );
  }

  const {
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  } = context;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#131417] p-3 sm:flex-row sm:items-center">

     
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
            <IoMdTime className="text-[#C2F800]" />
            {gym.duration} min
          </span>

          <span className="flex items-center gap-1">
            <IoFlame className="text-[#C2F800]" />
            {gym.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <IoMdStar className="text-yellow-400" />
            {gym.rating}
          </span>

        </div>
      </div>

      <div className="flex flex-wrap gap-2">

      
        <Link
          href={`/workouts/${gym.id}`}
          className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/10"
        >
          View Details
        </Link>

        {mode === "plan" && (
          <>
           
            <button
              onClick={() => markAsDone(gym.id)}
              className="flex items-center gap-1 rounded-full bg-[#C2F800] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#d5ff33]"
            >
              <IoCheckmark size={16} />
              Mark as Done
            </button>

            
            <button
              onClick={() => removeFromPlan(gym.id)}
              aria-label={`Remove ${gym.name}`}
              className="flex items-center justify-center rounded-md border px-3 py-2 transition hover:bg-red-500/10"
            >
              <IoClose size={18} />
            </button>
          </>
        )}

        {mode === "saved" && (
          <button
            onClick={() => removeFromSaved(gym.id)}
            aria-label={`Remove ${gym.name} from saved`}
            className="flex items-center justify-center rounded-md border px-3 py-2 transition hover:bg-red-500/10"
          >
            <IoClose size={18} />
          </button>
        )}

      </div>
    </div>
  );
};

export default PlanListCard;