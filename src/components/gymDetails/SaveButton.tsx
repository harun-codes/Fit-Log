'use client'

import { PlanContext } from '@/context/gymContext';
import { IWorkout } from '@/types/gymTypes';
import { useContext, type Dispatch, type SetStateAction } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({ gym }: { gym: IWorkout }) => {
  const context = useContext(PlanContext) as {
    saved: IWorkout[];
    setSaved: Dispatch<SetStateAction<IWorkout[]>>;
  } | null;

  if (!context) {
    throw new Error('AddButton must be used within a PlanProvider');
  }

  const { saved, setSaved } = context;

  const handleSavedButton = () => {
    if (saved.some((item) => item.id === gym.id)) {
      toast.info("This workout is already saved!");
      return;
    }

    setSaved((prev) => [...prev, gym]);

    toast.success(`${gym.name} saved for later`);
  };


  return (
    <button className="btn rounded-2xl flex-1" onClick={handleSavedButton}>
      save for later
    </button>
  );
};

export default SavedButton;