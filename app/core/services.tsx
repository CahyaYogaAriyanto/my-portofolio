"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

interface ProjectDetail {
  id: number;
  detail: string;
  detail_img: string;
}

interface Project {
  id: number;
  name: string;
  img_url: string;
  caption: string;
  project_detail: ProjectDetail[];
}

export function useProject() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("project")
        .select(`
          id,
          name,
          img_url,
          caption,
          project_detail!project_detail_id_project_fkey(
            id,
            detail,
            detail_img
          )
        `);

      if (error) {
        console.error(error);
        return;
      }

      setData(data as Project[]);
    };

    fetchData();
  }, []);

  return data;
}

export default function usePortfolio() {
  const [data, setDataPortfolio] = useState({
    caption: "",
    total_project: 0,
    on_progres:0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("portofolio")
        .select("caption, total_project,on_progres")
        .eq("id", 1)
        .single();

      if (error) console.log(error);
      else setDataPortfolio(data);
    };

    fetchData();
  }, []);

  return data;
}



