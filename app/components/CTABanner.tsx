"use client";

import Image from "next/image";
import { scrollToSection } from "./constants";

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85"
        alt="Lush green crop field"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-green-950/80" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-8">
              Pest Management <span className="text-yellow-500">Experts</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10 font-medium">
              We provide farmers with the right products and expert advice to ensure maximum yield and healthy crops. Join our Crop Clinic today.
            </p>
            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-yellow-500 hover:bg-yellow-600 text-green-950 px-10 py-4 rounded-full text-lg font-black transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                Discover More
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Our Services
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center text-green-950 font-black text-2xl">
                  15+
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold">Years Experience</h4>
                  <p className="text-white/50 font-medium">Serving Kenyan farmers since 2011.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                  500
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold">Product Varieties</h4>
                  <p className="text-white/50 font-medium">Genuine chemicals & fertilizers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
