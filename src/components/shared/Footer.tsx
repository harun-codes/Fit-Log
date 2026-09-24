import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
<footer className="bg-black border-t border-white/10 py-7 ">
  <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
    <div className="flex items-center gap-2 font-bold text-sm text-white">
      <Image src={Logo} alt='Footer'></Image>
      <span className='font-bold text-xl text-white'>FITLOG</span>
    </div>
    <p className="text-xs text-gray-500">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>
  </div>
</footer>
    );
};

export default Footer;