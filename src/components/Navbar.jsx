import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {isHome ? (
          <span className="text-white font-bold text-lg tracking-wide">Delvin TR</span>
        ) : (
          <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Retour</span>
          </Link>
        )}
        <Link
          to="/en-savoir-plus"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          En savoir plus
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
