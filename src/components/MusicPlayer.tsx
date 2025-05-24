
import { useRef, useEffect, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer = ({ isPlaying }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setShowPlayer(true);
      // Note: Due to browser autoplay policies, music might not play automatically
      // The user will need to interact with the page first
      if (audioRef.current) {
        audioRef.current.play().catch(console.log);
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!showPlayer) return null;

  return (
    <div className="fixed top-4 right-4 z-30">
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <Music className="h-5 w-5 text-pink-500 animate-pulse" />
          <span className="text-sm text-gray-700 hidden sm:block">♡ Música Romântica</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="rounded-full h-8 w-8 p-0"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-gray-500" />
            ) : (
              <Volume2 className="h-4 w-4 text-pink-500" />
            )}
          </Button>
        </div>
      </div>

      {/* Audio element - you can replace with your romantic song */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        {/* Add your music file here */}
        {/* <source src="/path-to-your-romantic-song.mp3" type="audio/mpeg" /> */}
        <p>Seu navegador não suporta áudio HTML5.</p>
      </audio>

      <div className="mt-2 text-xs text-center text-gray-500">
        <p>🎵 Adicione sua música favorita</p>
      </div>
    </div>
  );
};

export default MusicPlayer;
