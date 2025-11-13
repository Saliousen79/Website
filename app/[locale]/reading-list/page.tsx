'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string; // URL zum Bild
  amazonLink: string;
}

const ReadingList = () => {
  const t = useTranslations('about');
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());

  // Bücher hier definieren - später können Sie hier neue Bücher hinzufügen
  const books: Book[] = [
    {
      id: '1',
      title: 'Der Graf von Monte Christo',
      author: 'Alexandre Dumas',
      image: 'https://images-na.ssl-images-amazon.com/images/P/3866472927.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Graf-von-Monte-Christo/dp/3866472927',
    },
    {
      id: '2',
      title: 'Eine kurze Geschichte der Menschheit',
      author: ' Yuval Noah Harari',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%203570552691.01.L.jpg',
      amazonLink: 'https://www.amazon.de/kurze-Geschichte-Menschheit-Yuval-Harari/dp/3570552691?crid=1SSBWFJQH9T5L&dib=eyJ2IjoiMSJ9.er2NaAs2vK3o6AxLXF7ot-UZdfWCItRCh-IDwYY8O4SHvutkZcUat5TGmA4aUeoNmjr5aQ6nvVEnVFcZBxjXOTzk8-hYtoafgXesDlclTlKiQXJuJ7csQob9LxxSNTouEu0oacn4bI2Y6sCZpeCSaYfFLAPNFt6tA2WqO0lK0HSQw33M8oahPPhj1tcwbcUHp5qoyJN7n3YHv046ydFW3T9jrd7a_aXzY4tFG_OL1r0.XcUeXnUsYHy8fkBtLTZNCaFRbNtKxg-1YXFLA-KBIo4&dib_tag=se&keywords=eine+kurze+geschichte+der+menschheit&qid=1763052921&sprefix=eine+kur%2Caps%2C417&sr=8-1',
    },
    {
      id: '3',
      title: 'Design Patterns',
      author: 'Gang of Four',
      image: 'https://images-na.ssl-images-amazon.com/images/P/0201633612.01.L.jpg',
      amazonLink: 'https://amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
    },
    {
      id: '4',
      title: 'Design Patterns',
      author: 'Gang of Four',
      image: 'https://images-na.ssl-images-amazon.com/images/P/0201633612.01.L.jpg',
      amazonLink: 'https://amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Längere Verzögerung vor dem Start der Animation
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
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

  const handleImageLoad = (bookId: string) => {
    setImagesLoaded((prev) => new Set([...prev, bookId]));
  };

  return (
    <div className="min-h-screen bg-fixed py-20 scroll-pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ease-out mb-20 pt-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => router.push(pathname.replace('/reading-list', ''))}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Zurück
          </button>

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            {t('bookRecommendations')}
          </h1>
          <p className="text-xl text-gray-300">
            Eine Sammlung von Büchern, die mich inspirieren und weiterentwickeln.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-4">
          {books.map((book, index) => (
            <div key={book.id} className="flex flex-col items-center">
              {/* Book Cover - with green frame and smaller size */}
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-700 ease-out mb-6 cursor-pointer block ${
                  isVisible && imagesLoaded.has(book.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${1200 + index * 150}ms` : '0ms',
                }}
              >
                <div className="p-6 bg-dark-green-800 rounded-xl border-3 border-gold-500/40 shadow-lg shadow-gold-500/10 hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-300 hover:-translate-y-4 hover:scale-110 group flex items-center justify-center min-h-96">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="max-w-60 max-h-80 object-contain rounded-lg group-hover:brightness-110 transition-all duration-300"
                    onLoad={() => handleImageLoad(book.id)}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320"%3E%3Crect fill="%23374151" width="240" height="320"/%3E%3C/svg%3E';
                      handleImageLoad(book.id);
                    }}
                  />
                </div>
              </a>

              {/* Book Info - Text appears first */}
              <div
                className={`transition-all duration-700 ease-out text-center w-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms',
                }}
              >
                <h3 className="text-lg font-bold text-gold-400 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-300">{book.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {books.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">Noch keine Bücher hinzugefügt</p>
          </div>
        )}

        {/* Info */}
        <div className="mt-20 p-6 bg-gold-500/10 border border-gold-500/20 rounded-xl max-w-2xl mx-auto">
          <p className="text-gray-300 text-center text-sm">
            <strong>💡 Tipp:</strong> Um neue Bücher hinzuzufügen, bearbeiten Sie die <code className="text-gold-400 bg-dark-green-900/50 px-2 py-1 rounded">books</code> Array in der <code className="text-gold-400 bg-dark-green-900/50 px-2 py-1 rounded">reading-list/page.tsx</code> Datei. Nutzen Sie Amazon-Bild-URLs von Ihren Büchern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingList;
