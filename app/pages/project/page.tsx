"use client";

import { motion } from "framer-motion";
import Caption from "@/app/components/caption/Caption";
import ExampleProject from "@/app/components/exampleProject/ExampleProject";

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pb-20"
    >
      {/* Page Title */}
      <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          <span className="gradient-text">My Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Explore my latest work and achievements
        </motion.p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-16 md:mb-20 px-4"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8 w-full md:w-auto min-w-[280px] border border-white/10 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <Caption
              icon="done"
              color="green"
              text="Projects Completed"
              values="total_project"
              style="text-4xl md:text-5xl font-bold gradient-text"
            />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-8 w-full md:w-auto min-w-[280px] border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <Caption
              icon="progres"
              color="blue"
              text="Projects On Going"
              values="on_progres"
              style="text-4xl md:text-5xl font-bold gradient-text"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={itemVariants}
        className="flex justify-center items-center"
      >
        <ExampleProject />
      </motion.div>

      {/* Background Decorations */}
      <div className="fixed top-1/4 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="fixed bottom-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
    </motion.div>
  );
}
