import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface WordSearchGridProps {
  grid: string[][];
  words: string[];
  onWordFound: (word: string) => void;
  foundWords: string[];
}

interface Selection {
  start: { row: number; col: number } | null;
  end: { row: number; col: number } | null;
  isSelecting: boolean;
}

interface CellPosition {
  row: number;
  col: number;
}

const WordSearchGrid: React.FC<WordSearchGridProps> = ({ 
  grid, 
  words, 
  onWordFound, 
  foundWords 
}) => {
  const [selection, setSelection] = useState<Selection>({
    start: null,
    end: null,
    isSelecting: false
  });
  const [highlightedCells, setHighlightedCells] = useState<Set<string>>(new Set());
  const [foundWordCells, setFoundWordCells] = useState<Set<string>>(new Set());

  const getCellKey = (row: number, col: number) => `${row}-${col}`;

  const getSelectedCells = useCallback(() => {
    if (!selection.start || !selection.end) return [];
    
    const cells: CellPosition[] = [];
    const { start, end } = selection;
    
    // Calculate direction
    const deltaRow = end.row - start.row;
    const deltaCol = end.col - start.col;
    const steps = Math.max(Math.abs(deltaRow), Math.abs(deltaCol));
    
    if (steps === 0) return [start];
    
    const stepRow = deltaRow === 0 ? 0 : deltaRow / Math.abs(deltaRow);
    const stepCol = deltaCol === 0 ? 0 : deltaCol / Math.abs(deltaCol);
    
    // Only allow straight lines (horizontal, vertical, diagonal)
    if (Math.abs(deltaRow) !== Math.abs(deltaCol) && deltaRow !== 0 && deltaCol !== 0) {
      return [];
    }
    
    for (let i = 0; i <= steps; i++) {
      cells.push({
        row: start.row + i * stepRow,
        col: start.col + i * stepCol
      });
    }
    
    return cells;
  }, [selection.start, selection.end]);

  const handleMouseDown = (row: number, col: number) => {
    setSelection({
      start: { row, col },
      end: { row, col },
      isSelecting: true
    });
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (selection.isSelecting && selection.start) {
      setSelection(prev => ({
        ...prev,
        end: { row, col }
      }));
    }
  };

  const handleMouseUp = () => {
    if (selection.start && selection.end) {
      const selectedCells = getSelectedCells();
      const selectedWord = selectedCells.map(cell => grid[cell.row][cell.col]).join('');
      const reversedWord = selectedWord.split('').reverse().join('');
      
      // Check if the selected word matches any of the target words
      const foundWord = words.find(word => 
        word === selectedWord || word === reversedWord
      );
      
      if (foundWord && !foundWords.includes(foundWord)) {
        onWordFound(foundWord);
        // Add these cells to found words
        const newFoundCells = new Set(foundWordCells);
        selectedCells.forEach(cell => {
          newFoundCells.add(getCellKey(cell.row, cell.col));
        });
        setFoundWordCells(newFoundCells);
      }
    }
    
    setSelection({
      start: null,
      end: null,
      isSelecting: false
    });
  };

  useEffect(() => {
    const selectedCells = getSelectedCells();
    const newHighlighted = new Set<string>();
    selectedCells.forEach(cell => {
      newHighlighted.add(getCellKey(cell.row, cell.col));
    });
    setHighlightedCells(newHighlighted);
  }, [getSelectedCells]);

  if (!grid || grid.length === 0) {
    return <div className="text-center p-8">Loading puzzle...</div>;
  }

  return (
    <div className="flex justify-center p-4">
      <div 
        className="grid gap-1 select-none"
        style={{ 
          gridTemplateColumns: `repeat(${grid[0]?.length || 0}, minmax(0, 1fr))`,
          maxWidth: '90vmin',
          aspectRatio: '1'
        }}
        onMouseLeave={handleMouseUp}
      >
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const cellKey = getCellKey(rowIndex, colIndex);
            const isHighlighted = highlightedCells.has(cellKey);
            const isFound = foundWordCells.has(cellKey);
            
            return (
              <div
                key={cellKey}
                className={cn(
                  "aspect-square flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-200 border border-muted rounded-sm",
                  "hover:bg-accent/50 text-foreground bg-card",
                  isHighlighted && "bg-sacred/30 border-sacred scale-105",
                  isFound && "bg-grace/40 border-grace text-grace-foreground animate-found-word"
                )}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                onMouseUp={handleMouseUp}
              >
                {letter}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WordSearchGrid;