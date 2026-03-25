import React from 'react';
import { Lock } from 'lucide-react';

const ContactSection = ({ content }) => {
  return (
    <section className="py-20 sm:py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Circular decorations — only visible on larger screens */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-100 opacity-80 pointer-events-none"></div>
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-100 opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
        <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-50 text-amber-500 mb-6 sm:mb-8 shadow-sm border border-amber-100">
          <Lock className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-800">{content.title}</h2>
        <p className="text-base sm:text-xl font-light text-slate-500 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.text}
        </p>

        <p className="text-lg sm:text-2xl font-medium text-slate-700 mb-10 sm:mb-14">
          {content.conclusion}
        </p>
      </div>

      <footer className="mt-16 sm:mt-24 pt-6 sm:pt-8 text-center text-slate-400 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
