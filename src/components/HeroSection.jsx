import React from 'react';

const HeroSection = ({ content }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-slate-700 blur-[120px] animate-float"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-slate-600 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center animate-fade-in-up pt-20 sm:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight">
          <span className="block text-slate-100">
            UNE EQUIPE D'ENTREPRENEURS
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">
            POUR REPRENDRE VOTRE PME
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-slate-300 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed px-2">
          {content.subtitle}
        </p>

        <div className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm sm:text-base font-medium shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span className="text-center">{content.target}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
