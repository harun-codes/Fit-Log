"use client";

import { useContext, useState } from "react";
import { PlanContext } from "@/context/gymContext";
import { IWorkout } from "@/types/gymTypes";
import PlanListCard from "@/components/shared/OneCardGym";
import EmptyState from "@/components/shared/EmptyState";

const MyPlanPage = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("MyPlanPage must be used inside PlanProvider");
    }

    const { plan, saved } = context;
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    const sortItems = (items: IWorkout[]) => {
        const sorted = [...items];

        if (sortBy === "duration") {
            sorted.sort((a, b) => b.duration - a.duration);
        }

        if (sortBy === "calories") {
            sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }

        if (sortBy === "rating") {
            sorted.sort((a, b) => b.rating - a.rating);
        }

        return sorted;
    };

    const sortedPlan = sortItems(plan);
    const sortedSaved = sortItems(saved);

    const activeWorkouts = activeTab === "plan" ? sortedPlan : sortedSaved;

  const totalMinutes = activeWorkouts.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activeWorkouts.reduce((sum, item) => sum + item.caloriesBurned, 0)

    return (
        <main className="min-h-screen bg-black px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                <div>
                    <h1 className="text-3xl font-extrabold">
                        MY PLAN
                    </h1>

                    <p className="mt-2 text-sm text-[#9CA3AF]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-xl border border-white/10 bg-[#131417] p-5">
                        <p className="text-xs text-[#9CA3AF]">
                            EXERCISES
                        </p>

                        <p className="mt-2 text-3xl text-lime-400 font-extrabold">
                            {activeWorkouts.length}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#131417] p-5">
                        <p className="text-xs text-[#9CA3AF]">
                            MINUTES
                        </p>

                        <p className="mt-2 text-3xl font-extrabold">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#131417] p-5">
                        <p className="text-xs text-[#9CA3AF]">
                            CALORIES
                        </p>

                        <p className="mt-2 text-3xl font-extrabold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                <div className="mt-8 flex justify-end">
                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as
                                | "duration"
                                | "calories"
                                | "rating"
                            )
                        }
                        className="rounded-lg border border-white/10 bg-[#131417] px-4 py-2 text-sm text-white"
                    >
                        <option disabled={true}>Sort By</option>
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>

                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Today's Plan" defaultChecked onChange={() => setActiveTab("plan")} />
                    <div className="tab-content bg-base-100 border-base-300 p-6"><h2 className="mb-4 text-xl font-bold">
                        Today&apos;s Plan
                    </h2>

                        {sortedPlan.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="space-y-4">
                                {sortedPlan.map((gym) => (
                                    <PlanListCard
                                        key={gym.id}
                                        gym={gym}
                                        mode="plan"
                                    />
                                ))}
                            </div>
                        )}</div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" onChange={() => setActiveTab("saved")} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">  <h2 className="mb-4 text-xl font-bold">
                        Saved
                    </h2>

                        {sortedSaved.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="space-y-4">
                                {sortedSaved.map((gym) => (
                                    <PlanListCard
                                        key={gym.id}
                                        gym={gym}
                                        mode="saved"
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </main>
    );
};

export default MyPlanPage;



