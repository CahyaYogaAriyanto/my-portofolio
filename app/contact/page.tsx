"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center px-1 md:mt-15 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-2"
      >
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 mb-8">
            Jangan ragu untuk menghubungi saya untuk kerja sama atau diskusi proyek.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-400" />
              <span className="text-gray-300">cahyayoga10@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-purple-400" />
              <span className="text-gray-300">+62 857 1321 1574</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-400" />
              <span className="text-gray-300">Indonesia</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-xl"
        >
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 rounded-xl bg-black border border-gray-800 text-white focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-black border border-gray-800 text-white focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows={4}
              placeholder="Pesan"
              className="w-full p-3 rounded-xl bg-black border border-gray-800 text-white focus:ring-2 focus:ring-purple-500"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-white"
            >
              <Send size={18} /> Kirim Pesan
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
