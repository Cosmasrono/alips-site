"use client";

import { scrollToSection, navLinks } from "./constants";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Bio */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img src="/logo-white.svg" alt="Alip Suppliers" className="h-16 w-auto" />
            </div>
            <p className="text-white/60 leading-relaxed mb-8 font-medium">
              We are a trusted agrochemical company in Kenya, supplying high-quality crop protection products, specialty fertilizers, and farm solutions that promote sustainable agriculture nationwide.
            </p>
            <div className="flex items-center gap-4">
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Explore
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-yellow-500 font-bold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-black tracking-widest mb-1">Call Us</p>
                  <p className="font-bold">+254 755 098 858</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-black tracking-widest mb-1">Email Us</p>
                  <p className="font-bold">info@alipsuppliers.co.ke</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-black tracking-widest mb-1">Our Location</p>
                  <p className="font-bold text-sm leading-relaxed">Njoro, Nakuru County, Kenya</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500 rounded-full" />
            </h4>
            <p className="text-white/60 mb-6 font-medium">Subscribe to get the latest agronomic news and product updates.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-hidden focus:border-yellow-500 transition-colors"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-950 font-black py-3 rounded-full transition-all shadow-xl">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-bold tracking-wide">
            Copyright © 2026 ALIP Suppliers Limited. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm font-bold tracking-wide">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
