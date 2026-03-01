import { motion } from "motion/react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Language, translations } from "../translations";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section className="bg-white py-24" id="contact">
      <div className="section-container">
        <div className="glass-card overflow-hidden border-none shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 bg-slate-900 text-white">
              <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
              <p className="text-slate-400 mb-12 text-lg">
                {t.subtitle}
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{t.emailLabel}</div>
                    <div className="text-xl font-medium">sales@triply-steel.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{t.whatsappLabel}</div>
                    <div className="text-xl font-medium">+86 138 0000 0000</div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-500">
                  {t.responseTime}
                </p>
              </div>
            </div>

            <div className="p-12 lg:p-16 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.form.name}</label>
                    <input 
                      type="text" 
                      placeholder={t.form.placeholders.name}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t.form.company}</label>
                    <input 
                      type="text" 
                      placeholder={t.form.placeholders.company}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t.form.email}</label>
                  <input 
                    type="email" 
                    placeholder={t.form.placeholders.email}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t.form.whatsapp}</label>
                  <input 
                    type="tel" 
                    placeholder={t.form.placeholders.whatsapp}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">{t.form.details}</label>
                  <textarea 
                    rows={4}
                    placeholder={t.form.placeholders.details}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all group">
                  {t.form.submit}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
