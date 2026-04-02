import React from 'react';

const ProjectVision = ({ content }) => {
  return (
    <section id="vision" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Text */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mt-3 leading-tight">
                {content.title}
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-slate-400 to-slate-200 mt-4 sm:mt-6 rounded-full"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
              {content.paragraphs.map((para, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: para }}></p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Business Discussion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            {/* Decorative elements hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-slate-50 rounded-full -z-10 shadow-inner"></div>
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-slate-100 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
