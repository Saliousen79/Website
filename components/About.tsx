'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative"
      style={{
        backgroundImage: 'url(/assets/gruen.png?v=1)',
        backgroundSize: '100% auto',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Über mich
          </h2>

          {/* Text Content */}
          <div className="flex flex-col gap-12">
            {/* Text */}
            <div className="space-y-6 bg-black/30 backdrop-blur-sm p-8 rounded-lg">
              <p className="text-lg text-gray-100 leading-relaxed">
                Hallo! Ich bin ein leidenschaftlicher Full-Stack Developer mit Fokus auf
                moderne Webtechnologien. Mit mehreren Jahren Erfahrung in der
                Softwareentwicklung habe ich zahlreiche Projekte erfolgreich umgesetzt.
              </p>

              <p className="text-lg text-gray-100 leading-relaxed">
                Meine Stärke liegt in der Entwicklung von skalierbaren, performanten und
                benutzerfreundlichen Anwendungen. Ich bin ständig auf der Suche nach neuen
                Herausforderungen und Möglichkeiten, meine Fähigkeiten zu erweitern.
              </p>

              <p className="text-lg text-gray-100 leading-relaxed">
                Neben dem Programmieren interessiere ich mich für UI/UX Design, Cloud
                Computing und agile Entwicklungsmethoden. Ich glaube an sauberen Code,
                kontinuierliches Lernen und die Kraft der Zusammenarbeit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
