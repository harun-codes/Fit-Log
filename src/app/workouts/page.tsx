// import Image from 'next/image';
import React from 'react';
// import Logo from "@/assets/banner.png"
import GymCard from '@/components/shared/GymCard';
import { IWorkout } from '@/types/gymTypes';

const getGymData = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;

}

const WorkOutsPage = async () => {

    const gymData = await getGymData();

    return (
 <section className="bg-black px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-3xl font-extrabold">THE LIBRARY</h2>
                <p className="text-gray-500 text-sm mt-2 mb-8">Twelve lifts covering every major muscle group.</p>

            </div>
            <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 ">
               {gymData.map((gym: IWorkout, ind:number) =>  {
           return <GymCard key={ind} gym={gym}></GymCard>
       
   } )}
            </div>

        </section>

    );
};

export default WorkOutsPage;