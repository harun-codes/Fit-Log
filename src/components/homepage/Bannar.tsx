import BannarImg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-8 py-12">
      <div
        className="
          relative overflow-hidden
          min-h-87
          rounded-xl
          border border-[#252831]
          bg-[#15171C]
          px-6 py-10
          sm:px-8
          lg:px-11
          lg:py-12
          flex items-center
        "
      >
        <div className="relative z-10 w-full ">
          <p className="mb-5 text-[10px] sm:text-xs font-semibold tracking-wide text-[#00FF4C]">
            WORKOUT LIBRARY
          </p>

          <h1
            className="
                max-w-130
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                text-white
            "
          >

            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p
            className="
              mt-5
              max-w-125
              text-sm
              sm:text-base
              leading-6
              text-[#9297A3]
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
            today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            className="
              mt-6
              rounded-md
              bg-[#00FF4C]
              px-5
              py-3
              text-[11px]
              font-bold
              text-black
              transition
              duration-200
              hover:bg-[#C2F800]
              hover:scale-[1.02]
              active:scale-95
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        <div
          className="
            absolute
            hidden
            right-4
            sm:block
            sm:w-75
            md:w-85
            lg:right-8
            lg:w-95
          "
        >
          <Image
            src={BannarImg}
            alt="Workout"
            width={350}
            height={300}
            className="h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
