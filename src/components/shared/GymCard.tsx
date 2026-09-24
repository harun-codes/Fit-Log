import { IWorkout } from '@/types/gymTypes';
import Image from 'next/image';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import { PiHeartStraightBreakThin } from 'react-icons/pi';

interface IWorkOutProps {
    gym: IWorkout
}

const GymCard = ({ gym }: IWorkOutProps) => {
    return (
        <div
            key={gym.id}
            className="group overflow-hidden rounded-2xl border border-white/5 bg-[#131417] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative h-72 overflow-hidden bg-[#1a1b1e]">
                <Image
                    src={gym.image}
                    alt={gym.name}
                    fill
                    // width={200}
                    // height={200}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

            </div>

          <div className="mt-4 flex">
                       {gym.muscleGroups.map((tag) => (
                         <span
                           key={tag}
                           className="ml-5 rounded-full px-3 py-1 text-[14px] text-black font-bold bg-[#00F846]"
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
            
            <div className="p-4">
                
                <h3 className="text-xl font-extrabold text-white uppercase">
                    {gym.name}
                </h3>

            
                <p className="mt-1 text-sm text-[#9CA3AF] ">
                  
                    <span className="font-semibold ">{gym.equipment}</span>
                </p>

               
                <div className="mt-5 flex justify-baseline gap-3 items-center text-[#9CA3AF]  border-t border-white/10 pt-4 text-sm">

                    <div className="flex gap-2 items-center ">
                        
                        <IoMdTime />
                        <p className="font-semibold ">{gym.duration} min</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <PiHeartStraightBreakThin /> 
                        <p className="font-semibold">{gym.caloriesBurned} kcal</p>
                    </div>

                    <div>
                        
                        <p className="font-semibold flex items-center gap-1">

                            <i className="ti ti-star text-amber-400 text-sm"></i> <CiStar />{gym.rating}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymCard;