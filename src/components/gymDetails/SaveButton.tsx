'use client'

import { PlanContext } from '@/context/gymContext';
import { IWorkout } from '@/types/gymTypes';
import { useContext } from 'react';

const SavedButton = ({ gym }: { gym: IWorkout }) => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error('AddButton must be used within a PlanProvider');
  }

  const { saved, setSaved } = context;

  const handleSavedButton = () => {
    setSaved([...saved, gym]);
    console.log(gym);
  };

  return (
    <button className="btn btn-primary flex-1" onClick={handleSavedButton}>
      save for leter
    </button>
  );
};

export default SavedButton;