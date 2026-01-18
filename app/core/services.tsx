"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

interface Project {
  id: number;
  name: string;
  img_url: string;
  caption: string;
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

export function useProject() {
  const [data, setDataPortfolio] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("project")
        .select("*");

      if (error) console.log(error);
      else setDataPortfolio(data as Project[]);
    };

    fetchData();
  }, []);

  return data;
}

