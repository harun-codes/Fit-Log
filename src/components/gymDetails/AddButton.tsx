'use client'

import { PlanContext } from '@/context/gymContext';
import { IWorkout } from '@/types/gymTypes';
import { useContext } from 'react';

const AddButton = ({ gym }: { gym: IWorkout }) => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error('AddButton must be used within a PlanProvider');
  }

  const { plan, setPlan } = context;

  const handleAddButton = () => {
    setPlan([...plan, gym]);
    console.log(gym);
  };

  return (
    <button className="btn btn-primary flex-1" onClick={handleAddButton}>
      add today plan
    </button>
  );
};

export default AddButton;