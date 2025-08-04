import React from 'react';
import { cn } from '@/lib/utils';

interface WordListProps {
  words: string[];
  foundWords: string[];
}

const WordList: React.FC<WordListProps> = ({ words, foundWords }) => {
  return (
    <div className="bg-card rounded-lg p-6 border shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-primary">Find These Words:</h3>
      <div className="grid grid-cols-2 gap-2">
        {words.map((word) => {
          const isFound = foundWords.includes(word);
          return (
            <div
              key={word}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                isFound 
                  ? "bg-sacred text-sacred-foreground line-through opacity-75 transform scale-95" 
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              )}
            >
              {word}
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Found: {foundWords.length} / {words.length}
      </div>
    </div>
  );
};

export default WordList;