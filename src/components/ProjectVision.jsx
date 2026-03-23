import React from 'react';

const ProjectVision = ({ content }) => {
  return (
    <section id="vision" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-slate-400 font-semibold tracking-widest text-sm uppercase">La Vision</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-3 leading-tight">
                {content.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-200 mt-6 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
              {content.paragraphs.map((para, idx) => (
                 <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Removed grayscale filter here to keep image in color */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Business Discussion" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-50 rounded-full -z-10 shadow-inner"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-100 rounded-full -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
