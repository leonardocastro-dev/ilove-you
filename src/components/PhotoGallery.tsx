import { Camera } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectCards, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'usehooks-ts';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

const PhotoGallery = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Nossa foto 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Nossa foto 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      alt: "Nossa foto 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Nossa foto 1"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Nossa foto 2"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      alt: "Nossa foto 3"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Nossa foto 1"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Nossa foto 2"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      alt: "Nossa foto 3"
    }
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
    modules: [EffectCards],
    className: "mySwiper"
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          <Camera className="inline-block mr-2 h-8 w-8 text-pink-500" />
          Nossas Memórias ♡
        </h2>
        <p className="text-gray-600">
          Cada foto guarda um momento especial nosso
        </p>
      </div>

      <div className="mx-auto px-4">
        <Swiper
          {...swiperConfig}
          className={`w-full ${!isDesktop ? 'max-w-sm mx-auto' : ''}`}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{photo.alt}</p>
                    <p className="text-sm">💕 Com muito amor</p>
                  </div>
                </div>
                
                {/* Heart overlay */}
                <div className="absolute top-4 right-4">
                  <div className="text-red-500 text-2xl animate-pulse">♡</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center text-gray-500 italic">
        <p>✨ Substitua essas imagens pelas suas fotos especiais ✨</p>
      </div>
    </div>
  );
};

export default PhotoGallery;
