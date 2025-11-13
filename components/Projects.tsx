'use client';

import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Eine vollständige E-Commerce-Lösung mit Produktverwaltung, Warenkorb, Zahlungsintegration und Admin-Dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '🛒',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Echtzeit-Dashboard zur Überwachung und Analyse von Social Media Metriken mit interaktiven Charts und Statistiken.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📊',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Kollaborative Aufgabenverwaltung mit Drag & Drop, Team-Features, Benachrichtigungen und Zeiterfassung.',
      technologies: ['Vue.js', 'Express', 'MySQL', 'Redis'],
      image: '✅',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Content Generator',
      description:
        'KI-gestützte Content-Generierung für Blogs und Social Media mit verschiedenen Schreibstilen und Formaten.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
      image: '🤖',
      link: '#',
      github: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interaktives Wetter-Dashboard mit Vorhersagen, interaktiven Karten und Benachrichtigungen bei Wetteränderungen.',
      technologies: ['Next.js', 'Tailwind', 'OpenWeather API'],
      image: '🌤️',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio CMS',
      description:
        'Headless CMS speziell für Portfolio-Websites mit Drag & Drop Editor und Multi-Tenancy Support.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      image: '📝',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section
      id="projects"
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
            Meine Projekte
          </h2>
          <p className="text-center text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Eine Auswahl meiner jüngsten Arbeiten und Projekte, die ich mit Leidenschaft
            entwickelt habe.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-dark-green-800 dark:bg-dark-green-900 border border-gold-500/20 rounded-xl shadow-lg shadow-gold-500/10 overflow-hidden hover:shadow-2xl hover:shadow-gold-500/20 transform hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
                }}
              >
                <div className="h-48 bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <span className="text-8xl">{project.image}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold-400 dark:text-gold-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold-500/20 dark:bg-gold-500/20 text-gold-400 dark:text-gold-400 border border-gold-500/30 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-green-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-4 py-2 border-2 border-gold-500 text-gold-400 dark:border-gold-500 dark:text-gold-400 rounded-lg font-semibold hover:bg-gold-500/10 dark:hover:bg-gold-500/20 transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
