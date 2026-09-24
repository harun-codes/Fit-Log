import { IWorkout } from '@/types/gymTypes';
import Image from 'next/image';
import { IoMdTime, IoMdStar} from 'react-icons/io';
import { IoFlame } from 'react-icons/io5';

interface IPlanCardProps {
  gym: IWorkout;
  
}

const PlanListCard = ({ gym }: IPlanCardProps) => {
  return (
    <div className="max-w-6xl mx-auto flex items-center gap-4 rounded-2xl border border-white/5 bg-[#131417] p-3">
      
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-[#1a1b1e]">
        <Image
          src={gym.image}
          alt={gym.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-extrabold uppercase text-white truncate">
          {gym.name}
        </h3>
        <p className="text-xs text-[#9CA3AF] mt-0.5">{gym.equipment}</p>

        <div className="mt-2 flex items-center gap-4 text-xs text-[#9CA3AF]">
          <span className="flex items-center gap-1">
            <IoMdTime className="text-[#00F846]" /> {gym.duration} min
          </span>
          <span className="flex items-center gap-1">
            <IoFlame className="text-[#00F846]" /> {gym.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <IoMdStar className="text-amber-400" /> {gym.rating}
          </span>
        </div>
      </div>

      
    </div>
  );
};

export default PlanListCard;