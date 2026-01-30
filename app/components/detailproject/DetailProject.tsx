"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/core/supabaseClient";

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

export default function DetailProject({ projectId, onClose }: DetailProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [details, setDetails] = useState<ProjectDetail[]>([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const { data: projectData } = await supabase
        .from("project")
        .select("id, name, caption, img_url")
        .eq("id", projectId)
        .single();

      const { data: detailData } = await supabase
        .from("project_detail")
        .select("id, detail, detail_img")
        .eq("project_id", projectId);

      setProject(projectData);
      setDetails(detailData || []);
    };

    fetchDetail();
  }, [projectId]);

  if (!project) return null; 
    return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2">
        <div className="relative text-white pt-5 bg-gray-900 h-full max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl">
        <button
            onClick={onClose}
            className="absolute top-3 left-3 text-white text-xl font-bold"
        >
            ✕
        </button>
        <div className=" overflow-y-auto h-full mt-6 mb-2 p-3 lg:px-20 ">
            {details.map((d) => (
                <div key={d.id}>
                <img
                    src={d.detail_img}
                    className="rounded-xl "
                />
                <p className="text-gray-300">{d.detail}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}
