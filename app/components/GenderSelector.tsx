'use client'
import React from 'react'

interface GenderSelectorProps {
  onSelect: (gender: 'male' | 'female') => void
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ onSelect }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Choose Your Style Preference</h2>
      <div className="flex gap-6 justify-center">
        <button
          onClick={() => onSelect('female')}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-10 rounded-full transition-all text-lg"
        >
          Female Style
        </button>
        <button
          onClick={() => onSelect('male')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-full transition-all text-lg"
        >
          Male Style
        </button>
      </div>
    </div>
  )
}

export default GenderSelector