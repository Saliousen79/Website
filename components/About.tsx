'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('about');
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Längere Verzögerung vor dem Start der Animation
          setTimeout(() => {
            setIsVisible(true);
          }, 400);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'SQL / MongoDB', level: 80 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Über mich
          </h2>

          {/* Top Section: Image + Text */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Image on the left */}
            <div className="flex justify-center md:justify-start">
              <div className="p-4 bg-dark-green-800 dark:bg-dark-green-900 rounded-lg border-2 border-gold-500/30 overflow-hidden">
                <img
                  src="/assets/wueste2.png?v=1"
                  alt="Wüste"
                  className="w-full h-auto rounded max-w-sm object-cover"
                  style={{ backgroundImage: 'none' }}
                />
              </div>
            </div>

            {/* Text on the right */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                Hallo! Ich bin ein leidenschaftlicher Full-Stack Developer mit Fokus auf
                moderne Webtechnologien. Mit mehreren Jahren Erfahrung in der
                Softwareentwicklung habe ich zahlreiche Projekte erfolgreich umgesetzt.
              </p>

              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                Meine Stärke liegt in der Entwicklung von skalierbaren, performanten und
                benutzerfreundlichen Anwendungen. Ich bin ständig auf der Suche nach neuen
                Herausforderungen und Möglichkeiten, meine Fähigkeiten zu erweitern.
              </p>

              <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                Neben dem Programmieren interessiere ich mich für UI/UX Design, Cloud
                Computing und agile Entwicklungsmethoden. Ich glaube an sauberen Code,
                kontinuierliches Lernen und die Kraft der Zusammenarbeit.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind', 'Git'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gold-500/20 dark:bg-gold-500/20 text-gold-400 dark:text-gold-400 rounded-full text-sm font-semibold border border-gold-500/30"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section: Skills (Full Width) */}
          <div className="space-y-6 w-full">
              <h3 className="text-2xl font-semibold mb-6 text-gold-400 dark:text-gold-400">
                Skills & Expertise
              </h3>

              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gold-400 dark:text-gold-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-dark-green-800 dark:bg-dark-green-900 rounded-full h-3 overflow-hidden border border-gold-500/20">
                    <div
                      className={`h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full transition-all duration-[2000ms] ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-gold-500/20 dark:bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <div className="text-3xl font-bold text-gold-400 dark:text-gold-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-300 mt-1">
                    Jahre Erfahrung
                  </div>
                </div>
                <div className="text-center p-4 bg-gold-500/20 dark:bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <div className="text-3xl font-bold text-gold-400 dark:text-gold-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-300 mt-1">
                    Projekte
                  </div>
                </div>
                <div className="text-center p-4 bg-gold-500/20 dark:bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <div className="text-3xl font-bold text-gold-400 dark:text-gold-400">
                    100%
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-300 mt-1">
                    Zufriedenheit
                  </div>
                </div>
              </div>

              {/* Book Recommendations Button */}
              <div className="flex justify-center pt-12">
                <button
                  onClick={() => router.push(`${pathname}/reading-list`)}
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-green-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold-500/30 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
                  </svg>
                  {t('bookRecommendations')}
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
