import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WordSearchPuzzle } from '@/data/biblePuzzles';
import { cn } from '@/lib/utils';

interface PuzzleSelectorProps {
  puzzles: WordSearchPuzzle[];
  onSelectPuzzle: (puzzle: WordSearchPuzzle) => void;
  completedPuzzles: number[];
}

const PuzzleSelector: React.FC<PuzzleSelectorProps> = ({ 
  puzzles, 
  onSelectPuzzle, 
  completedPuzzles 
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-accent text-accent-foreground';
      case 'Medium': return 'bg-primary text-primary-foreground';
      case 'Hard': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Biblical Word Search
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          Discover the treasures hidden in God's Word
        </p>
        <div className="text-sm text-muted-foreground">
          Completed: {completedPuzzles.length} / {puzzles.length} puzzles
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {puzzles.map((puzzle) => {
          const isCompleted = completedPuzzles.includes(puzzle.id);
          
          return (
            <Card 
              key={puzzle.id} 
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2",
                isCompleted 
                  ? "border-accent bg-accent/5 shadow-md" 
                  : "border-border hover:border-primary"
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant="secondary" 
                    className={getDifficultyColor(puzzle.difficulty)}
                  >
                    {puzzle.difficulty}
                  </Badge>
                  {isCompleted && (
                    <Badge className="bg-accent text-accent-foreground">
                      ✓ Completed
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-primary">
                  {puzzle.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-divine">
                  {puzzle.theme}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "{puzzle.verse}"
                </p>
                <p className="text-sm mb-4">
                  {puzzle.description}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                  <span>{puzzle.words.length} words</span>
                  <span>{puzzle.size}×{puzzle.size} grid</span>
                </div>
                <Button 
                  onClick={() => onSelectPuzzle(puzzle)}
                  className="w-full"
                  variant="default"
                >
                  {isCompleted ? 'Play Again' : 'Start Puzzle'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PuzzleSelector;