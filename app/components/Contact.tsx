"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-8 leading-tight">
              Get In Touch With <span className="text-green-700">Our Experts</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
              Have questions about our products or need agronomic advice? Our team of experts is ready to help you optimize your farm's productivity.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  <Phone size={20} className="text-green-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-green-950 font-bold mb-1">Call Us</h4>
                  <p className="text-gray-500 font-medium">+254 755 098 858</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="text-green-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-green-950 font-bold mb-1">Email Us</h4>
                  <p className="text-gray-500 font-medium text-sm">info@alipsuppliers.co.ke</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="text-green-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-green-950 font-bold mb-1">Location</h4>
                  <p className="text-gray-500 font-medium">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  <Clock size={20} className="text-green-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-green-950 font-bold mb-1">Hours</h4>
                  <p className="text-gray-500 font-medium">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative z-10">
              <h3 className="text-2xl font-black text-green-950 mb-8">Send Us A Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-green-700 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <input  
                      type="tel" 
                      placeholder="+254 755 098 858" 
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-green-700 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-green-700 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-green-700 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-3"
                >
                  SEND MESSAGE
                  <Send size={18} />
                </button>
              </form>
            </div>
            {/* Decorative background for form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-700 rounded-full opacity-10 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
