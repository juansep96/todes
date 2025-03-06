import React from 'react';
import { Radio, Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="pride-border bg-dark-light py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Radio size={28} className="text-pride-red" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-pride text-transparent bg-clip-text">
            Todes Gays Radio
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-pride-yellow transition-colors">Inicio</a>
          <a href="https://linktr.ee/Todesgays?fbclid=PAZXh0bgNhZW0CMTEAAabNhMqDQ1ItumgIYHMPy0xp_Uu3hWBhDqWqvgpVVukHoHpojHl5mc83IJw_aem_RF-XbBm4OO03VB6n-BZwLQ" target="_blank" rel="noopener noreferrer" className="hover:text-pride-purple transition-colors">Contacto</a>
          <a href="https://cafecito.app/todesgays" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gradient-pride text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            <Heart size={16} />
            <span>Donar</span>
          </a>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-light py-4 px-6 flex flex-col gap-4 shadow-lg">
          <a href="#" className="hover:text-pride-yellow transition-colors">Inicio</a>
          <a href="https://linktr.ee/Todesgays?fbclid=PAZXh0bgNhZW0CMTEAAabNhMqDQ1ItumgIYHMPy0xp_Uu3hWBhDqWqvgpVVukHoHpojHl5mc83IJw_aem_RF-XbBm4OO03VB6n-BZwLQ" target="_blank" rel="noopener noreferrer" className="hover:text-pride-purple transition-colors">Contacto</a>
          <a href="https://cafecito.app/todesgays" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 bg-gradient-pride text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            <Heart size={16} />
            <span>Donar</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;