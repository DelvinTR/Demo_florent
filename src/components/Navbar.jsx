import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        {/* Left side */}
        {isHome ? (
          <span className="text-white font-bold text-lg tracking-wide"></span>
        ) : (
          <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Retour</span>
          </Link>
        )}

        {/* Desktop CTA */}
        <Link
          to="/en-savoir-plus"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          En savoir plus
        </Link>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-slate-300 hover:text-white p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-4 py-4">
          <Link
            to="/en-savoir-plus"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-5 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm shadow-lg"
          >
            En savoir plus
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
