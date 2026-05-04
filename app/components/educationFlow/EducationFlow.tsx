"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 – 2026",
    school: "Universitas Teknologi Yogyakarta",
    major: "Informatika",
    description: "Fokus AI",
  },
  {
    year: "2019 – 2022",
    school: "SMK Ma'arif Nu Doro",
    major: "Teknik Bisnis Sepeda Motor",
    description: "Mempelajari Ilmu Mesin Sepeda Motor",
  },
  {
    year: "2016 – 2019",
    school: "SMP 1 Petungkriyono",
    major: "-",
    description: "-",
  },
];

export default function EducationFlow() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16 md:mb-20"
        >
          <span className="gradient-text">Riwayat Pendidikan</span>
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Center Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -translate-x-1/2 hidden md:block"
          />

          {/* Mobile Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:hidden"
          />

          <div className="space-y-16 md:space-y-20">
            {educationData.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full md:w-[45%] ml-16 md:ml-0 ${
                      isRight ? "md:pr-12 md:text-left" : "md:pl-12 md:text-right"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-white/10 relative overflow-hidden group">
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Year Badge */}
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block text-sm md:text-base text-blue-400 font-bold bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/30"
                        >
                          {item.year}
                        </motion.span>

                        {/* School Name */}
                        <h2 className="text-xl md:text-2xl font-bold text-white mt-4 mb-2">
                          {item.school}
                        </h2>

                        {/* Major */}
                        <p className="text-purple-400 font-semibold text-base md:text-lg mb-3">
                          {item.major}
                        </p>

                        {/* Description */}
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
                    </div>
                  </motion.div>

                  {/* Icon Circle - Desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden md:block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50 border-4 border-black"
                    >
                      <GraduationCap className="text-white w-6 h-6" />
                    </motion.div>
                  </motion.div>

                  {/* Icon Circle - Mobile */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-8 top-8 -translate-x-1/2 z-10 md:hidden"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/50 border-4 border-black">
                      <GraduationCap className="text-white w-5 h-5" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
