"use client";
// import GymCard from "@/components/shared/GymCard";
import { PlanContext } from "@/context/gymContext";
import { IWorkout } from "@/types/gymTypes";
import React, { useContext } from "react";
import PlanListCard from "@/components/shared/OneCardGym";

const MyPlanPage = () => {
  const context = useContext(PlanContext) as {
    plan: IWorkout[];
    saved: IWorkout[];
  };
  const { plan, saved } = context || { plan: [], saved: [] };

  return (
    <div className="container mx-auto">
      <h1 className="text-white font-extrabold text-3xl">MY PLAN</h1>
      <p className="text-gray-500 text-sm mt-1">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
            {
                plan.length > 0 ?  ( plan.map((gym: IWorkout) => {
                    return <PlanListCard key={gym.id} gym={gym} />
                }) ):(
                    <p className="text-gray-500 text-sm mt-1">No workouts in your plan yet.</p>
                )
            }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
           {
                saved.length > 0 ?  ( saved.map((gym: IWorkout) => {
                    return <PlanListCard key={gym.id} gym={gym} />
                }) ):(
                    <p className="text-gray-500 text-sm mt-1">No saved workouts yet.</p>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
