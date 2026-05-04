"use client";

import { motion } from "framer-motion";
import Button from "@/app/components/button/Button";
import Caption from "@/app/components/caption/Caption";
import EducationFlow from "@/app/components/educationFlow/EducationFlow";
import Icon from "@/app/components/icon/Icon";
import SkillsSection from "@/app/components/skill/Skill";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95] as any,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as any,
      },
    },
  };

  return (
    <>
      {/* Hero Section with Enhanced Animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 px-5 md:px-20 py-5 md:py-10 min-h-[80vh]"
      >
        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center md:items-end items-center w-full md:w-1/2 xl:w-full gap-3 order-2 md:order-1"
        >
          <div className="flex flex-col gap-4 w-full md:w-full text-center md:p-5 md:pt-5 lg:pt-15 p-2 md:text-left">
            {/* Hello Line with Animation */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 md:justify-start justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-purple-500 to-blue-500 md:w-14"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm md:text-sm font-bold text-gray-300 tracking-wider"
              >
                Hello
              </motion.p>
            </motion.div>

            {/* Name with Gradient Effect */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap md:flex-nowrap w-auto gap-2 md:justify-start justify-center md:gap-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-100"
              >
                I'M
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="gradient-text font-extrabold whitespace-nowrap"
              >
                Cahya Yoga
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-100"
              >
                Ariyanto
              </motion.span>
            </motion.div>

            {/* Caption */}
            <motion.div variants={itemVariants}>
              <Caption
                values="caption"
                icon=""
                color=""
                text=""
                style="w-full text-gray-400 text-sm md:text-base lg:text-xl opacity-90 uppercase tracking-widest"
              />
            </motion.div>
            {/* Social Icons with Stagger Animation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-4 md:gap-6 mt-4 md:justify-start justify-center md:mt-8"
            >
              {[
                { nama: "ig", link: "https://www.instagram.com/ygartn_/", color: "red" },
                { nama: "linkedin", link: "https://www.linkedin.com/in/cahya-yoga-ariyanto-8b5139261/", color: "blue" },
                { nama: "github", link: "https://github.com/CahyaYogaAriyanto", color: "white" },
                { nama: "gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=yogakecol123@gmail.com", color: "red" },
              ].map((social, index) => (
                <motion.div
                  key={social.nama}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon nama={social.nama} link={social.link} color={social.color} size={40} />
                </motion.div>
              ))}
            </motion.div>
            {/* Download Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button url="https://scnmodukpcrmdwlmyozl.supabase.co/storage/v1/object/sign/project/Putih%20Minimalis%20Sederhana%20Profesional%20Administrasi%20Perkantoran%20Resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hM2JjYWZjMy1jMmZlLTQxNTMtOWU2Yi05N2M0MWUzNDQyOTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9qZWN0L1B1dGloIE1pbmltYWxpcyBTZWRlcmhhbmEgUHJvZmVzaW9uYWwgQWRtaW5pc3RyYXNpIFBlcmthbnRvcmFuIFJlc3VtZS5wZGYiLCJpYXQiOjE3NjU3MjE0NTQsImV4cCI6MTc5NzI1NzQ1NH0.2GE0w190sJ6Z0P2NKOOHSyKU2KbQg8962kcDIHBjLTg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image with Enhanced Effects */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center items-center order-1 md:order-2 relative"
        >
          {/* Glow Effect Behind Image */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30"
          />

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-[70%] md:w-full md:h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] animate-float"
            src="/yoga.png"
            alt="Foto Profil"
            style={{
              opacity: 1,
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <SkillsSection />
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <EducationFlow />
      </motion.div>
    </>
  );
}