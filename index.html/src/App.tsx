/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Hero from "./components/Hero";
import Applications from "./components/Applications";
import Specs from "./components/Specs";
import Features from "./components/Features";
import Quality from "./components/Quality";
import Contact from "./components/Contact";
import { Language, translations } from "./translations";
import { Globe } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <main className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">METAL<span className="text-slate-400">CORE</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <span className="text-slate-400 cursor-default">{t.nav.products}</span>
            <span className="text-slate-400 cursor-default">{t.nav.specs}</span>
            <span className="text-slate-400 cursor-default">{t.nav.quality}</span>
            
            <div className="h-6 w-px bg-slate-200"></div>
            
            {/* Language Switcher - Kept as functional button but styled to be the only interactive part */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all text-slate-900"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? '中文' : 'EN'}</span>
            </button>

            <span className="px-5 py-2.5 bg-slate-100 text-slate-400 rounded-lg cursor-default">
              {t.nav.contact}
            </span>
          </div>

          {/* Mobile Language Switcher Only */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="p-2 rounded-lg hover:bg-slate-100 transition-all text-slate-900"
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Hero lang={lang} />
        <Applications lang={lang} />
        <Specs lang={lang} />
        <Features lang={lang} />
        <Quality lang={lang} />
        <Contact lang={lang} />
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">METALCORE</span>
          </div>
          <p className="text-sm text-slate-500">
            {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
