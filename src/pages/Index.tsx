import React, { useState, useEffect } from 'react';
import PuzzleSelector from '@/components/PuzzleSelector';
import PuzzleView from '@/components/PuzzleView';
import { biblePuzzles, type WordSearchPuzzle } from '@/data/biblePuzzles';
import heroImage from '@/assets/christian-hero.jpg';

const Index = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState<WordSearchPuzzle | null>(null);
  const [completedPuzzles, setCompletedPuzzles] = useState<number[]>([]);

  // Load completed puzzles from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedPuzzles');
    if (saved) {
      setCompletedPuzzles(JSON.parse(saved));
    }
  }, []);

  const handleSelectPuzzle = (puzzle: WordSearchPuzzle) => {
    setSelectedPuzzle(puzzle);
  };

  const handleBack = () => {
    setSelectedPuzzle(null);
  };

  const handleComplete = (puzzleId: number, timeElapsed: number) => {
    if (!completedPuzzles.includes(puzzleId)) {
      const newCompleted = [...completedPuzzles, puzzleId];
      setCompletedPuzzles(newCompleted);
      localStorage.setItem('completedPuzzles', JSON.stringify(newCompleted));
    }
  };

  if (selectedPuzzle) {
    return (
      <PuzzleView
        puzzle={selectedPuzzle}
        onBack={handleBack}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/50"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-heading mb-4 text-shadow-lg">
            Biblical Word Search
          </h1>
          <p className="text-xl font-body mb-2">
            "Thy word is a lamp unto my feet, and a light unto my path."
          </p>
          <p className="text-lg font-body opacity-90">
            - Psalm 119:105
          </p>
        </div>
      </div>

      {/* Main Content */}
      <PuzzleSelector
        puzzles={biblePuzzles}
        onSelectPuzzle={handleSelectPuzzle}
        completedPuzzles={completedPuzzles}
      />
    </div>
  );
};

export default Index;
