'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kleine Verzögerung bevor Animationen starten (wie bei Apple)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-green-900 via-dark-green-800 to-italian-green-900 dark:from-dark-green-900 dark:via-dark-green-800 dark:to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Avatar - erscheint zuerst */}
          <div
            className={`mb-6 transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="inline-block p-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full shadow-xl shadow-gold-500/20">
              <div className="bg-dark-green-800 dark:bg-dark-green-900 rounded-full w-32 h-32 flex items-center justify-center border-2 border-gold-500/30">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Willkommen - erscheint nach 300ms */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {t('welcome')}
          </h1>

          {/* Name - erscheint nach 550ms */}
          <h2
            className={`text-3xl md:text-4xl font-semibold mb-4 text-gray-100 dark:text-gray-200 transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            Ich bin <span className="text-gold-400 dark:text-gold-500">Saliou Dieng</span>
          </h2>

          {/* Titel - erscheint nach 800ms */}
          <p
            className={`text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {t('title')}
          </p>

          {/* Beschreibung - erscheint nach 1050ms */}
          <p
            className={`text-lg text-gray-400 dark:text-gray-400 mb-12 max-w-3xl mx-auto transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '1050ms' }}
          >
            {t('description')}
          </p>

          {/* Buttons - erscheinen nach 1300ms */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-green-900 rounded-lg font-semibold hover:shadow-xl hover:shadow-gold-500/30 transform hover:scale-105 transition-all duration-300"
            >
              {t('contactButton')}
            </button>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-gold-500 text-gold-400 dark:border-gold-500 dark:text-gold-400 rounded-lg font-semibold hover:bg-gold-500/10 dark:hover:bg-gold-500/20 transition-all duration-300"
            >
              {t('projectsButton')}
            </a>
          </div>

          {/* Social Icons - erscheinen nach 1550ms */}
          <div
            className={`mt-16 flex justify-center gap-6 transition-all duration-[1500ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '1550ms' }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 dark:text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - erscheint nach 1800ms */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-[1500ms] ease-out ${
          isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1800ms' }}
      >
        <svg
          className="w-6 h-6 text-gold-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
