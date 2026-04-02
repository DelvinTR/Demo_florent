import React from 'react';
import { Phone } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  const avatarUrl = member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=334155&color=ffffff&size=256&bold=true`;

  return (
    <div className="h-full bg-white border border-slate-100 rounded-3xl group hover:border-slate-300 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Portrait avatar */}
      <div className="w-full aspect-[4/5] sm:aspect-[3/4] max-h-72 sm:max-h-none bg-slate-50 relative overflow-hidden shrink-0">
        <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5 sm:p-8 w-full text-center bg-white flex flex-col flex-grow relative">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
        <p className="text-slate-500 font-medium mb-3 text-xs sm:text-sm tracking-wide uppercase">{member.role}</p>

        <div className="flex flex-col gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4">
          <a
            href={`tel:${member.phone.replace(/\./g, '')}`}
            className="flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors py-2 px-3 sm:px-4 rounded-xl border border-emerald-200 hover:border-emerald-400 bg-emerald-50 hover:bg-emerald-100 font-medium shadow-sm text-sm"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{member.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ content }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{content.title}</h2>
        </div>

        {/* 2-col grid on mobile, 4-col on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {content.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
