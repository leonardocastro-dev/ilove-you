
import React, { useState, useRef, useEffect } from 'react';
import { Camera } from 'lucide-react';

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
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      alt: "Nossa foto 4"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      alt: "Nossa foto 5"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragDistance(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const distance = clientX - startX;
    setDragDistance(distance);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (dragDistance > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (dragDistance < -threshold && currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setDragDistance(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Add global mouse move and up listeners
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX);
      };
      const handleGlobalMouseUp = () => {
        handleEnd();
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, startX]);

  const getImageStyle = (index: number) => {
    const position = index - currentIndex;
    const offset = dragDistance * 0.002; // Reduce the drag effect
    
    if (position === 0) {
      // Center image
      return {
        transform: `translateX(${offset * 100}px) scale(1)`,
        opacity: 1,
        zIndex: 10,
      };
    } else if (position === -1) {
      // Left image
      return {
        transform: `translateX(${-30 + offset * 100}px) scale(0.8)`,
        opacity: 0.6,
        zIndex: 5,
      };
    } else if (position === 1) {
      // Right image
      return {
        transform: `translateX(${30 + offset * 100}px) scale(0.8)`,
        opacity: 0.6,
        zIndex: 5,
      };
    } else {
      // Hidden images
      return {
        transform: `translateX(${position > 0 ? 100 : -100}px) scale(0.8)`,
        opacity: 0,
        zIndex: 1,
      };
    }
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

      <div className="max-w-4xl mx-auto px-4">
        <div 
          ref={containerRef}
          className="relative h-96 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {photos.map((photo, index) => {
            const isVisible = Math.abs(index - currentIndex) <= 1;
            if (!isVisible) return null;

            return (
              <div
                key={photo.id}
                className="absolute top-1/2 left-1/2 w-80 h-80 transition-all duration-300 ease-out"
                style={{
                  ...getImageStyle(index),
                  marginLeft: '-160px',
                  marginTop: '-160px',
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
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
              </div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center text-gray-500 italic">
        <p>✨ Substitua essas imagens pelas suas fotos especiais ✨</p>
        <p className="text-sm mt-2">🖱️ Arraste a imagem do meio para navegar</p>
      </div>
    </div>
  );
};

export default PhotoGallery;
