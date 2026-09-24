'use client'
import { IWorkout } from "@/types/gymTypes";
import { ReactNode, useState } from "react";
import { createContext } from "react";

interface PlanContextType {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}


export const PlanContext = createContext({});


export function PlanProvider({ children }: { children: ReactNode }) {

  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
//   const [isLoaded, setIsLoaded] = useState(false);
 
  const sharedData: PlanContextType = {
        plan,
        setPlan,
        saved,
        setSaved,
  };

     return (
    <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>
  );
}
