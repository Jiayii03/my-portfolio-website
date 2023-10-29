"use client"

import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {

  useEffect(() => {
    toast.error("Website is still under development!");
  }, [])

  return (

    <div className="h-screen bg-gradient-to-r from-rose-50 to-blue-100 dark:bg-gradient-to-br dark:from-[#00081A]  dark:to-[#181932] snap-y snap-mandatory overflow-scroll z-0 scroll-smooth smoothscroll">
      <Toaster />
      
      {/* Header */}
      <Header />
      
      {/* Hero */}
      {/* the id is for anchor purpose */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}