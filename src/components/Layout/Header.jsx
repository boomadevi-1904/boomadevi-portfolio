import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Skills', href: 'skills' },
  { name: 'Education', href: 'education' },
  { name: 'Projects', href: 'projects' },
  { name: 'Achievements', href: 'achievements' },
  { name: 'Contact', href: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  /* LOCK SCROLL WHEN MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  /* SCROLL SPY */
useEffect(() => {
  // ✅ On page reload, always go to Home
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname);
  }

  const homeSection = document.getElementById('home');
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: 'auto' });
  }
}, []);

const handleNavClick = (id) => {
  setIsOpen(false);

  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: 'smooth' });

  if (id === 'home') {
    window.history.replaceState(null, '', window.location.pathname);
  } else {
    window.history.replaceState(null, '', `#${id}`);
  }
};



  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="text-lg font-semibold text-white"
          >
            BOOMADEVI S<span className="text-neon-green">.</span>
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm ${
                  active === link.href
                    ? 'text-neon-green'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">

          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={26} />
          </button>

          {/* LINKS */}
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xl font-medium ${
                  active === link.href
                    ? 'text-neon-green'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
