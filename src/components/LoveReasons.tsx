import { ScrollText } from 'lucide-react';

const LoveReasons = () => {
  const reasons = [
    "Seu sorriso",
    "Seu jeito de olhar pra mim",
    "Sua risada me deixa feliz",
    "Seu jeito de me entender",
    "Seu carinho que aparece quando eu preciso",
    "Seu abraço nos dias difíceis pra mim",
    "Sua voz que me tranquiliza",
    "Seu jeito de cuidar de mim",
    "Seu jeito de me fazer rir sem motivo",
    "Seu jeito de acreditar em mim"
  ];

  return (
    <div className="py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          <ScrollText className="inline-block mr-2 h-8 w-8 text-pink-500" />
          10 Coisas Que Amo em Você
        </h2>
        <p className="text-gray-600">
          Cada detalhe que faz meu mundo melhor ♡ <br />
          Não listei tudo pois são muitas, porem todas especiais para mim.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-xl p-8">
        <ol className="list-decimal space-y-4 ml-6">
          {reasons.map((reason, index) => (
            <li 
              key={index}
              className="text-lg text-gray-700 leading-relaxed animate-fade-in hover:text-pink-600 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {reason}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LoveReasons; 