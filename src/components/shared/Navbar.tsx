'use client'
import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {

    // C2F800

    const pathname = usePathname()

    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link className={pathname === "/workouts" ? "text-[#C2F800]" : " "} href="/workouts">Workouts</Link>
                            </li>
                            <li>
                                <Link className={pathname === "/myplan" ? "text-[#C2F800]" : ""} href="/myplan">My Plan</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Image src={Logo} alt="Fit-Log"></Image>
                        <span className='font-bold text-xl text-white'>FITLOG</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className={pathname === "/workouts" ? "text-[#C2F800]" : " "} href="/workouts">Workouts</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/myplan" ? "text-[#C2F800]" : ""} href="/myplan">My Plan</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 items-center">
                    <button className="btn ">Plan</button>
                    <button className="btn ">Saved</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;