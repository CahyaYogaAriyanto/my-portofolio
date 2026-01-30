"use client";
import { useState } from "react";
import {useProject} from "../../core/services";
import DetailProject from '@/app/components/detailproject/DetailProject';

interface Project {
  id: number;
  name: string;
  caption: string;
  img_url: string;
}

export default function ExampleProject() {
  const data = useProject();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="grid grid-cols-1 p-[0px] md:p-10 lg:p-40 gap-5 lg:gap-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative shadow-2xl rounded-lg overflow-hidden"
        >
          {/* <div className="absolute inset-y-0 left-0 flex items-center z-10 w-full h-full bg-black/30 p-3"> */}
          <div className="absolute inset-0 flex items-center z-10 w-full h-full bg-black/30 p-3 pointer-events-none">

          <div className="w-[70%] md:w-[45%]">
            <h1 className="text-white text-xl lg:text-4xl font-bold uppercase">
              {item.name}
            </h1>
            <p className="text-gray-200 text-md lg:text-xl ">
              {item.caption}
            </p>
          </div>
          </div>
          <div className="absolute flex bottom-0 p-5">
              <button className="pointer-events-auto text-white text-md lg:text-xl border-2 border-white rounded-lg p-1 px-3 lg:p-2 lg:px-6 hover:bg-white hover:text-black transition" 
                onClick={() =>setSelectedProject(item)}>
                View More
              </button>
          </div>
          <div className="h-70 w-full md:h-auto md:w-full">
            <img
            src={item.img_url}
            alt={item.name}
            className=" w-full h-full object-cover transition-transform duration-300 ease-in-out hover:border-amber-50"
          />
          </div>
        </div>
      ))}
      {selectedProject && (
        <DetailProject
          projectId={selectedProject.id}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
