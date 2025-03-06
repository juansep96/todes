import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Radio } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light mt-12 pride-border">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Radio size={24} className="text-pride-red" />
              <h2 className="text-xl font-bold bg-gradient-pride text-transparent bg-clip-text">
                Todes Gays Radio
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              La radio de la comunidad LGBT+ de Argentina. Música, información y entretenimiento para todes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-pride-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-pride-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-pride-blue transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="https://linktr.ee/Todesgays?fbclid=PAZXh0bgNhZW0CMTEAAabNhMqDQ1ItumgIYHMPy0xp_Uu3hWBhDqWqvgpVVukHoHpojHl5mc83IJw_aem_RF-XbBm4OO03VB6n-BZwLQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="https://cafecito.app/todesgays" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Donar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-pride-red mt-1" />
                <span className="text-gray-400">Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={20} className="text-pride-yellow mt-1" />
                <span className="text-gray-400">contacto@todesgaysradio.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Todes Gays Radio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;