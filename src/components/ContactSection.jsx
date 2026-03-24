import React from 'react';
import { Lock, MailOpen } from 'lucide-react';

const ContactSection = ({ content }) => {
  return (
    <section className="py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Sober circular decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-100 opacity-80 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-100 opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 text-amber-500 mb-8 shadow-sm border border-amber-100">
          <Lock className="w-8 h-8 relative z-10" />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-800">{content.title}</h2>
        <p className="text-xl font-light text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.text}
        </p>

        <p className="text-2xl font-medium text-slate-700 mb-14">
          {content.conclusion}
        </p>

      </div>

      <footer className="mt-24 pt-8 text-center text-slate-400 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
