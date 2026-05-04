"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLocal } from "@/app/hooks/useThemeLocal";
import Icon from "@/app/components/icon/Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeLocal();

  // Check if current page is NOT About Us
  const showSocialIcons = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "About Us" },
    { href: "/pages/project", label: "Project" },
    { href: "/pages/contact", label: "Contacts" },
  ];

  const socialLinks = [
    { nama: "ig", link: "https://www.instagram.com/ygartn_/", color: "#E4405F" },
    { nama: "linkedin", link: "https://www.linkedin.com/in/cahya-yoga-ariyanto-8b5139261/", color: "#0A66C2" },
    { nama: "github", link: "https://github.com/CahyaYogaAriyanto", color: theme === "dark" ? "#ffffff" : "#181717" },
    { nama: "gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=yogakecol123@gmail.com", color: "#EA4335" },
  ];

  return (
    <>
      <div className="h-10"></div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          w-[95%] md:w-[90%] h-16 md:h-20 rounded-full sticky top-3 flex justify-between items-center px-4 md:px-8 z-[100] mx-auto
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? theme === "dark"
                ? "glass shadow-2xl border border-white/10"
                : "bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200"
              : "bg-transparent"
          }
        `}
      >
        {/* Left Side - Logo OR Social Icons */}
        <div className="flex items-center gap-4">
          {!showSocialIcons ? (
            // Show Logo on About Us page
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`font-bold text-lg md:text-2xl gradient-text cursor-pointer ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              YogaDev
            </motion.div>
          ) : (
            // Show Social Icons on other pages
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`font-bold text-lg md:text-xl gradient-text cursor-pointer hidden md:block ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                YogaDev
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex items-center gap-3 ml-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.nama}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon nama={social.nama} link={social.link} color={social.color} size={24} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>

        {/* Center - Desktop Menu */}
        <ul
          className={`hidden md:flex gap-x-8 lg:gap-x-16 uppercase text-sm lg:text-base absolute left-1/2 -translate-x-1/2 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={`
                  relative group transition-colors duration-300
                  ${
                    pathname === item.href
                      ? "text-purple-500 font-semibold"
                      : theme === "light"
                      ? "hover:text-purple-600"
                      : "hover:text-purple-300"
                  }
                `}
              >
                {item.label}
                {/* Underline Animation */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 
                    transition-all duration-300
                    ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-gray-200 text-purple-600 hover:bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`md:hidden relative z-[1000] ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 backdrop-blur-xl ${
                theme === "dark" ? "bg-black/80" : "bg-white/80"
              }`}
              onClick={() => setOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative h-full flex flex-col items-center justify-center gap-8 uppercase ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className={`
                      text-2xl font-bold transition-all duration-300
                      ${
                        pathname === item.href
                          ? "gradient-text scale-110"
                          : theme === "light"
                          ? "hover:text-purple-600 hover:scale-110"
                          : "hover:text-purple-300 hover:scale-110"
                      }
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Social Icons in Mobile Menu */}
              {showSocialIcons && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex gap-6 mt-8"
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.nama}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Icon nama={social.nama} link={social.link} color={social.color} size={32} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
