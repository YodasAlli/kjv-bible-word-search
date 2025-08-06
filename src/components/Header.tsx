// src/components/Header.tsx
import React from 'react'
// Uncomment the line below when you add the logo file to src/assets/
// import logo from '../assets/bible_word_explorer_logo_top_left.png'

export function Header() {
  return (
    <header className="flex items-center bg-background p-4 shadow-md border-b">
      {/* Uncomment when logo is added:
      <img
        src={logo}
        alt="Bible Word Explorer Logo"
        className="h-12 w-12 mr-3"
      />
      */}
      <div>
        <h1 className="text-2xl font-bold font-heading text-text">
          Bible Word Explorer
        </h1>
        <p className="text-sm font-body text-text/70">
          Find God's Word in Every Puzzle
        </p>
      </div>
    </header>
  )
}
