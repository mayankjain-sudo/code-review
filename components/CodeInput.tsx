
import React from 'react';
import type { Language } from '../types';
import { LANGUAGES } from '../constants';
import { SparklesIcon } from './icons/SparklesIcon';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  onReview: () => void;
  isLoading: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ code, setCode, language, setLanguage, onReview, isLoading }) => {
  return (
    <div className="bg-bunker-900 rounded-lg shadow-lg flex flex-col h-full">
      <div className="flex-grow flex flex-col">
        <div className="p-4 border-b border-bunker-800">
            <label htmlFor="language-select" className="block text-sm font-medium text-bunker-300 mb-2">Language</label>
            <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-bunker-800 border border-bunker-700 text-bunker-200 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                {LANGUAGES.map((lang: Language) => (
                    <option key={lang.id} value={lang.id}>{lang.name}</option>
                ))}
            </select>
        </div>
        <div className="flex-grow p-1">
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="w-full h-full min-h-[400px] lg:min-h-0 bg-transparent text-bunker-200 resize-none focus:outline-none p-4 font-mono text-sm"
            />
        </div>
      </div>
      <div className="p-4 border-t border-bunker-800">
        <button
          onClick={onReview}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 disabled:bg-bunker-700 disabled:text-bunker-500 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Reviewing...
            </>
          ) : (
            <>
              <SparklesIcon className="h-5 w-5 mr-2" />
              Review Code
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeInput;
