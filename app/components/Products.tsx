"use client";

import Image from "next/image";
import { productCategories, scrollToSection } from "./constants";
import { ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Product Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6">
              Leading Agrochemicals & <span className="text-green-700">Crop Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              We are dealers in Agrochemicals, Agricultural Disinfectants, Specialty Fertilizers, and Adjuvants, helping farmers achieve maximum yields.
            </p>
          </div>
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors group"
          >
            View All Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-green-950/90 via-green-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-black text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-3 text-yellow-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span>DISCOVER MORE</span>
                  <div className="w-8 h-px bg-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
