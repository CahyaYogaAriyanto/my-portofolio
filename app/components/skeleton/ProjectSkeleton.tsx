"use client";

import { motion } from "framer-motion";

export default function ProjectSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-800"
            style={{ aspectRatio: "16/9" }}
          >
            <div className="relative w-full h-full bg-gray-800 animate-pulse">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Section Skeleton */}
                <div className="flex items-start justify-between">
                  <div className="h-8 w-28 bg-gray-700 rounded-full animate-pulse" />
                  <div className="h-6 w-24 bg-gray-700 rounded-full animate-pulse" />
                </div>

                {/* Bottom Section Skeleton */}
                <div className="space-y-4">
                  {/* Title Skeleton */}
                  <div className="space-y-2">
                    <div className="h-8 w-3/4 bg-gray-700 rounded animate-pulse" />
                    <div className="h-6 w-full bg-gray-700 rounded animate-pulse" />
                  </div>

                  {/* Button Skeleton */}
                  <div className="h-12 w-40 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
