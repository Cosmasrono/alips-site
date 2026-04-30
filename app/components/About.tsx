"use client";

import Image from "next/image";
import { scrollToSection } from "./constants";
import { CheckCircle2, ShieldCheck, Target, Users } from "lucide-react";

export default function About() {
  const features = [
    { icon: <ShieldCheck className="text-yellow-600" size={32} />, title: "Quality Assurance", desc: "We supply only certified and tested agrochemicals." },
    { icon: <Target className="text-yellow-600" size={32} />, title: "Farmers First", desc: "Our solutions are tailored to maximize farmer profitability." },
    { icon: <Users className="text-yellow-600" size={32} />, title: "Expert Support", desc: "Professional agronomic advice available through our clinic." },
  ];

  return (
    <section id="about" className="py-24 bg-green-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/products/WhatsApp Image 2026-04-30 at 5.46.56 AM6.jpeg"
                alt="Expert agronomist in the field"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/40 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-black text-green-700">15+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-tighter leading-none">
                  Years of<br />Excellence
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Empowering Kenyan farmers with world-class agricultural solutions since 2011.
              </p>
            </div>
          </div>

          <div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Philosophy And Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-8 leading-tight">
              Leading The Way In <span className="text-green-700">Sustainable Agriculture</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              ALIP Suppliers is a trusted agrochemical company in Kenya, supplying high-quality crop protection products, specialty fertilizers, and farm solutions that promote sustainable agriculture nationwide.
            </p>

            <div className="space-y-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-950 mb-1">{f.title}</h4>
                    <p className="text-gray-500 font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl shadow-green-900/20"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
