"use client";
import {useProject} from "../../core/services";

export default function ExampleProject() {
  const data = useProject();
  return (
    <div className="grid grid-cols-1 p-50 gap-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative shadow-2xl rounded-lg overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 flex items-center z-10 w-full h-full bg-black/30 p-3">
          <div className="w-[40%]">
            <h1 className="text-white text-4xl font-bold uppercase">
              {item.name}
            </h1>
            <p className="text-gray-200  text-xl">
              {item.caption}
            </p>
          </div>
          </div>
          <div className="absolute flex bottom-0 p-5">
              <button className="text-white text-xl border-2 border-amber-50 rounded-lg p-2 px-5 ">View More</button>
          </div>
          <img
            src={item.img_url}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out "
          />
        </div>
      ))}
    </div>
  );
}
