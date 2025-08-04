import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Clock, Star } from 'lucide-react';
import WordSearchGrid from './WordSearchGrid';
import WordList from './WordList';
import { WordSearchPuzzle, generateWordSearchGrid } from '@/data/biblePuzzles';
import { useToast } from '@/hooks/use-toast';

interface PuzzleViewProps {
  puzzle: WordSearchPuzzle;
  onBack: () => void;
  onComplete: (puzzleId: number, timeElapsed: number) => void;
}

const PuzzleView: React.FC<PuzzleViewProps> = ({ puzzle, onBack, onComplete }) => {
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [startTime] = useState<number>(Date.now());
  const [isCompleted, setIsCompleted] = useState(false);
  const [grid, setGrid] = useState<string[][]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Generate the grid when puzzle changes
    const generatedGrid = generateWordSearchGrid(puzzle);
    setGrid(generatedGrid);
    setFoundWords([]);
    setIsCompleted(false);
  }, [puzzle]);

  const handleWordFound = (word: string) => {
    if (!foundWords.includes(word)) {
      const newFoundWords = [...foundWords, word];
      setFoundWords(newFoundWords);
      
      toast({
        title: "Word Found! ✨",
        description: `You found "${word}"!`,
        duration: 2000,
      });

      // Check if puzzle is completed
      if (newFoundWords.length === puzzle.words.length) {
        const timeElapsed = Date.now() - startTime;
        setIsCompleted(true);
        onComplete(puzzle.id, timeElapsed);
        
        toast({
          title: "Puzzle Completed! 🎉",
          description: "Congratulations! You found all the words!",
          duration: 4000,
        });
      }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-blessing text-blessing-foreground';
      case 'Medium': return 'bg-sacred text-sacred-foreground';
      case 'Hard': return 'bg-divine text-divine-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Button 
            onClick={onBack} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Puzzles
          </Button>
          <Badge className={getDifficultyColor(puzzle.difficulty)}>
            {puzzle.difficulty}
          </Badge>
          {isCompleted && (
            <Badge className="bg-sacred text-sacred-foreground animate-divine-glow">
              <Trophy className="w-3 h-3 mr-1" />
              Completed!
            </Badge>
          )}
        </div>
        
        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Star className="w-6 h-6 text-divine" />
              {puzzle.title}
            </CardTitle>
            <p className="text-divine font-medium">{puzzle.theme}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic mb-2">
              "{puzzle.verse}"
            </p>
            <p className="text-sm">{puzzle.description}</p>
          </CardContent>
        </Card>
      </div>

      {/* Game Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Word Search Grid */}
        <div className="lg:col-span-3">
          <Card className="h-fit">
            <CardContent className="p-6">
              <WordSearchGrid
                grid={grid}
                words={puzzle.words}
                onWordFound={handleWordFound}
                foundWords={foundWords}
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <WordList words={puzzle.words} foundWords={foundWords} />
          
          {/* Progress Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Words Found:</span>
                  <span className="font-semibold text-primary">
                    {foundWords.length} / {puzzle.words.length}
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-sacred h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(foundWords.length / puzzle.words.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Time:</span>
                  <span className="font-mono">
                    {formatTime(Date.now() - startTime)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PuzzleView;