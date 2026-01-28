import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`antialiased bg-gray-50 min-h-screen`}
      >
        {/*Navbar tampil di semua halaman */}
        <Navbar />
        <img
            src="/gradient.png" 
            alt="Foto"
            className="absolute top-0 right-0 opacity-50 -z-10 w-[50vw] max-w-[400px] md:w-[30vw]"
        />
        <div
         style={{
          height:0,width:'30rem',position:'absolute',top:'20%',right:0,boxShadow:'0 0 700px 15px white',rotate:'-30deg',zIndex:-1
        }}
        />
        {/*Konten halaman berubah sesuai route */}
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
