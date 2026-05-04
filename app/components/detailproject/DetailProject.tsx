"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  X,
  Code,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";

import { supabase } from "@/app/core/supabaseClient";
import { useThemeLocal } from "@/app/hooks/useThemeLocal";

interface Project {
  id: number;
  name: string;
  caption: string;
  img_url: string;
}

interface ProjectDetail {
  id: number;
  detail: string;
  detail_img: string;
}

interface DetailProps {
  projectId: number;
  onClose: () => void;
}

export default function DetailProject({
  projectId,
  onClose,
}: DetailProps) {
  const { theme } = useThemeLocal();

  const [project, setProject] = useState<Project | null>(null);
  const [details, setDetails] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);

      // ✅ Ambil project
      const { data: projectData, error: projectError } =
        await supabase
          .from("project")
          .select("id, name, caption, img_url")
          .eq("id", projectId)
          .single();

      // ✅ Ambil semua detail gambar
      const { data: detailData, error: detailError } =
        await supabase
          .from("project_detail")
          .select("id, detail, detail_img")
          .eq("project_id", projectId);

      if (projectError) {
        console.error(projectError);
      }

      if (detailError) {
        console.error(detailError);
      }

      setProject(projectData || null);
      setDetails(detailData || []);

      setLoading(false);
    };

    fetchDetail();
  }, [projectId]);

  // ✅ ukuran sinkron
  const ITEM_WIDTH = 400;
  const GAP = 24;

  // ✅ total width marquee
  const totalWidth = useMemo(() => {
    return (ITEM_WIDTH + GAP) * details.length;
  }, [details]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* BACKDROP */}
      <div
        className={`absolute inset-0 backdrop-blur-2xl ${
          theme === "dark"
            ? "bg-black/90"
            : "bg-white/90"
        }`}
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl ${
          theme === "dark"
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-200"
        }`}
      >
        {/* HEADER */}
        <div
          className={`flex items-center justify-between p-6 border-b ${
            theme === "dark"
              ? "border-gray-800"
              : "border-gray-200"
          }`}
        >
          <div>
            <h2
              className={`text-3xl font-bold ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {project.name}
            </h2>

            <p
              className={`mt-2 ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              {project.caption}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-3 rounded-full transition ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-black"
            }`}
          >
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin w-12 h-12 text-purple-500" />

              <p className="mt-4 text-gray-500">
                Loading...
              </p>
            </div>
          ) : details.length === 0 ? (
            <div className="py-20 text-center">
              <p
                className={`text-lg ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                No project details found
              </p>
            </div>
          ) : (
            <>
              {/* MARQUEE */}
              <div className="relative overflow-hidden rounded-2xl">
                {/* Pause Button */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setIsPaused(!isPaused)
                    }
                    className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-900/80 hover:bg-gray-800 text-white border border-gray-700"
                        : "bg-white/80 hover:bg-white text-gray-900 border border-gray-300 shadow-lg"
                    }`}
                  >
                    {isPaused ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </motion.button>
                </div>

                {/* Progress */}
                {!isPaused && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800/50 z-20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
                      animate={{
                        width: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}

                {/* MARQUEE CONTENT */}
                <motion.div
                  className="flex"
                  style={{ willChange: "transform" }}
                  animate={
                    isPaused
                      ? {}
                      : {
                          x: [0, -totalWidth],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                >
                  {[...details, ...details].map(
                    (item, index) => (
                      <div
                        key={`${item.id}-${index}`}
                        className="min-w-[400px] mr-6"
                      >
                        <div className="relative h-[300px] overflow-hidden rounded-2xl group">
                          <motion.img
                            whileHover={{
                              scale: 1.05,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            src={item.detail_img}
                            alt={item.detail}
                            className="w-full h-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />

                          <div className="absolute bottom-4 left-4 right-4">
                            <motion.p
                              initial={{
                                opacity: 0,
                                y: 10,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              className="text-white text-sm font-medium leading-relaxed"
                            >
                              {item.detail}
                            </motion.p>
                          </div>

                          {/* Number */}
                          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                            {(index %
                              details.length) +
                              1}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </motion.div>

                {/* Hover Pause */}
                <div
                  className="absolute inset-0 z-10"
                  onMouseEnter={() =>
                    setIsPaused(true)
                  }
                  onMouseLeave={() =>
                    setIsPaused(false)
                  }
                />
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-sm flex items-center gap-2">
                    <Code size={16} />
                    Project #{project.id}
                  </span>

                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm flex items-center gap-2">
                    <ImageIcon size={16} />
                    {details.length} Items
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}