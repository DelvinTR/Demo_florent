import React from 'react';

const EnSavoirPlusPage = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 border-b pb-4 leading-tight">
          En savoir plus sur notre projet
        </h1>

        <div className="prose prose-slate sm:prose-lg lg:prose-xl">
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-10 sm:mt-12 mb-4 sm:mb-6">Notre vision à long terme</h2>
          <p className="text-slate-600 mb-6 text-base sm:text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-slate-600 mb-8 text-base sm:text-lg">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>

          <p className="text-slate-600 text-base sm:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnSavoirPlusPage;
