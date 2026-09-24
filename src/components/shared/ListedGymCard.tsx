
import { IWorkout } from '@/types/gymTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedGymCard = ({gym}: {gym: IWorkout}) => {
    return (
        <div className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                    {/* Book Image */}
                                    <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-52 sm:w-36">
                                        <Image
                                            src={gym.image}
                                            alt={gym.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 144px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Category */}
                                        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
                                            {gym.description}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col">

                                        {/* Top */}
                                        <div className="flex flex-wrap items-start justify-between gap-3">

                                            <div>
                                                <h2 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                                                    {gym.name}
                                                </h2>

                                                <p className="mt-1 text-sm text-slate-500">
                                                    by{" "}
                                                    <span className="font-semibold text-slate-700">
                                                        {}
                                                    </span>
                                                </p>
                                            </div>

                                            {/* Rating */}
                                            <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-600">
                                                ⭐ {gym.rating}
                                            </div>
                                        </div>

                                        {/* Review */}
                                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                                            {gym.duration}
                                        </p>

                                        {/* Tags */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {gym.muscleGroups.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-auto flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

                                            {/* Book Information */}
                                            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                                                <span>
                                                    📄 <b className="text-slate-700">{gym.caloriesBurned}</b> pages
                                                </span>

                                                <span>
                                                    📅 <b className="text-slate-700">
                                                        {gym.reps}
                                                    </b>
                                                </span>

                                                <span>
                                                    🏢 <b className="text-slate-700">
                                                        {gym.equipment}
                                                    </b>
                                                </span>
                                            </div>

                                            {/* Button */}
                                            <Link
                                                href={`/books/${gym.id}`}
                                                className="btn border-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                            >
                                                View Details →
                                            </Link>

                                        </div>
                                    </div>
                                </div>
    );
};

export default ListedGymCard;