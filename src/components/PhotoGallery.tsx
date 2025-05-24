
import React from 'react';
import { Camera } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PhotoGallery = () => {
  // Placeholder photos - you can replace these with your actual photos
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
    }
  ];

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

      <div className="max-w-2xl mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id}>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="text-center text-gray-500 italic">
        <p>✨ Substitua essas imagens pelas suas fotos especiais ✨</p>
      </div>
    </div>
  );
};

export default PhotoGallery;
