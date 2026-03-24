import React from 'react';
import { User, Settings, Banknote, Scale } from 'lucide-react';

const iconMap = {
  1: <User className="w-8 h-8 text-white relative z-10" />,
  2: <Settings className="w-8 h-8 text-white relative z-10" />,
  3: <Banknote className="w-8 h-8 text-white relative z-10" />,
  4: <Scale className="w-8 h-8 text-white relative z-10" />
};

const PillarCard = ({ pillar }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 hover:-translate-y-2 group">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform duration-500 origin-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {iconMap[pillar.id] || <User className="w-8 h-8 text-white relative z-10" />}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-wide">{pillar.title}</h3>
      <p className="text-slate-300 font-light leading-relaxed text-sm">{pillar.description}</p>
    </div>
  );
};

const PillarsSection = ({ content }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative border-y border-slate-800 overflow-hidden">
      {/* Subtle modern gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-slate-400 font-semibold tracking-widest text-sm uppercase block mb-3">Nos piliers</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">{content.title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-slate-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.list.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
