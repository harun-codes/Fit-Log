import React from 'react';
import GymCard from '../shared/GymCard';
import { IWorkout } from '@/types/gymTypes';

const getGymData = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;

}

const CardPage = async() => {

    const gymData = await getGymData();

    return (
        <section className="bg-black px-6 py-16">

            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-3xl font-extrabold">THE LIBRARY</h2>
                <p className="text-gray-500 text-sm mt-2 mb-8">Twelve lifts covering every major muscle group.</p>

            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
               {gymData.map((gym: IWorkout) =>  {
           return <GymCard key={gym.id} gym={gym}></GymCard>
       
   } )}
            </div>

        </section>
    );
};

export default CardPage;