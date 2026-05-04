"use client";

import { motion } from "framer-motion";

interface UrlProps {
  url: string;
}

export default function Button({ url }: UrlProps) {
  return (
    <motion.a
      href={url}
      download
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        relative z-0 w-48 md:w-[50%] lg:w-[40%] md:mt-10 p-[2px] font-bold rounded-full 
        overflow-hidden group mx-auto md:mx-0 block
        transition-all duration-300
      "
    >
      {/* Animated Border */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 animate-borderMove" />
      
      {/* Button Content */}
      <span className="relative flex items-center justify-center gap-2 bg-black rounded-full py-3 px-6 text-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download CV
      </span>
      
      {/* Hover Glow Effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500" />
    </motion.a>
  );
}
