"use client";

import { useState, useEffect } from "react";
import { navLinks, scrollToSection } from "./constants";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block bg-green-900 text-white/90 text-[13px] py-2 transition-all duration-300 ${scrolled ? "-translate-y-full absolute" : "relative"}`}>
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center font-medium">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-yellow-400" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/20 pl-8">
              <Mail size={14} className="text-yellow-400" />
              <span>info@alipsuppliers.co.ke</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/60">Follow Us:</span>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "top-0 bg-white shadow-xl py-3" : "top-0 lg:top-9 bg-white/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src="/logo.svg" alt="Alip Suppliers" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.id} 
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-1.5 py-2 text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                    activeSection === link.id ? "text-green-700" : "text-gray-700 hover:text-green-700"
                  }`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === link.id ? "rotate-180" : ""}`} />}
                </button>
                
                {link.subLinks && (
                  <div className={`absolute left-0 top-full pt-2 w-64 transition-all duration-300 origin-top-left ${
                    openDropdown === link.id ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2">
                      {link.subLinks.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => { scrollToSection("products"); setOpenDropdown(null); }}
                          className="w-full text-left px-6 py-2.5 text-[13px] font-semibold text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full text-sm font-bold shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-green-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-white ${menuOpen ? "max-h-[100vh] border-t border-gray-100" : "max-h-0"}`}>
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.id} className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    if (link.subLinks) {
                      setOpenDropdown(openDropdown === link.id ? null : link.id);
                    } else {
                      scrollToSection(link.id);
                      setMenuOpen(false);
                    }
                  }}
                  className={`text-lg font-bold flex justify-between items-center ${activeSection === link.id ? "text-green-700" : "text-gray-800"}`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown size={20} className={openDropdown === link.id ? "rotate-180" : ""} />}
                </button>
                {link.subLinks && openDropdown === link.id && (
                  <div className="pl-4 flex flex-col gap-3 mt-2 border-l-2 border-green-100">
                    {link.subLinks.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => { scrollToSection("products"); setMenuOpen(false); }}
                        className="text-left text-gray-500 font-semibold"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}
              className="w-full py-4 bg-green-700 text-white rounded-xl font-bold text-lg mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
