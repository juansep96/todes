import React from 'react';
import { Clock } from 'lucide-react';

const programs = [
  {
    id: 1,
    name: 'Despertar Diverso',
    host: 'María y Carlos',
    time: '07:00 - 10:00',
    days: 'Lunes a Viernes',
    description: 'Comenzá tu día con música, noticias y entrevistas a referentes de la comunidad.'
  },
  {
    id: 2,
    name: 'Orgullo',
    host: 'Lucía Fernández',
    time: '10:00 - 13:00',
    days: 'Lunes a Viernes',
    description: 'Actualidad, cultura y entretenimiento desde una perspectiva LGBT+.'
  },
  {
    id: 3,
    name: 'Tarde Arcoíris',
    host: 'Javier Mendoza',
    time: '13:00 - 16:00',
    days: 'Lunes a Viernes',
    description: 'La mejor música para acompañarte durante la tarde.'
  },
  {
    id: 4,
    name: 'Comunidad',
    host: 'Equipo Todes Gays',
    time: '16:00 - 19:00',
    days: 'Lunes a Viernes',
    description: 'Un espacio para compartir historias y experiencias de la comunidad.'
  },
  {
    id: 5,
    name: 'Noche Diversa',
    host: 'DJ Rainbow',
    time: '19:00 - 22:00',
    days: 'Lunes a Viernes',
    description: 'Los mejores hits para disfrutar de la noche.'
  }
];

const ProgramSchedule: React.FC = () => {
  return (
    <div className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 pride-border">
        <h2 className="text-xl font-bold">Programación</h2>
        <p className="text-gray-400 text-sm">Nuestra grilla semanal</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {programs.map((program) => (
            <div key={program.id} className="bg-dark p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{program.name}</h3>
                <div className="flex items-center gap-1 text-pride-yellow text-sm">
                  <Clock size={14} />
                  <span>{program.time}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-pride-green">{program.host}</span> • {program.days}
              </p>
              <p className="text-sm text-gray-300">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;