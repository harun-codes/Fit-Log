import AddButton from '@/components/gymDetails/AddButton';
import SaveButton from '@/components/gymDetails/SaveButton';
import { IWorkout } from '@/types/gymTypes';
import Image from 'next/image';
import React from 'react';

interface IGymDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const specRows = (w: IWorkout) => [
  { label: "EQUIPMENT", value: w.equipment },
  { label: "DIFFICULTY", value: w.difficulty },
  { label: "SETS", value: w.sets },
  { label: "REPS", value: w.reps },
  { label: "DURATION", value: `${w.duration} min` },
  { label: "CALORIES", value: `${w.caloriesBurned} kcal` },
  { label: "RATING", value: w.rating },
];

const getGymData = async () => {

    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;

}

const GymDetailsPage = async ({ params }: IGymDetailsPageProps) => {

    const { id } = await params;
    const GymData = await getGymData();

    const gym = GymData.find((gym: IWorkout) => String(id) === String(gym.id)
    ) as IWorkout;
    console.log(gym, "Gym Data")
    return (
           <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-125 rounded-2xl overflow-hidden bg-[#151619]">
        <Image
          src={gym.image}
          alt={gym.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      
      <div>
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl tracking-tight">
          {gym.name}
        </h1>
        <p className="text-gray-400 text-sm mt-3 max-w-md">
          {gym.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {gym.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-lime-400 text-black text-xs font-extrabold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
          {specRows(gym).map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-5 py-3 text-sm ${
                i !== specRows(gym).length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-gray-500 text-xs font-bold tracking-wide">
                {row.label}
              </span>
              <span className="text-white font-semibold">{row.value}</span>
            </div>
          ))}
        </div>


       
        <div className="mt-8">
          <h2 className="text-white font-extrabold text-sm tracking-wide mb-3">
            INSTRUCTIONS
          </h2>
          <ol className="space-y-2">
            {gym.instructions.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-400">
                <span className="text-gray-500 shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <AddButton gym={gym}></AddButton>
          
          <SaveButton gym={gym}></SaveButton>
        </div>
      </div>
    </section>
    );
};

export default GymDetailsPage;