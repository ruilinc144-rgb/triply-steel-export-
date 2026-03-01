import { motion } from "motion/react";
import { ArrowRight, FileCheck } from "lucide-react";
import { Language, translations } from "../translations";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f8f9fa]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t.badge}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
            {t.title1} <br />
            <span className="text-slate-500">{t.title2}</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            {t.subtitle}
          </p>

          <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
            <div>
              <div className="text-2xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-slate-500">{t.stats.exp}</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-slate-500">{t.stats.clients}</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <div className="text-2xl font-bold text-slate-900">ISO</div>
              <div className="text-sm text-slate-500">{t.stats.cert}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
              alt="Tri-ply Stainless Steel Circles with Honeycomb Pattern" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">{t.mtc.title}</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.mtc.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
