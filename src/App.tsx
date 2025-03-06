import React, { useState } from 'react';
import Header from './components/Header';
import RadioPlayer from './components/RadioPlayer';
import ChatRoom from './components/ChatRoom';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-pride text-transparent bg-clip-text">
                  Todes Gays Radio
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                La radio de la comunidad LGBT+ de Argentina. Música, información y entretenimiento para todes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-pride text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                  Escuchar ahora
                </button>
                <a 
                  href="https://linktr.ee/Todesgays?fbclid=PAZXh0bgNhZW0CMTEAAabNhMqDQ1ItumgIYHMPy0xp_Uu3hWBhDqWqvgpVVukHoHpojHl5mc83IJw_aem_RF-XbBm4OO03VB6n-BZwLQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-dark transition-all"
                >
                  Contacto
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Radio studio" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Main Content - Radio Player and Chat */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RadioPlayer />
            </div>
            <div>
              <ChatRoom />
            </div>
          </div>
        </section>
        
        {/* News and Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Noticias e Información</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Pride event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Eventos</h3>
                <p className="text-gray-400 text-sm">Descubrí los próximos eventos de la comunidad LGBT+ en Argentina.</p>
              </div>
            </div>
            
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="News" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Noticias</h3>
                <p className="text-gray-400 text-sm">Mantente informado sobre las últimas noticias que afectan a nuestra comunidad.</p>
              </div>
            </div>
            
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Support" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Recursos</h3>
                <p className="text-gray-400 text-sm">Accedé a recursos y apoyo para la comunidad LGBT+ en Argentina.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;