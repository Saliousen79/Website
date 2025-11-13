'use client';

import { useEffect, useRef, useState } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
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

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions GmbH',
      period: '2022 - Heute',
      description:
        'Leitung der Entwicklung von Enterprise-Web-Anwendungen mit React und Node.js. Implementierung von CI/CD Pipelines und Mentoring von Junior-Entwicklern.',
      achievements: [
        'Reduzierung der Ladezeiten um 40%',
        'Migration zu Microservices-Architektur',
        'Team-Lead für 5 Entwickler',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations AG',
      period: '2020 - 2022',
      description:
        'Entwicklung von responsiven Webanwendungen und RESTful APIs. Enge Zusammenarbeit mit UX-Designern zur Optimierung der Benutzererfahrung.',
      achievements: [
        'Entwicklung von 15+ Web-Projekten',
        'Einführung von TypeScript im Team',
        'Code-Review und Best Practices',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Web Studio',
      period: '2018 - 2020',
      description:
        'Unterstützung bei der Entwicklung von Websites und Webanwendungen. Erlernen moderner Frameworks und agiler Entwicklungsmethoden.',
      achievements: [
        'Zertifizierung in React und Node.js',
        'Beitrag zu Open-Source-Projekten',
        'Scrum Master Zertifikat',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Informatik',
      school: 'Technische Universität',
      period: '2016 - 2018',
      description:
        'Schwerpunkt auf Softwareentwicklung, Algorithmen und Datenstrukturen. Masterarbeit über moderne Web-Architekturen.',
      achievements: [
        'Abschluss mit Auszeichnung',
        'Publikation in Fachzeitschrift',
        'Stipendiat des DAAD',
      ],
    },
    {
      degree: 'Bachelor of Science in Informatik',
      school: 'Universität',
      period: '2013 - 2016',
      description:
        'Grundlagen der Informatik, Programmierung, Datenbanken und Netzwerke. Bachelorarbeit über responsive Webdesign.',
      achievements: [
        'Notendurchschnitt 1,5',
        'Gewinner des Hackathons 2015',
        'Tutor für Programmierung',
      ],
    },
  ];

  const currentData = activeTab === 'experience' ? experience : education;

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="min-h-screen py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Lebenslauf
          </h2>
          <p className="text-center text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Mein beruflicher Werdegang und meine Ausbildung im Überblick.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-dark-green-800 dark:bg-dark-green-900 border border-gold-500/20 p-1">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-green-900 shadow-lg shadow-gold-500/30'
                    : 'text-gray-300 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400'
                }`}
              >
                Berufserfahrung
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-dark-green-900 shadow-lg shadow-gold-500/30'
                    : 'text-gray-300 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400'
                }`}
              >
                Ausbildung
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gold-500 to-gold-600 hidden md:block" />

            <div className="space-y-12">
              {currentData.map((item, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-[2000ms] ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full border-4 border-dark-green-900 dark:border-dark-green-900" />

                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className="bg-dark-green-800 dark:bg-dark-green-900 border border-gold-500/20 p-6 rounded-xl shadow-lg shadow-gold-500/10 hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gold-400 dark:text-gold-400">
                            {'title' in item ? item.title : item.degree}
                          </h3>
                          <span className="text-sm font-semibold text-gold-400 dark:text-gold-400 bg-gold-500/20 dark:bg-gold-500/20 border border-gold-500/30 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                            {item.period}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold text-gold-400 dark:text-gold-400 mb-3">
                          {'company' in item ? item.company : item.school}
                        </h4>

                        <p className="text-gray-300 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>

                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <svg
                                className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm text-gray-300 dark:text-gray-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for timeline */}
                    <div className="hidden md:block flex-1 md:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Lebenslauf herunterladen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
