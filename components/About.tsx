'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Über mich
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hallo! Ich bin ein leidenschaftlicher Full-Stack Developer mit Fokus auf
                moderne Webtechnologien. Mit mehreren Jahren Erfahrung in der
                Softwareentwicklung habe ich zahlreiche Projekte erfolgreich umgesetzt.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Meine Stärke liegt in der Entwicklung von skalierbaren, performanten und
                benutzerfreundlichen Anwendungen. Ich bin ständig auf der Suche nach neuen
                Herausforderungen und Möglichkeiten, meine Fähigkeiten zu erweitern.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Neben dem Programmieren interessiere ich mich für UI/UX Design, Cloud
                Computing und agile Entwicklungsmethoden. Ich glaube an sauberen Code,
                kontinuierliches Lernen und die Kraft der Zusammenarbeit.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind', 'Git'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>

              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Jahre Erfahrung
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Projekte
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Zufriedenheit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
