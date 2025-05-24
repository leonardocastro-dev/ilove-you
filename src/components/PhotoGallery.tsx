import { Camera } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectCards, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'usehooks-ts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

const PhotoGallery = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const photos = [
    '/carrousel/1.jpg',
    '/carrousel/2.jpg',
    '/carrousel/3.jpg',
    '/carrousel/4.jpg',
    '/carrousel/5.jpg',
    '/carrousel/6.jpg',
    '/carrousel/7.jpg',
    '/carrousel/8.jpg',
    '/carrousel/9.jpg',
    '/carrousel/10.jpg'
    
  ];

  const swiperConfig = isDesktop ? {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
  } : {
    effect: "cards",
    grabCursor: true,
    modules: [EffectCards]
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          <Camera className="inline-block mr-2 h-8 w-8 text-pink-500" />
          Nossas Memórias ♡
        </h2>
        <p className="text-gray-600">
          Onde você lembra de quando nos conhecemos, e até onde chegamos.
        </p>
      </div>

      <div className="mx-auto px-4">
        <Swiper
          {...swiperConfig}
          className={`w-full ${!isDesktop ? 'max-w-sm mx-auto' : ''}`}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo}>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={photo}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PhotoGallery;
