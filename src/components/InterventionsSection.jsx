import React from 'react';
import { ArrowRight, Briefcase, RefreshCcw, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  1: <Briefcase className="w-7 h-7 text-slate-600" />,
  2: <RefreshCcw className="w-7 h-7 text-slate-600" />,
  3: <Users className="w-7 h-7 text-slate-600" />,
  4: <TrendingUp className="w-7 h-7 text-slate-600" />
};

const InterventionCard = ({ mode, index }) => {
  return (
    <div className="bg-white p-8 rounded-2xl hover-lift shadow-sm border border-slate-100 flex flex-col h-full group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 to-slate-100 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

      <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
        {React.cloneElement(iconMap[mode.id], { className: "w-7 h-7 text-slate-600 group-hover:text-slate-800 transition-colors" })}
      </div>


      <h3 className="text-xl font-bold text-slate-800 mb-4">{mode.title}</h3>
      <p className="text-slate-600 leading-relaxed flex-grow font-light">{mode.description}</p>


    </div>
  );
};

const InterventionsSection = ({ content }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-slate-400 font-semibold tracking-widest text-sm uppercase block mb-3">Nos Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.modes.map((mode, index) => (
            <InterventionCard key={mode.id} mode={mode} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterventionsSection;
