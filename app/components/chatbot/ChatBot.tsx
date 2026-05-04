"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { useThemeLocal } from "@/app/hooks/useThemeLocal";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo! Saya AI Assistant untuk portfolio Cahya Yoga Ariyanto. Ada yang bisa saya bantu?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeLocal();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Langsung gunakan fallback response (lebih reliable)
      const botText = getContextualResponse(input);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      // Simulasi delay untuk UX yang lebih natural
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback contextual responses
  const getContextualResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("skill") || lowerQuestion.includes("kemampuan")) {
      return "Cahya memiliki skills dalam HTML, CSS, JavaScript, React, Next.js, TypeScript, dan Tailwind CSS. Dia juga sedang fokus belajar AI dan Machine Learning!";
    }

    if (lowerQuestion.includes("project") || lowerQuestion.includes("proyek")) {
      return "Anda bisa melihat project-project Cahya di halaman Project. Ada beberapa project menarik yang sudah diselesaikan dan beberapa yang masih dalam pengembangan.";
    }

    if (lowerQuestion.includes("contact") || lowerQuestion.includes("kontak") || lowerQuestion.includes("hubungi")) {
      return "Anda bisa menghubungi Cahya melalui email di cahyayoga10@gmail.com atau WhatsApp di +62 857 1321 1574. Juga bisa connect di LinkedIn!";
    }

    if (lowerQuestion.includes("pendidikan") || lowerQuestion.includes("kuliah") || lowerQuestion.includes("universitas")) {
      return "Cahya sedang menempuh pendidikan S1 Informatika di Universitas Teknologi Yogyakarta (2022-2026) dengan fokus pada AI.";
    }

    if (lowerQuestion.includes("halo") || lowerQuestion.includes("hai") || lowerQuestion.includes("hello")) {
      return "Halo! Senang bertemu dengan Anda. Ada yang ingin Anda ketahui tentang Cahya Yoga Ariyanto?";
    }

    if (lowerQuestion.includes("terima kasih") || lowerQuestion.includes("thanks")) {
      return "Sama-sama! Jangan ragu untuk bertanya lagi jika ada yang ingin Anda ketahui. 😊";
    }

    return "Terima kasih atas pertanyaannya! Saya bisa membantu Anda dengan informasi tentang skills, projects, pendidikan, atau cara menghubungi Cahya. Silakan tanya!";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 left-8 z-[90] p-4 rounded-full shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        } ${isOpen ? "hidden" : "flex"} items-center justify-center group`}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-8 left-8 z-[90] w-[90vw] md:w-[400px] h-[600px] rounded-2xl shadow-2xl overflow-hidden ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">AI Assistant</h3>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              className={`h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 ${
                theme === "dark" ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-purple-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? theme === "dark"
                          ? "bg-purple-600 text-white"
                          : "bg-purple-500 text-white"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-100"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-purple-200"
                          : theme === "dark"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      theme === "dark"
                        ? "bg-gray-800"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <Loader2 className="w-5 h-5 animate-spin text-purple-500" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className={`p-4 border-t ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan..."
                  disabled={isLoading}
                  className={`flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    theme === "dark"
                      ? "bg-gray-700 text-white placeholder-gray-400"
                      : "bg-gray-100 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
