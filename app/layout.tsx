"use client";

import "./globals.css";
import { motion } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import ChatBot from "./components/chatbot/ChatBot";
import ThemeWrapper from "./components/ThemeWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <title>Cahya Yoga Ariyanto - Portfolio</title>
        <meta name="description" content="Portfolio website Cahya Yoga Ariyanto - Full Stack Developer & AI Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className="antialiased bg-gray-50 min-h-screen relative overflow-x-hidden">
        <ThemeWrapper>
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-20 bg-gradient-to-br from-black via-gray-900 to-black" />
            {/* Gradient Orbs */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div
              className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="fixed inset-0 -z-10 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Top Gradient Image */}
            <img
              src="/gradient.png"
              alt="Gradient"
              className="fixed top-0 right-0 opacity-30 -z-10 w-[50vw] max-w-[500px] md:w-[30vw] pointer-events-none"
            />

            {/* Diagonal Light Effect */}
            <div
              className="fixed -z-10 pointer-events-none"
              style={{
                height: 0,
                width: "30rem",
                position: "fixed",
                top: "20%",
                right: 0,
                boxShadow: "0 0 700px 15px rgba(139, 92, 246, 0.15)",
                rotate: "-30deg",
                zIndex: -1,
              }}
            />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-0 p-4 md:p-10">{children}</main>

            {/* AI ChatBot */}
            <ChatBot />

            {/* Scroll to Top Button */}
            <ScrollToTop />
        </ThemeWrapper>
      </body>
    </html>
  );
}

// Scroll to Top Component
function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full border border-white/20 text-white hover:bg-purple-500/20 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
}
