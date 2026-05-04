"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useProject } from "../../core/services";
import DetailProject from "@/app/components/detailproject/DetailProject";
import ProjectSkeleton from "@/app/components/skeleton/ProjectSkeleton";
import { ExternalLink, Calendar, Code } from "lucide-react";

interface Project {
  id: number;
  name: string;
  caption: string;
  img_url: string;
}

function ProjectCard({ item, index }: { item: Project; index: number }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 bg-gray-900"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Fixed Height Container */}
        <div className="relative w-full h-full">
          {/* Loading Skeleton */}
          {!imageLoaded && isInView && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse">
              <div className="absolute inset-0 shimmer" />
            </div>
          )}

          {/* Image - Only load when in view */}
          {isInView && (
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onLoad={() => setImageLoaded(true)}
              src={item.img_url}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            {/* Top Section - Badge & Tags */}
            <div className="flex items-start justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex flex-col gap-2"
              >
                <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/20 inline-flex items-center gap-2 w-fit">
                  <Code className="w-4 h-4" />
                  Project #{item.id}
                </span>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="glass px-3 py-1 rounded-full text-xs font-semibold text-green-400 border border-green-400/30"
              >
                ● Completed
              </motion.div>
            </div>

            {/* Bottom Section - Title & Description */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase group-hover:text-purple-300 transition-colors line-clamp-2">
                  {item.name}
                </h1>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg line-clamp-2 max-w-3xl">
                  {item.caption}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="flex gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(item)}
                  className="flex items-center gap-2 text-white text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl px-6 py-3 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 group/button shadow-lg"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative Corner Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            
            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <DetailProject
            projectId={selectedProject.id}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ExampleProject() {
  const data = useProject();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProjectSkeleton />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
      {/* Grid Layout with Consistent Card Sizes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {data.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="glass rounded-2xl p-12 max-w-md mx-auto">
            <Code className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Yet</h3>
            <p className="text-gray-400">Check back soon for exciting projects!</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
