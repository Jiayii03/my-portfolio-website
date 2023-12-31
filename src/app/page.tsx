"use client"

import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Education */}
      <section id="education" className="snap-start">
        <Education />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Awards */}
      <section id="awards" className="snap-start">
        <Awards />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}