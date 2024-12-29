export const categories = [
  {
    id: 'men',
    name: "Men's Fashion",
    description: 'Fashion and accessories for men',
    subcategories: ['Clothing', 'Shoes', 'Accessories', 'Sportswear', 'Formal Wear']
  },
  {
    id: 'women',
    name: "Women's Fashion",
    description: 'Fashion and accessories for women',
    subcategories: ['Clothing', 'Shoes', 'Accessories', 'Activewear', 'Formal Wear']
  },
  {
    id: 'children',
    name: "Children's Fashion",
    description: 'Fashion and accessories for kids',
    subcategories: ['Boys', 'Girls', 'Baby Clothes', 'School Wear', 'Accessories']
  }
] as const;