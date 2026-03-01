import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Language, translations } from "../translations";

interface QualityProps {
  lang: Language;
}

export default function Quality({ lang }: QualityProps) {
  const t = translations[lang].quality;

  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-slate-600">
            {t.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {t.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/factory/800/600" 
                alt="Quality Control Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 bg-slate-900 text-white rounded-3xl shadow-2xl">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.certTitle}</div>
                  <div className="flex gap-4 font-bold text-lg">
                    <span>ISO9001</span>
                    <span>FDA</span>
                    <span>LFGB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
