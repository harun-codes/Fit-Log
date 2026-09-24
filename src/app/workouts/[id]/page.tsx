import AddButton from "@/components/gymDetails/AddButton";
import SaveButton from "@/components/gymDetails/SaveButton";
// import GymCard from "@/components/shared/GymCard";
import { IWorkout } from "@/types/gymTypes";
import Image from "next/image";
import { notFound } from "next/navigation";

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

const getGymData = async (): Promise<IWorkout[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: IWorkout[] = await res.json();

  return data;
};

const GymDetailsPage = async ({
  params,
}: IGymDetailsPageProps) => {
  const { id } = await params;

  const gymData = await getGymData();

  const gym = gymData.find(
    (item) => String(item.id) === id
  );

  if (!gym) {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-2">
      <div className="relative h-72 overflow-hidden rounded-2xl bg-[#151619] sm:h-96 lg:h-full lg:min-h-120">
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

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {gym.name}
        </h1>

        <p className="mt-3 max-w-md text-sm text-gray-400">
          {gym.description}
        </p>

      
        <div className="mt-4 flex flex-wrap gap-2">
          {gym.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-extrabold text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
          {specRows(gym).map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-5 py-3 text-sm ${
                i !== specRows(gym).length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-xs font-bold tracking-wide text-gray-500">
                {row.label}
              </span>

              <span className="font-semibold text-white">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="mb-3 text-sm font-extrabold tracking-wide text-white">
            INSTRUCTIONS
          </h2>

          <ol className="space-y-3">
            {gym.instructions.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-gray-400"
              >
                <span className="shrink-0 font-semibold text-[#C2F800]">
                  {i + 1}.
                </span>

                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <AddButton gym={gym} />
          <SaveButton gym={gym} />
        </div>
       

      </div>
    </section>
  );
};

export default GymDetailsPage;