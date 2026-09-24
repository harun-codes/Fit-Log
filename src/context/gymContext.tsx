"use client";

import { IWorkout } from "@/types/gymTypes";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

interface PlanContextType {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  removeFromPlan: (id: number) => void;
  markAsDone: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

export const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load localStorage data once
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Error loading localStorage:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, hydrated]);

 
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    toast.success("Workout removed from today's plan!");
  };

  const markAsDone = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    toast.success("Workout marked as done!");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    toast.success("Workout removed from saved!");
  };

  const sharedData: PlanContextType = {
    plan,
    setPlan,
    saved,
    setSaved,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
}