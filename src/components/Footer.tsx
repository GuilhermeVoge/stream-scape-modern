
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-streaming-dark py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Youtube size={24} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-8">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Audiodescrição</a></li>
            <li><a href="#" className="hover:text-gray-300">Relações com Investidores</a></li>
            <li><a href="#" className="hover:text-gray-300">Avisos Legais</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-gray-300">Carreiras</a></li>
            <li><a href="#" className="hover:text-gray-300">Preferências de Cookies</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Cartão Presente</a></li>
            <li><a href="#" className="hover:text-gray-300">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-gray-300">Informações Corporativas</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Centro de Mídia</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacidade</a></li>
            <li><a href="#" className="hover:text-gray-300">Entre em Contato</a></li>
          </ul>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StreamScape. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
