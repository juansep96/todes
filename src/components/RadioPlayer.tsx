import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Aquí iría la lógica para controlar el reproductor real
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Aquí iría la lógica para silenciar el reproductor real
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    // Aquí iría la lógica para cambiar el volumen del reproductor real
  };

  return (
    <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 pride-border">
        <h2 className="text-xl font-bold mb-2">Escuchá en vivo</h2>
        <p className="text-gray-400 text-sm">La radio LGBT+ de Argentina</p>
      </div>
      
      <div className="p-4">
        <div className="bg-black rounded-lg p-4 mb-4 flex justify-center">
          <iframe 
            src="https://solumedia.com/radios/6456/index.html"
            width="350px"
            height="495px"
            title="Radio Streaming"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            style={{ border: 0 }}
          ></iframe>
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="bg-gradient-pride hover:opacity-90 transition-opacity text-white rounded-full p-3"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <div className="flex items-center gap-2 flex-1 ml-4">
            <button onClick={toggleMute}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;