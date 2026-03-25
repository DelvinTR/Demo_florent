import React from 'react';
import { ArrowRight, Briefcase, RefreshCcw, Users, TrendingUp } from 'lucide-react';

const iconMap = {
  1: { icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />, bg: 'bg-blue-600', hoverBg: 'group-hover:bg-blue-700', barColor: 'from-blue-600 to-blue-400' },
  2: { icon: <RefreshCcw className="w-6 h-6 sm:w-7 sm:h-7 text-white" />, bg: 'bg-amber-600', hoverBg: 'group-hover:bg-amber-700', barColor: 'from-amber-600 to-amber-400' },
  3: { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />, bg: 'bg-emerald-600', hoverBg: 'group-hover:bg-emerald-700', barColor: 'from-emerald-600 to-emerald-400' },
  4: { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />, bg: 'bg-violet-600', hoverBg: 'group-hover:bg-violet-700', barColor: 'from-violet-600 to-violet-400' }
};

const InterventionCard = ({ mode, index }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl hover-lift shadow-sm border border-slate-100 flex flex-col h-full group relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${iconMap[mode.id].barColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>

      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${iconMap[mode.id].bg} ${iconMap[mode.id].hoverBg} flex items-center justify-center mb-4 sm:mb-6 transition-colors`}>
        {iconMap[mode.id].icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">{mode.title}</h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow font-light">{mode.description}</p>
    </div>
  );
};

const InterventionsSection = ({ content }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.modes.map((mode, index) => (
            <InterventionCard key={mode.id} mode={mode} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterventionsSection;
