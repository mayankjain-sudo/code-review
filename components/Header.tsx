
import React from 'react';
import { RobotIcon } from './icons/RobotIcon';

const Header: React.FC = () => {
  return (
    <header className="p-4 sm:p-6 border-b border-bunker-800">
      <div className="max-w-7xl mx-auto flex items-center space-x-4">
        <RobotIcon className="h-10 w-10 text-cyan-400" />
        <div>
          <h1 className="text-2xl font-bold text-bunker-50 tracking-tight">Gemini Code Reviewer</h1>
          <p className="text-sm text-bunker-400">Your AI-powered pair programmer for flawless code.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
