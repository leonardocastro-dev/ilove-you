import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FallingHearts from '@/components/FallingHearts';
import PhotoGallery from '@/components/PhotoGallery';
import RelationshipTimer from '../components/RelationshipTimer';
import LoveReasons from '../components/LoveReasons';

const Index = () => {
  const [showLove, setShowLove] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleLoveClick = () => {
    setShowLove(true);
    setMusicStarted(true);
  };

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-pink-300 text-6xl">💕</div>
        <div className="absolute top-32 right-20 text-purple-300 text-4xl">💖</div>
        <div className="absolute bottom-20 left-20 text-indigo-300 text-5xl">💜</div>
        <div className="absolute bottom-40 right-10 text-pink-300 text-3xl">💝</div>
      </div>

      {/* Falling Hearts Animation */}
      {showLove && <FallingHearts />}

      <div className="container mx-auto relative z-10">
        {!showLove ? (
          // Initial State
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Para Você ♡
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-md">
                Feito pra voce sempre lembrar como eu te amo...
              </p>
              
              <Button
                onClick={handleLoveClick}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="mr-2 h-6 w-6" />
                Clique Aqui ♡
              </Button>
            </div>
          </div>
        ) : (
          // Love Declaration State
          <div className="space-y-12 animate-fade-in">
            {/* Music Player */}
            <div className='flex justify-center'>
              <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/playlist/0YLYOSDYstfQ8xyRYtucUS?utm_source=generator&autoplay=1"
                width="100%" 
                height="152" 
                className='max-w-xl !mt-12'
                frameBorder="0"
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
            
            {/* Love Message */}
            <div className="text-center">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-pulse">
                EU TE AMO! ♡
              </h1>
              <div className="space-y-4 text-xl text-gray-700 max-w-2xl mx-auto">
                <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  Você é a pessoa mais especial da minha vida
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '1s' }}>
                  Cada momento ao seu lado é um presente
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  Eu so tenho que te agradecer por tudo que você é e faz por mim.
                </p>
                <p className="animate-fade-in" style={{ animationDelay: '2s' }}>
                  Te amo hoje, amanhã e para sempre meu amor ♡
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            <PhotoGallery />
            
            {/* Relationship Timer */}
            <RelationshipTimer />

            {/* Love Reasons */}
            <LoveReasons />

            {/* Back Button */}
            <div className="text-center">
              <Button
                onClick={() => setShowLove(false)}
                variant="outline"
                className="border-pink-300 mb-10 text-pink-600 hover:bg-pink-50"
              >
                <Heart className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
