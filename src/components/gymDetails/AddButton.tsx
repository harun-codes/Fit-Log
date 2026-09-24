'use client'

import { PlanContext } from '@/context/gymContext';
import { IWorkout } from '@/types/gymTypes';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const AddButton = ({ gym }: { gym: IWorkout }) => {
  const context = useContext(PlanContext) as {
    plan: IWorkout[];
    setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  } | null;

  if (!context) {
    throw new Error('AddButton must be used within a PlanProvider');
  }

  const { plan, setPlan } = context;

  const handleAddButton = () => {
  if (plan.some((item) => item.id === gym.id)) {
    toast.info("This workout is already in today's plan!");
    return;
  }

  if (plan.length >= 5) {
    toast.warning("Today's plan can contain only 5 workouts.");
    return;
  }

  setPlan((prev) => [...prev, gym]);

  toast.success(`${gym.name} added to today's plan`);
};

  return (
    <button className="btn bg-lime-400 flex-1" onClick={handleAddButton}>
      Add to today&apos;s plan
    </button>
  );
};

export default AddButton;