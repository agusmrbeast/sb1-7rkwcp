import React, { useState } from 'react';
import { Settings, ArrowLeft } from 'lucide-react';
import Character from './components/Character';
import Config from './components/Config';
import Navbar from './components/Navbar';

function App() {
  const [coins, setCoins] = useState(1500);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(5);
  const [totalTasks, setTotalTasks] = useState(7);
  const [showConfig, setShowConfig] = useState(false);
  const [showTokenInfo, setShowTokenInfo] = useState(false);

  const handleCharacterClick = () => {
    setCoins(prevCoins => prevCoins + 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center p-4">
      {!showTokenInfo ? (
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <button className="text-white mr-2" onClick={() => setShowConfig(true)}>
                <Settings size={24} />
              </button>
              <div className="text-white font-bold">User01</div>
            </div>
            <button 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setShowTokenInfo(true)}
            >
              Acerca del Token
            </button>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 w-full mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src="https://example.com/coin-icon.png" alt="Coin" className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold text-white">{coins}</span>
              </div>
              <div className="bg-white rounded-full px-3 py-1 flex items-center">
                <span className="text-blue-500 font-bold">Potenciador</span>
              </div>
            </div>
            <div onClick={handleCharacterClick}>
              <Character />
            </div>
            <div className="mt-4 text-white text-center">
              <span className="font-bold">Lv {level}</span>
              <div className="bg-white bg-opacity-30 h-2 rounded-full mt-1">
                <div 
                  className="bg-yellow-400 h-full rounded-full" 
                  style={{ width: `${(progress / totalTasks) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm">{progress} / {totalTasks}</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex items-center">
              <img src="https://example.com/wallet-icon.png" alt="Wallet" className="w-6 h-6 mr-2" />
              <span className="text-green-500 font-bold">$1.50</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Sorteo $1000 al día!</span>
              <img src="https://example.com/money-icon.png" alt="Money" className="w-8 h-8" />
            </div>
          </div>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-full mb-4">
            Participa y gana $1.000.000 usd
          </button>
          <div className="flex justify-between">
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-full mr-2">
              Invita y gana
            </button>
            <button className="flex-1 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-full ml-2">
              Tareas
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <button className="text-blue-500 mr-2" onClick={() => setShowTokenInfo(false)}>
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold">Acerca del Token</h2>
          </div>
          <p className="text-gray-600">
            Información sobre el token estará disponible próximamente.
          </p>
        </div>
      )}
      {showConfig && <Config onClose={() => setShowConfig(false)} />}
      <Navbar />
    </div>
  );
}

export default App;