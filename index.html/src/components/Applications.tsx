import { motion } from "motion/react";
import { Language, translations } from "../translations";

interface ApplicationsProps {
  lang: Language;
}

const images = [
  "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400", // Frying pan
  "https://images.unsplash.com/photo-1590794056226-79ee3a8440ee?auto=format&fit=crop&q=80&w=400", // Stock pot
  "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=400", // Wok
  "https://images.unsplash.com/photo-1584269600519-112d071b35e6?auto=format&fit=crop&q=80&w=400", // Sauce pan
  "https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?auto=format&fit=crop&q=80&w=400", // Pressure cooker
];

export default function Applications({ lang }: ApplicationsProps) {
  const t = translations[lang].applications;

  return (
    <section className="bg-slate-50 py-20 border-y border-slate-200">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.title}</h2>
          <p className="text-slate-500 text-sm">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-default"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={images[idx]} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium">{item.desc}</p>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 text-center group-hover:text-emerald-600 transition-colors">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
