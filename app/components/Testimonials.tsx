import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Douglas Koech",
    role: "Farmer",
    quote: "The products perform well, but the outcome is highly dependent on applying them at the correct growth stages. If application is delayed or done too early, the crop does not fully benefit, and the expected improvement in tuber formation and yield may not be achieved."
  },
  {
    name: "Teresia Musyoka",
    role: "Farmer",
    quote: "For best results, the products need to be integrated with good agronomic practices such as proper land preparation, timely irrigation, effective pest and disease management, and appropriate spacing. When used in isolation without these supporting practices, the performance is not as strong."
  },
  {
    name: "Cosmas Cheruiyot",
    role: "Farmer",
    quote: "Farmers who already understand crop nutrition and feeding programs tend to get better results because they can apply the products more accurately. The improvements in crop health and yield are noticeable, but they are not instant. Farmers need to be patient to fully realize the benefits at harvest."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-green-950 uppercase">
            Our <span className="text-green-700">Testimonials</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="relative group">
              <div className="bg-green-50 rounded-[2.5rem] p-10 pt-16 h-full transition-all duration-500 group-hover:bg-green-900 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-10 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all">
                  <Quote className="text-green-950" size={32} />
                </div>
                
                <p className="text-gray-600 font-medium leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  "{t.quote}"
                </p>
                
                <div className="border-t border-green-200/50 pt-6 group-hover:border-white/10 transition-colors">
                  <h4 className="text-xl font-black text-green-950 group-hover:text-yellow-500 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-sm font-bold text-green-700 uppercase tracking-tighter group-hover:text-white/50 transition-colors">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />
    </section>
  );
}
