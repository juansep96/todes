import React, { useState, useEffect, useRef } from 'react';
import { Send, User } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Message, User as UserType } from '../types';

// Simulación de mensajes para el ejemplo
const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    userId: 'user1',
    username: 'MariaRainbow',
    text: '¡Hola a todos! ¿Cómo están hoy?',
    timestamp: Date.now() - 1000 * 60 * 15
  },
  {
    id: '2',
    userId: 'user2',
    username: 'Carlos_Pride',
    text: 'Todo bien por acá, escuchando la radio mientras trabajo 🎵',
    timestamp: Date.now() - 1000 * 60 * 10
  },
  {
    id: '3',
    userId: 'user3',
    username: 'LuciaLGBT',
    text: 'Me encanta este programa, siempre lo escucho ❤️',
    timestamp: Date.now() - 1000 * 60 * 5
  }
];

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    const message: Message = {
      id: Date.now().toString(),
      userId: 'currentUser',
      username: username,
      text: newMessage,
      timestamp: Date.now()
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  const handleSetUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length >= 3) {
      setShowUsernameModal(false);
    }
  };
  
  return (
    <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
      <div className="p-4 pride-border">
        <h2 className="text-xl font-bold">Chat en vivo</h2>
        <p className="text-gray-400 text-sm">Conectate con la comunidad</p>
      </div>
      
      {showUsernameModal ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-dark p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-lg font-medium mb-4">¿Cómo querés que te llamemos?</h3>
            <form onSubmit={handleSetUsername}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre o apodo"
                className="w-full p-3 mb-4 bg-dark-light rounded border border-gray-700 focus:border-pride-blue outline-none"
                minLength={3}
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-pride text-white p-3 rounded font-medium hover:opacity-90 transition-opacity"
              >
                Comenzar a chatear
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 p-4 overflow-y-auto chat-container">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-4 ${message.userId === 'currentUser' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block max-w-[80%] rounded-lg p-3 ${
                    message.userId === 'currentUser' 
                      ? 'bg-pride-blue text-white' 
                      : 'bg-dark text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <User size={14} />
                    <span className="font-medium text-sm">{message.username}</span>
                  </div>
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {format(new Date(message.timestamp), 'HH:mm', { locale: es })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-800">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 p-3 bg-dark rounded border border-gray-700 focus:border-pride-blue outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-pride text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatRoom;