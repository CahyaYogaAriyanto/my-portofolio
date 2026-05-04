"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML5", color: "#E34F26", position: "left", index: 0 },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", position: "left", index: 1 },
  { icon: FaReact, name: "React", color: "#61DAFB", position: "left", index: 2 },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", position: "right", index: 0 },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", position: "right", index: 1 },
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E", position: "right", index: 2 },
];

export default function SkillsSection() {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Side Lines */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          d="M100 100 C300 100 300 250 500 250"
          stroke="url(#gradient1)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          d="M100 250 C300 250 300 250 500 250"
          stroke="url(#gradient1)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          d="M100 400 C300 400 300 250 500 250"
          stroke="url(#gradient1)"
          strokeWidth="2"
        />

        {/* Right Side Lines */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          d="M900 100 C700 100 700 250 500 250"
          stroke="url(#gradient2)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          d="M900 250 C700 250 700 250 500 250"
          stroke="url(#gradient2)"
          strokeWidth="2"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          d="M900 400 C700 400 700 250 500 250"
          stroke="url(#gradient2)"
          strokeWidth="2"
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Skills Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="z-10 px-10 py-5 rounded-2xl glass text-white text-lg md:text-3xl font-bold shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 shimmer" />
        <span className="relative z-10 gradient-text">My Skills</span>
      </motion.div>

      {/* Left Side Icons */}
      <div className="absolute left-4 md:left-20 lg:left-32 top-1/2 -translate-y-1/2 flex flex-col gap-12 md:gap-20 lg:gap-28">
        {skills
          .filter((skill) => skill.position === "left")
          .map((skill, idx) => (
            <SkillIcon key={skill.name} skill={skill} delay={1 + idx * 0.2} />
          ))}
      </div>

      {/* Right Side Icons */}
      <div className="absolute right-4 md:right-20 lg:right-32 top-1/2 -translate-y-1/2 flex flex-col gap-12 md:gap-20 lg:gap-28">
        {skills
          .filter((skill) => skill.position === "right")
          .map((skill, idx) => (
            <SkillIcon key={skill.name} skill={skill} delay={1 + idx * 0.2} />
          ))}
      </div>
    </div>
  );
}

function SkillIcon({ skill, delay }: { skill: any; delay: number }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.3, rotate: 360 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />

      {/* Icon Container */}
      <div className="relative glass rounded-full p-3 md:p-4">
        <Icon className="text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg" style={{ color: skill.color }} />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs md:text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        {skill.name}
      </motion.div>
    </motion.div>
  );
}
