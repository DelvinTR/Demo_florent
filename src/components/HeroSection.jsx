import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = ({ content }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration - subtle moving gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-slate-700 blur-[120px] animate-float"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-slate-600 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center animate-fade-in-up">
        {/* Reduced title size from text-8xl to text-5xl/6xl */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          <span className="block text-slate-100">
            UNE EQUIPE D'ENTREPRENEURS
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">
            POUR REPRENDRE VOTRE PME
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-light text-slate-300 mb-10 max-w-3xl leading-relaxed">
          {content.subtitle}
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-base font-medium shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {content.target}
        </div>

        <a href="#vision" className="mt-12 group flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Découvrir notre projet
          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
