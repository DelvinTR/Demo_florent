import React from 'react';
import { User, Settings, Banknote, Scale } from 'lucide-react';

const iconMap = {
  1: { icon: <User className="w-7 h-7 text-white relative z-10" />, gradient: 'from-sky-400 to-indigo-600' },
  2: { icon: <Settings className="w-7 h-7 text-white relative z-10" />, gradient: 'from-orange-400 to-red-600' },
  3: { icon: <Banknote className="w-7 h-7 text-white relative z-10" />, gradient: 'from-emerald-400 to-teal-600' },
  4: { icon: <Scale className="w-7 h-7 text-white relative z-10" />, gradient: 'from-rose-400 to-pink-600' }
};

const PillarCard = ({ pillar }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 group">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${(iconMap[pillar.id] || { gradient: 'from-slate-600 to-slate-800' }).gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-500 origin-center`}>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {(iconMap[pillar.id] || { icon: <User className="w-8 h-8 text-white relative z-10" /> }).icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-wide">{pillar.title}</h3>
      <p className="text-slate-300 font-light leading-relaxed text-sm">{pillar.description}</p>
    </div>
  );
};

const PillarsSection = ({ content }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative border-y border-slate-800 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">{content.title}</h2>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-slate-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.list.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
