import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  delay: number;
  size: number;
  color: string;
}

const FallingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartColors = ['❤️', '💖', '💕', '💗', '💝', '💜', '🧡', '💛'];
    
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 10 + 15,
          color: heartColors[Math.floor(Math.random() * heartColors.length)]
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            top: '-50px',
            animation: `fall ${3 + heart.delay}s linear infinite`
          }}
        >
          {heart.color}
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;
