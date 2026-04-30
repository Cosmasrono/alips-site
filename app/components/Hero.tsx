"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { scrollToSection } from "./constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=90",
    title: "Your Shield in the Field",
    subtitle: "High Quality Pet And Animal Health Products.",
    badge: "Trusted Agriculture Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1800&q=90",
    title: "Alip Seeds",
    subtitle: "We provide farmers with the right seeds for maximum yield.",
    badge: "Premium Seed Varieties"
  },
  {
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1800&q=90",
    title: "Professional Services",
    subtitle: "Expert advice and clinical support for your farming success.",
    badge: "Crop Clinic & Experts"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[85vh] lg:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40 lg:bg-black/30" />
          
          <div className="relative h-full max-w-[1400px] mx-auto px-8 flex items-center">
            <div className={`max-w-3xl transition-all duration-1000 delay-300 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <span className="inline-block bg-yellow-500 text-green-950 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-sm mb-6">
                {slide.badge}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 font-medium">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => scrollToSection("products")}
                  className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-green-900/40 hover:-translate-y-1 active:scale-95"
                >
                  Discover More
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white hover:bg-gray-100 text-green-900 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  Learn About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-green-700 hover:border-green-700 transition-all z-20 group"
      >
        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-green-700 hover:border-green-700 transition-all z-20 group"
      >
        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? "w-10 bg-yellow-500" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
