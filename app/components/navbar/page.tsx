"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-10"></div>
      <nav
        className={`
          w-[90%] h-20 rounded-full sticky top-3 flex justify-between items-center px-6 z-50 mx-auto
          transition-all duration-500 ease-in-out
          ${scrolled ? "bg-white/5 backdrop-blur-lg shadow-xl mt-5" : "bg-transparent "}
        `}
      >
        <div className="text-white font-bold text-xl">
          YogaDev
        </div>

        <ul className="hidden md:flex gap-x-20 uppercase text-white mx-auto">
          <li>
            <Link
              href="/"
              className={
                pathname === "/" 
                  ? "text-purple-700 font-semibold"
                  : "hover:text-yelow-300"
              }
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/page/project"
              className={
                pathname === "/page/project"
                  ? "text-purple-700 font-semibold"
                  : "hover:text-blue-300"
              }
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              href="/page/contact"
              className={
                pathname === "/page/contact"
                  ? "text-purple-700 font-semibold"
                  : "hover:text-blue-300"
              }
            >
              Contacts
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white  m-0"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden h-full items-center w-full bg-red backdrop-blur-md fixed text-white uppercase flex flex-col gap-5 p-6">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-purple-700 font-semibold"
                : "hover:text-blue-300"
            }
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/page/project"
            className={
              pathname === "/page/project"
                ? "text-purple-700 font-semibold"
                : "hover:text-blue-300"
            }
            onClick={() => setOpen(false)}
          >
            Project
          </Link>

          <Link
            href="/page/contact"
            className={
              pathname === "/page/contact"
                ? "text-purple-700 font-semibold"
                : "hover:text-blue-300"
            }
            onClick={() => setOpen(false)}
          >
            Contacts
          </Link>
        </div>
      )}
    </>
  );
}
