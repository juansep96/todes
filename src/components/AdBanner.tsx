import React from 'react';

interface AdBannerProps {
  position: 'sidebar' | 'horizontal';
}

const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  return (
    <div 
      className={`
        ad-container bg-dark-light rounded-lg overflow-hidden shadow-lg flex items-center justify-center
        ${position === 'horizontal' ? 'p-4 w-full' : 'p-4 h-full'}
      `}
    >
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-2">Espacio publicitario</p>
        <div className={`
          border-2 border-dashed border-gray-700 rounded flex items-center justify-center
          ${position === 'horizontal' ? 'h-[90px] w-full' : 'h-[250px] w-full'}
        `}>
          <p className="text-gray-500">Tu publicidad aquí</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">Contactanos para anunciar</p>
      </div>
    </div>
  );
};

export default AdBanner;