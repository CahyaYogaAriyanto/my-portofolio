'use client';

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <div className="relative w-full h-[400px]  flex items-center justify-center overflow-hidden">
      
      {/* SVG GARIS */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* kiri */}
        <path
          d="M100 50 C300 50 300 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <path
          d="M100 200 C300 200 300 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <path
          d="M100 350 C300 350 300 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />

        {/* kanan */}
        <path
          d="M900 50 C700 50 700 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <path
          d="M900 200 C700 200 700 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
        <path
          d="M900 350 C700 350 700 200 500 200"
          stroke="rgba(255,255,255,0.30)"
          strokeWidth="1"
        />
      </svg>

      {/* SKILLS TENGAH */}
      <div className="z-10 px-8 py-4 rounded-xl bg-white/10 backdrop-blur text-white text-sm md:text-2xl font-semibold shadow-lg">
        Skills
      </div>

      {/* ICON KIRI */}
      <div className="absolute gap-12 left-1 xl:left-70 top-1/2 -translate-y-1/2 flex flex-col md:gap-20 xl:gap-32 lg:gap-25 text-white text-2xl">
        <FaHtml5 />
        <FaCss3Alt />
        <FaReact />
      </div>
      <div className="absolute gap-12 right-1 xl:right-70 top-1/2 -translate-y-1/2 flex flex-col md:gap-20 xl:gap-32 lg:gap-25  text-white text-2xl">
        <SiTailwindcss />
        <SiTypescript />
        <FaJs />
      </div>
    </div>
  );
}
