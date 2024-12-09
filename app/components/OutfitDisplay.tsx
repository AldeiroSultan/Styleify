'use client'
import { FC } from 'react'

interface ClothingItem {
  name: string
  style: string
}

interface Aesthetic {
  name: string
  description: string
  colorPalette: string[]
}

interface OutfitProps {
  outfit: {
    aesthetic: string
    top: ClothingItem
    bottom: ClothingItem
    shoes: ClothingItem
  }
  aestheticInfo: Aesthetic
}

const OutfitDisplay: FC<OutfitProps> = ({ outfit, aestheticInfo }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Your Style Profile: {aestheticInfo.name}
      </h2>
      <p className="text-gray-200 mb-8">{aestheticInfo.description}</p>
      
      <div className="space-y-6">
        <div className="bg-black bg-opacity-20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-3">Top</h3>
          <p className="text-gray-200">{outfit.top.name}</p>
          <p className="text-gray-300 text-sm">{outfit.top.style}</p>
        </div>

        <div className="bg-black bg-opacity-20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-3">Bottom</h3>
          <p className="text-gray-200">{outfit.bottom.name}</p>
          <p className="text-gray-300 text-sm">{outfit.bottom.style}</p>
        </div>

        <div className="bg-black bg-opacity-20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-3">Shoes</h3>
          <p className="text-gray-200">{outfit.shoes.name}</p>
          <p className="text-gray-300 text-sm">{outfit.shoes.style}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-3">Color Palette</h3>
        <div className="flex gap-4">
          {aestheticInfo.colorPalette.map((color, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OutfitDisplay