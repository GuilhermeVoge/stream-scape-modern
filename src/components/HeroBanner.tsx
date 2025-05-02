
import React from 'react';
import { Play, Info, Download, FileCode, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Image background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920" 
          alt="O Senhor dos Anéis" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-streaming-dark via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-3xl">
        <div className="animate-slide-up">
          <h2 className="text-sm md:text-base text-streaming-text/80 mb-1">Imagens da Saga</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            O Senhor dos Anéis:<br />
            <span className="text-3xl md:text-4xl lg:text-5xl">A Sociedade do Anel</span>
          </h1>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-streaming-accent px-1.5 py-0.5 text-xs font-semibold rounded">TOP 10</span>
            <span className="text-sm text-gray-300">Peter Jackson (Dir.) | Elijah Wood, Ian McKellen</span>
          </div>
          
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl">
            Um humilde hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média do Senhor Sombrio Sauron.
          </p>
          
          <div className="flex space-x-4 mb-6">
            <Button className="bg-white hover:bg-white/90 text-black rounded-md flex items-center space-x-2 px-6 py-5">
              <Play size={20} className="fill-black" />
              <span className="font-semibold">Assistir</span>
            </Button>
            <Button variant="outline" className="bg-gray-500/30 hover:bg-gray-500/40 text-white border-none rounded-md flex items-center space-x-2 px-6 py-5">
              <Info size={20} />
              <span className="font-semibold">Mais Informações</span>
            </Button>
          </div>
          
          {/* Download options */}
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="bg-gray-800/50 hover:bg-gray-700 text-white border-gray-600 flex items-center space-x-2">
              <FileCode size={16} />
              <span>Baixar HTML</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800/50 hover:bg-gray-700 text-white border-gray-600 flex items-center space-x-2">
              <FileCode size={16} />
              <span>Baixar CSS</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800/50 hover:bg-gray-700 text-white border-gray-600 flex items-center space-x-2">
              <FileImage size={16} />
              <span>Baixar JPEG</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
