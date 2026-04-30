"use client";

import Image from "next/image";
import { scrollToSection } from "./constants";
import { Calendar, User, ArrowRight } from "lucide-react";

const news = [
  {
    title: "Balanced Potato Nutrition: Essential Ratios for Maximum Yield Quality",
    date: "April 30, 2026",
    author: "Karanja Irungu-Molo",
    category: "Crop Nutrition",
    image: "/products/WhatsApp Image 2026-04-30 at 5.46.56 AM6.jpeg"
  },
  {
    title: "Effective Weed Control In Maize: The Best Selective Herbicide",
    date: "March 2, 2026",
    author: "Mildred Kiura",
    category: "Recent News",
    image: "/products/WhatsApp Image 2026-04-30 at 5.46.56 AM.jpeg"
  },
  {
    title: "Combating Tuta Absoluta in Tomatoes: Fenari 120SC.",
    date: "February 28, 2026",
    author: "Kenagro Limited",
    category: "Crop Health",
    image: "/products/WhatsApp Image 2026-04-30 at 5.46.54 AM.jpeg"
  },
  {
    title: "Controlling Early and Late Blight in Tomatoes: TAJIRI 720WP",
    date: "February 28, 2026",
    author: "Agronomy Dept",
    category: "Pest Solution",
    image: "/products/WhatsApp Image 2026-04-30 at 5.46.56 AM3.jpeg"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Agronomic News
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6">
            Latest News & <span className="text-green-700">Articles</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-green-950 text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-green-600" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-green-600" />
                    {item.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-950 mb-6 group-hover:text-green-700 transition-colors leading-tight line-clamp-2">
                  {item.title}
                </h3>
                <button className="flex items-center gap-2 text-green-700 font-bold text-sm group-hover:gap-3 transition-all">
                  READ MORE <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 bg-green-950 text-white rounded-full font-bold text-lg hover:bg-green-900 transition-all shadow-xl"
          >
            Explore All News
          </button>
        </div>
      </div>
    </section>
  );
}
