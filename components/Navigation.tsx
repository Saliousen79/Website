'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const t = useTranslations('nav');
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'projects', label: t('projects') },
    { id: 'resume', label: t('resume') },
    { id: 'contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-green-900/90 dark:bg-dark-green-900/95 backdrop-blur-md shadow-lg shadow-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-gold-400 dark:text-gold-400 bg-gold-500/20 dark:bg-gold-500/20'
                      : 'text-gray-300 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 hover:bg-gold-500/10 dark:hover:bg-gold-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-dark-green-900 dark:bg-dark-green-900 shadow-lg shadow-gold-500/10">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activeSection === item.id
                  ? 'text-gold-400 dark:text-gold-400 bg-gold-500/20 dark:bg-gold-500/20'
                  : 'text-gray-300 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 hover:bg-gold-500/10 dark:hover:bg-gold-500/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
