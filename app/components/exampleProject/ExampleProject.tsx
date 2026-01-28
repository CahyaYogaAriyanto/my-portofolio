"use client";
import {useProject} from "../../core/services";

export default function ExampleProject() {
  const data = useProject();
  return (
    <div className="grid grid-cols-1 md:p-10 lg:p-50 gap-5 lg:gap-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative shadow-2xl rounded-lg overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 flex items-center z-10 w-full h-full bg-black/30 p-3">
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
              <button className="text-white text-md lg:text-xl border-2 border-white rounded-lg p-1 px-3 lg:p-2 lg:px-6">View More</button>
          </div>
          <div className="h-70 w-full md:h-full md:w-full">
            <img
            src={item.img_url}
            alt={item.name}
            className=" w-full h-full object-cover transition-transform duration-300 ease-in-out "
          />
          </div>
        </div>
      ))}
    </div>
  );
}
