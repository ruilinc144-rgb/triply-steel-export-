import { motion } from "motion/react";
import { Language, translations } from "../translations";

interface SpecsProps {
  lang: Language;
}

export default function Specs({ lang }: SpecsProps) {
  const t = translations[lang].specs;

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              {t.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t.desc}
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wider">{t.composition}</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {t.layers.map((layer, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    {layer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-bottom border-slate-200">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.table.headerParam}</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.table.headerDetails}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {t.table.rows.map((spec, idx) => (
                    <motion.tr 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-5 font-medium text-slate-900 text-sm w-1/3">{spec.label}</td>
                      <td className="px-6 py-5 text-slate-600 text-sm font-mono">{spec.value}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
