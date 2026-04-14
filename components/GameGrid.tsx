
import React from 'react';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onSelectGame }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {games.map((game) => (
        <div 
          key={game.id}
          onClick={() => onSelectGame(game)}
          className="group cursor-pointer flex flex-col items-center"
        >
          <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/5] mb-3 game-card shadow-2xl">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4">
               <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{game.publisher}</span>
            </div>
          </div>
          <h3 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors text-center">{game.title}</h3>
          <p className="text-gray-500 text-xs">{game.category}</p>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
