import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  // Using imported images or falling back to avatars
  const avatarUrl = member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=334155&color=ffffff&size=256&bold=true`;

  return (
    <div className="h-full bg-white border border-slate-100 rounded-3xl group hover:border-slate-300 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-1">
      <div className="w-full aspect-square bg-slate-50 relative overflow-hidden shrink-0">
        {/* Removed grayscale, added gentle zoom animation */}
        <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-8 w-full text-center bg-white flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
        <p className="text-slate-500 font-medium mb-2 text-sm tracking-wide">{member.role}</p>

        <div className="flex flex-col gap-3 mt-auto pt-4">
          <a href={`tel:${member.phone.replace(/\./g, '')}`} className="flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors py-2 px-4 rounded-xl border border-emerald-200 hover:border-emerald-400 bg-emerald-50 hover:bg-emerald-100 font-medium shadow-sm">
            <Phone className="w-4 h-4" />
            <span>{member.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ content }) => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-slate-500 font-semibold tracking-widest text-sm uppercase mb-3 block">Les Repreneurs</span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{content.title}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
