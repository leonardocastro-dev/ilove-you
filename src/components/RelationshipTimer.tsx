import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const RelationshipTimer = () => {
  const [timeString, setTimeString] = useState('');
  const startDate = new Date('2024-04-20');

  const calculateTime = () => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const remainingDays = diffDays % 30;

    let timeText = 'Vivendo essa história há ';
    if (diffMonths > 0) {
      timeText += `${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'}`;
      if (remainingDays > 0) {
        timeText += ` e ${remainingDays} ${remainingDays === 1 ? 'dia' : 'dias'}`;
      }
    } else {
      timeText += `${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
    }

    setTimeString(timeText);
  };

  useEffect(() => {
    calculateTime();
    const timer = setInterval(calculateTime, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          <Clock className="inline-block mr-2 h-8 w-8 text-pink-500" />
          O tempo que so existe pra gente ♡
        </h2>
        <p className="text-gray-600">
          Aqui, a gente criou nosso próprio mundo — seguro, leve e só nosso.
        </p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold text-pink-600 animate-fade-in">
          {timeString} ♡
        </p>
      </div>
    </>
  );
};

export default RelationshipTimer; 