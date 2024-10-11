import React from 'react';
import { Home, Users, ClipboardList } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-800 p-4">
      <ul className="flex justify-around">
        <li>
          <button className="text-white flex flex-col items-center">
            <Home />
            <span className="text-xs mt-1">Página principal</span>
          </button>
        </li>
        <li>
          <button className="text-white flex flex-col items-center">
            <ClipboardList />
            <span className="text-xs mt-1">Tareas</span>
          </button>
        </li>
        <li>
          <button className="text-white flex flex-col items-center">
            <Users />
            <span className="text-xs mt-1">Amigos</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;