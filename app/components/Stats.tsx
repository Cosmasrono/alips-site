const stats = [
  { value: "500+",    label: "Quality Products" },
  { value: "15k+", label: "Happy Farmers" },
  { value: "15+",    label: "Years Excellence" },
  { value: "24/7",      label: "Expert Support" },
];

export default function Stats() {
  return (
    <div className="relative z-20 -mt-16 max-w-[1200px] mx-auto px-8">
      <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border border-gray-100">
        {stats.map((s, i) => (
          <div key={s.label} className={`text-center ${i !== stats.length - 1 ? "lg:border-r border-gray-100" : ""}`}>
            <p className="text-4xl md:text-5xl font-black text-green-700 mb-2 leading-none">{s.value}</p>
            <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
