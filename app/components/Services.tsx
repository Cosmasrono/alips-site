"use client";

import Image from "next/image";
import { scrollToSection } from "./constants";
import { Stethoscope, Sprout, Truck, Microscope, ChevronRight } from "lucide-react";

const solutions = [
  {
    title: "Late Blight Control",
    category: "Diseases Solution",
    crops: "Potatoes & Tomatoes",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fall Armyworm Control",
    category: "Pest Solution",
    crops: "Maize & Grain crops",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tuta Absoluta Control",
    category: "Pest Solution",
    crops: "Tomatoes & Potatoes",
    image: "https://images.unsplash.com/photo-1590682680393-272f779776bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Early Blight Control",
    category: "Diseases Solution",
    crops: "Potatoes & Tomatoes",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Crop Clinic
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-8 leading-tight">
              Pest & Disease <span className="text-green-700">Management Experts</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our Crop Clinic provides specialized solutions for the most common and devastating pests and diseases affecting Kenyan agriculture. We don't just sell chemicals; we provide cures.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
                <Microscope className="text-green-700 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Diagnosis</h4>
                  <p className="text-sm text-gray-500">Accurate pest and disease identification.</p>
                </div>
              </div>
              <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-4">
                <Sprout className="text-yellow-700 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-1">Treatment</h4>
                  <p className="text-sm text-gray-500">Effective, tested chemical solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {solutions.map((sol, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-green-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest block mb-1">
                    {sol.category}
                  </span>
                  <h4 className="text-white font-bold text-sm leading-tight mb-1">
                    {sol.title}
                  </h4>
                  <p className="text-white/60 text-[10px] font-medium">
                    Target: {sol.crops}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-6">Need Expert Advice for Your Farm?</h3>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of farmers who rely on our Crop Clinic for sustainable yield improvement and pest management.
            </p>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-green-950 font-black rounded-full transition-all shadow-2xl hover:-translate-y-1"
            >
              Consult Our Agronomist
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20" />
        </div>
      </div>
    </section>
  );
}
