"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { TbProgressCheck } from "react-icons/tb";

const icons = {
  ig: FaInstagram,
  linkedin: SiLinkedin,
  github: FaGithubSquare,
  gmail: SiGmail,
  done: IoCheckmarkDoneCircleSharp,
  progres: TbProgressCheck,
};

interface IconProps {
  nama: string;
  color?: string;
  link?: string;
  size?: number;
}

export default function Icon({ nama, color, link, size = 40 }: IconProps) {
  const PickedIcon = icons[nama as keyof typeof icons];

  if (!PickedIcon) {
    return null;
  }

  // If no link, just render the icon (for caption usage)
  if (!link) {
    return <PickedIcon size={size} color={color} className="drop-shadow-lg" />;
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      {/* Icon */}
      <PickedIcon
        size={size}
        color={color}
        className="relative drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
      />
    </motion.a>
  );
}