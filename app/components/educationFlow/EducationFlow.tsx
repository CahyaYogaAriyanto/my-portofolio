"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 – 2026",
    school: "Universitas Teknologi Yogyakarta",
    major: "Infotmatika",
    description: "Fokus AI",
  },
  {
    year: "2019 – 2022",
    school: "SMK Ma'arif Nu Doro",
    major: "Teknik Bisnis Sepeda Motor",
    description: "Mempelajari Ilmu Mesin Sepeda Motor",
  },
  {
    year: "2019 – 2017",
    school: "SMP 1 Petungkriyono",
    major: "-",
    description: "-",
  },
];

export default function EducationFlow() {
  return (
    <section className="w-full py-12 ">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-14">
          Riwayat Pendidikan
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isRight ? "md:pr-10 md:text-left" : "md:pl-10 md:text-right"
                    }`}
                  >
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
                      <span className="text-sm text-blue-400 font-semibold">
                        {item.year}
                      </span>
                      <h2 className="text-xl font-bold text-white mt-1">
                        {item.school}
                      </h2>
                      <p className="text-purple-400 font-medium">
                        {item.major}
                      </p>
                      <p className="text-slate-300 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <GraduationCap className="text-white w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
