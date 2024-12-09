export interface ClothingItem {
  name: string
  style: string
}

export interface GenderSpecificItems {
  female: ClothingItem[]
  male: ClothingItem[]
}

export interface AestheticStyle {
  name: string
  description: string
  colorPalette: string[]
  tops: GenderSpecificItems
  bottoms: GenderSpecificItems
  shoes: GenderSpecificItems
}

export const AESTHETIC_STYLES: Record<string, AestheticStyle> = {
  'downtown-chic': {
    name: 'Downtown Chic',
    description: 'Sophisticated urban style with luxe fabrics and clean lines',
    colorPalette: ['#000000', '#FFFFFF', '#8A8A8A', '#C0C0C0'],
    tops: {
      female: [
        { name: 'Silk Camisole', style: 'Luxurious silk cami with delicate straps' },
        { name: 'Cropped Blazer', style: 'Structured blazer with modern cut' }
      ],
      male: [
        { name: 'Silk Shirt', style: 'Premium silk button-up in solid colors' },
        { name: 'Designer Polo', style: 'Minimalist polo in luxury cotton' }
      ]
    },
    bottoms: {
      female: [
        { name: 'Palazzo Pants', style: 'Flowing wide-leg trousers' },
        { name: 'Leather Skirt', style: 'Mid-length leather pencil skirt' }
      ],
      male: [
        { name: 'Dress Pants', style: 'Slim-fit tailored trousers' },
        { name: 'Designer Jeans', style: 'Dark wash premium denim' }
      ]
    },
    shoes: {
      female: [
        { name: 'Stilettos', style: 'Classic pointed-toe heels' },
        { name: 'Designer Mules', style: 'Leather slip-on with low heel' }
      ],
      male: [
        { name: 'Chelsea Boots', style: 'Classic leather Chelsea boots' },
        { name: 'Loafers', style: 'Premium leather loafers' }
      ]
    }
  }
}