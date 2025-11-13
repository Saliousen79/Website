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
      title: 'Sapiens: A Brief History of Humankind',
      author: ' Yuval Noah Harari',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%20%20%20%20%201784873640.01.L.jpg',
      amazonLink: 'https://www.amazon.de/kurze-Geschichte-Menschheit-Yuval-Harari/dp/3570552691?crid=1SSBWFJQH9T5L&dib=eyJ2IjoiMSJ9.er2NaAs2vK3o6AxLXF7ot-UZdfWCItRCh-IDwYY8O4SHvutkZcUat5TGmA4aUeoNmjr5aQ6nvVEnVFcZBxjXOTzk8-hYtoafgXesDlclTlKiQXJuJ7csQob9LxxSNTouEu0oacn4bI2Y6sCZpeCSaYfFLAPNFt6tA2WqO0lK0HSQw33M8oahPPhj1tcwbcUHp5qoyJN7n3YHv046ydFW3T9jrd7a_aXzY4tFG_OL1r0.XcUeXnUsYHy8fkBtLTZNCaFRbNtKxg-1YXFLA-KBIo4&dib_tag=se&keywords=eine+kurze+geschichte+der+menschheit&qid=1763052921&sprefix=eine+kur%2Caps%2C417&sr=8-1',
    },
    {
      id: '3',
      title: 'Flowers For Algernon',
      author: ' Daniel Keyes',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%201474605737.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Flowers-Algernon-Literary-Classic-Masterworks/dp/1474605737?crid=2GIZHXZ3UKEVX&dib=eyJ2IjoiMSJ9.RXnRmjKeXU0LgbSN7oj36SHAFlInOYiTd9q42rvCZHVPCG1RHw6bq_i7TSWZS6pKzrVfT494XVYyGqYv3uNNgdHiB_SvTK_vbkU-iTDXdBtF79OTXkDncbuVdnFNHv9oCoVItRadLRiD2-wxNnax9LRpNnOV2injbh_OWeQEN-0Px3HuiqXsv6_jwMmMc9KY1uO7jNSaihRQn1-khn-NbXg9H0p0pPd_gjyT1iiZvAM.THvvjQ_iVeyh_vC6a-L3p5vvC_umuAAqPLnpkpK4z_A&dib_tag=se&keywords=flowers+for+algernon&qid=1763057016&s=books&sprefix=flowers%2Cstripbooks%2C83&sr=1-1',
    },
    {
      id: '4',
      title: 'Die Kuh, die weinte',
      author: ' Ajahn Brahm',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%203778781839.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Die-Kuh-die-weinte-Buddhistische/dp/3778781839?crid=3U3HY2F7JU1HZ&dib=eyJ2IjoiMSJ9.HbtJCe2XjNRdaO-2AraPSc28H5dz0cAwvlVfQ0SdAVCkJ38dK02nVou7kluTaEg9GjEB6X5Fa1VvFTtAO2A4DUlGyTRb5hFt7hjcN6tKWa_k0djNu4vWbepCeRi5GyQx8IbJBHJxnDzHMfP0WICYJTXAA3pWpOJ_sK463DS_Cp9PWFlFCQCgTrRZJZJkUBYi6R0Iy5kczinjIf29PcrGZKKHaOelM1gVmFLFHjIRbcA.1_LVslEv9Z8ol-R8kltF2F-BodPNHsrgug7v97lFvgY&dib_tag=se&keywords=die+kuh+die+weinte&qid=1763057116&sprefix=Die+Kuh+die%2Caps%2C93&sr=8-1',
    },
    {
      id: '5',
      title: 'No Longer Human',
      author: '  Osamu Dazai',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%20%200811204812.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Longer-Human-New-Directions-Book/dp/0811204812?pd_rd_w=zu6DB&content-id=amzn1.sym.e43449ad-4bb7-4aee-a0fd-e15d81a9f8db%3Aamzn1.symc.30e3dbb4-8dd8-4bad-b7a1-a45bcdbc49b8&pf_rd_p=e43449ad-4bb7-4aee-a0fd-e15d81a9f8db&pf_rd_r=RVGWSF3EB3Z543S4RNQR&pd_rd_wg=Q0Hrn&pd_rd_r=a3a12805-1114-44bb-b87b-1180274208e6&pd_rd_i=0811204812',
    },
    {
      id: '6',
      title: 'The Three-Body Problem ',
      author: '   Cixin Liu',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%20%20%203453322452.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Three-Body-Problem-Boxset-Cixin-Liu/dp/1035905876?crid=27VY7VFH44IHC&dib=eyJ2IjoiMSJ9.9Ava5dNfWsdHKjxsN9WnJIFL-90pldHPmIKXCjLcmYm_VLc8zTI15fW2uAEiQ0WMGFrptObRWJnpfT71aP6NJS25e0P5lq6exE_3Y9_pwzYzXQibo768Y_fcYIdKC0OdEsF_V3NRtEF67zB7_lXqJync5ZLFWvw6fk7o-fWzgUvRILjixK58xZjeBdT98T62rEeae5duWRF8ryzlegEIhRr_mMPH9KZQXgLS9O6mC_4.ia5v6wPCYoyQoQIhOXzZGq-83WqAJDA523ZF8TlAgSc&dib_tag=se&keywords=three+body+problem&qid=1763057412&sprefix=three+body%2Caps%2C92&sr=8-1',
    },
    {
      id: '7',
      title: 'Don Quijote ',
      author: '    Miguel de Cervantes Saavedra',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%20%20%20%203866475489.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Don-Quijote-Miguel-Cervantes-Saavedra/dp/3866475489?crid=3HRLNO93T7XY4&dib=eyJ2IjoiMSJ9.i-fGZlxfg02F_6WIUoUr2lwoWZUll8kwTla04jX5UYDglA9-dipS59Sh5W1-jMREKm4r9SgCPwRJLhd-W97sz_0OEPYkPoojJ3pbTm32Q2wUOXj-Lu8F0GT9RZJgRfWFxiKoa-VhiSroUVXyj7S8cXibAf1w9fYT-r3-w1Wtn9iV_6CDOntejGFk7EaO28iN4nNv0I6rrQgUwJdTsIm8F18a0QtQZGi8YgalOjLaLl4.BfbS67FTwQ0grtKdg7DY9NIP56a1sjfLxxVHAYqHqqQ&dib_tag=se&keywords=don+quijote&qid=1763057482&sprefix=don+q%2Caps%2C96&sr=8-1',
    },
    {
      id: '8',
      title: 'Selbstbetrachtungen ',
      author: '     Marc Aurel',
      image: 'https://images-na.ssl-images-amazon.com/images/P/%20%20%20%20%20%20%203730606727.01.L.jpg',
      amazonLink: 'https://www.amazon.de/Selbstbetrachtungen-Cabra-Leder-Marc-Aurel/dp/3730606727?crid=37JVVTWO3511&dib=eyJ2IjoiMSJ9.Qj-Mr6O8V4Aa4ZxVPDn3ASmwiFNzQT3EzZCB12mywlscBFreUNlcH6EezYEGyUYVOB7HtvG-zDoJSuOsUClsQJayCpSYsiZW7_-l_9muqr8t_ooyrmr23FrFbvaDufnOi989ABZvBByKihpSZRFgXY1k9kNtvTWJANVXX-jS7bUTHtX78BwsMfK3_JZQE0P3h40T3YHO4ShTWWe1yz_Hayvj6XQM7TyCn4CBcITpy5I.VSxsSFUhngrigBxwSrVUO-j47p7Le7UeBikgTc1Zw7o&dib_tag=se&keywords=marc+aurel+selbstbetrachtungen&qid=1763057637&sprefix=marc+aur%2Caps%2C112&sr=8-1',
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
                <div className="p-6 bg-dark-green-800 rounded-xl border-3 border-gold-500/40 shadow-lg shadow-gold-500/10 hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-300 hover:-translate-y-4 hover:scale-110 group flex items-center justify-center w-80 h-96">
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
