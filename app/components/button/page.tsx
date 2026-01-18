interface UrlProps {
  url: string;
}
export default function Button({ url }:UrlProps) {
  return (
    <a
      href={url}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative z-0 w-40 md:w-[40%] md:mt-10 p-2 font-bold rounded-full 
        text-purple-700 overflow-hidden group mx-auto md:mx-0
      "
    >
      <span className="absolute inset-1.5 rounded-full p-1 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 animate-borderMove"></span>
      <span className="relative block bg-black rounded-full py-2 text-center">
        Download CV
      </span>
    </a>
  );
}
