"use client";

import React, { useContext } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlanContext } from "@/context/gymContext";

type IWorkout = {
    id?: string | number;
    [key: string]: unknown;
};

const Navbar = () => {
    const pathname = usePathname();

    const context = useContext(PlanContext);
    if (!context) {
        throw new Error("Navbar must be used inside PlanProvider");
    }

    const { plan, saved } = context;

    const isWorkoutActive =
        pathname === "/" || pathname.startsWith("/workouts");

    const isPlanActive = pathname === "/my-plan";

    return (
        <nav className="border-b border-white/10 bg-[#111214]">
            <div className="navbar mx-auto max-w-6xl px-4">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-white"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-[#18191d] p-2 shadow"
                        >
                            <li>
                                <Link
                                    href="/workouts"
                                    className={isWorkoutActive ? "text-[#C2F800]" : "text-white"}
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    className={isPlanActive ? "text-[#C2F800]" : "text-white"}
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={Logo}
                            alt="FitLog"
                            width={35}
                            height={35}
                        />

                        <span className="text-xl font-extrabold text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        <li>
                            <Link
                                href="/workouts"
                                className={
                                    isWorkoutActive
                                        ? "font-bold text-[#C2F800]"
                                        : "text-gray-400"
                                }
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className={
                                    isPlanActive
                                        ? "font-bold text-[#C2F800]"
                                        : "text-gray-400"
                                }
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end gap-6">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                    >
                        Plan
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[11px] font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                    >
                        Saved
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#34373d] bg-[#111214] text-[11px] text-gray-400">
                            {saved.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;