
import React from 'react';
import { RobotIcon } from './icons/RobotIcon';

interface ReviewOutputProps {
  review: string;
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-6 p-6">
    <div className="h-4 bg-bunker-700 rounded w-1/4"></div>
    <div className="space-y-3">
      <div className="h-3 bg-bunker-700 rounded w-full"></div>
      <div className="h-3 bg-bunker-700 rounded w-5/6"></div>
    </div>
    <div className="h-4 bg-bunker-700 rounded w-1/3"></div>
     <div className="space-y-3">
      <div className="h-3 bg-bunker-700 rounded w-full"></div>
      <div className="h-3 bg-bunker-700 rounded w-1/2"></div>
      <div className="h-3 bg-bunker-700 rounded w-4/6"></div>
    </div>
     <div className="h-4 bg-bunker-700 rounded w-1/4"></div>
     <div className="space-y-3">
      <div className="h-3 bg-bunker-700 rounded w-full"></div>
    </div>
  </div>
);

const ReviewOutput: React.FC<ReviewOutputProps> = ({ review, isLoading, error }) => {
  const content = review
    .replace(/###\s(.*?)\n/g, '<h3 class="text-lg font-semibold text-cyan-400 mt-6 mb-2">$1</h3>')
    .replace(/\*\*\s(.*?):/g, '<strong class="text-bunker-100">$1:</strong>')
    .replace(/-\s(.*?)\n/g, '<li class="ml-5 list-disc">$1</li>')
    .replace(/`([^`]+)`/g, '<code class="bg-bunker-800 text-amber-400 rounded px-1 py-0.5 text-sm">$1</code>')
    .replace(/```(\w*)\n([\s\S]*?)\n```/g, '<pre class="bg-bunker-800 rounded-md p-4 my-4 overflow-x-auto"><code class="language-$1">$2</code></pre>');

  return (
    <div className="bg-bunker-900 rounded-lg shadow-lg h-full">
      <div className="p-4 border-b border-bunker-800">
          <h2 className="text-lg font-semibold text-bunker-200">AI Review</h2>
      </div>
      <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
        {isLoading && <LoadingSkeleton />}
        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-md" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {!isLoading && !error && !review && (
          <div className="text-center text-bunker-500 flex flex-col items-center justify-center h-full">
            <RobotIcon className="h-16 w-16 mb-4" />
            <p>Your code review will appear here.</p>
          </div>
        )}
        {review && !isLoading && (
          <div className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>
    </div>
  );
};

export default ReviewOutput;
