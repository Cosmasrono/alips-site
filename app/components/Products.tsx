"use client";

import Image from "next/image";
import { scrollToSection } from "./constants";

const products = [
  {
    name: "Kanon HIGH-P",
    type: "Foliar Fertilizer",
    desc: "High-phosphorus formula for strong root development and vigorous early crop establishment.",
    img: "/products/kanon-high-p.jpg",
    alt: "Kanon HIGH-P 1L foliar fertilizer bottle",
    badge: "High Phosphorus",
    badgeBg: "bg-red-600",
  },
 
  {
    name: "Kanon HIGH P+K",
    type: "Foliar Fertilizer",
    desc: "Phosphorus-potassium blend that drives flowering, fruit set, and bulking for maximum yield quality.",
    img: "/products/kanon-high-pk.jpg",
    alt: "Kanon HIGH P+K 1L foliar fertilizer bottle",
    badge: "Phosphorus + Potassium",
    badgeBg: "bg-red-700",
  },
  {
    name: "Kanon BIOSTIMULANT",
    type: "Biostimulant",
    desc: "Natural biostimulant that boosts crop vigour, improves nutrient uptake, and builds drought resilience.",
    img: "/products/kanon-biostimulant.jpg",
    alt: "Kanon Biostimulant 1L bottle",
    badge: "Biostimulant",
    badgeBg: "bg-green-700",
  },
   
  {
    name: "Kanon MAHARAGWE",
    type: "Foliar Fertilizer",
    desc: "Specially formulated for bean production — promotes healthy pod fill and reduces flower drop.",
    img: "/products/kanon-maharagwe-b.jpg",
    alt: "Kanon Maharagwe 1L foliar fertilizer bottle alternate view",
    badge: "For Beans",
    badgeBg: "bg-purple-700",
  },
 
  {
    name: "Kanon N.P.K 24:24:18+TE",
    type: "Foliar Fertilizer",
    desc: "A well-balanced formulation enriched with trace elements to support healthy growth, proper tuber development, and improved yield quality — ideal for heavy feeders like potatoes.",
    img: "/products/kanon-npk-b.jpg",
    alt: "Kanon NPK 24:24:18+TE 1L foliar fertilizer bottle alternate view",
    badge: "Complete NPK",
    badgeBg: "bg-slate-700",
  },
  {
    name: "VODA NP",
    type: "Fertilizer & Foliar",
    desc: "A premium nutrient solution for vigorous growth in vegetables, specifically tomatoes and beans. Promotes healthy development and high yield.",
    img: "/products/WhatsApp Image 2026-04-307 at 5.46.55 AM.jpeg",
    alt: "Voda NP 5KG fertilizer bag",
    badge: "New Arrival",
    badgeBg: "bg-blue-600",
  },
 
 
];

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="text-green-600 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
              What We Stock
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Our Products
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs md:text-right leading-relaxed text-sm">
            Kanon — certified fertigation &amp; foliar fertilizers trusted by
            farmers across East Africa.
          </p>
        </div>

        {/* Product grid — 2 cols on mobile, 3 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.img}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100"
            >
              {/* Bottle image */}
              <div className="relative h-48 sm:h-60 md:h-72 bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.alt}
                  fill
                  className="object-contain p-3 sm:p-5 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    const parent = t.parentElement;
                    if (parent && !parent.querySelector(".placeholder-bottle")) {
                      const ph = document.createElement("div");
                      ph.className = "placeholder-bottle flex flex-col items-center justify-center gap-2 text-gray-300";
                      ph.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 sm:w-20 sm:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 3h6l1 3v1a5 5 0 010 10v1l-1 3H9l-1-3v-1a5 5 0 010-10V6L9 3z"/></svg><span class="text-xs font-semibold">Image coming soon</span>`;
                      parent.appendChild(ph);
                    }
                  }}
                />
                <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 ${product.badgeBg} text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow`}>
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <p className="text-[9px] sm:text-xs font-bold text-green-600 uppercase tracking-widest mb-1">
                  {product.type}
                </p>
                <h3 className="text-sm sm:text-base md:text-lg font-black text-gray-900 group-hover:text-green-700 transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-gray-500 text-[11px] sm:text-sm leading-relaxed flex-1 hidden sm:block">
                  {product.desc}
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-3 sm:mt-4 text-left flex items-center gap-1 text-green-700 text-xs sm:text-sm font-bold group-hover:gap-2 transition-all duration-300"
                >
                  Enquire <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-gray-400 text-xs sm:text-sm">
          All products available in 1L — bulk orders welcome.{" "}
          <button
            onClick={() => scrollToSection("contact")}
            className="text-green-600 font-semibold hover:underline"
          >
            Contact us for wholesale pricing.
          </button>
        </p>
      </div>
    </section>
  );
}
