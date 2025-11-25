import { Home, Flame, Beer, UtensilsCrossed, Star, Menu } from 'lucide-react';

export const categories = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'destaques', label: 'Destaques', icon: Flame },
  { id: 'bebidas', label: 'Bebidas', icon: Beer },
  { id: 'porcoes', label: 'Porções', icon: UtensilsCrossed },
  { id: 'espetos', label: 'Espetos', icon: Menu },
  { id: 'avaliacao', label: 'Avaliar', icon: Star },
];

// Adicionei a propriedade 'category' para podermos filtrar depois!
export const products = [
  { id: 1, name: 'Combo Futevôlei', description: '5 Cervejas + Batata', price: 85.90, image: '🍻', category: 'destaques' },
  { id: 2, name: 'Espeto Picanha', description: 'Acompanha farofa', price: 22.00, image: '🥩', category: 'espetos' },
  { id: 3, name: 'Água de Coco', description: 'Natural gelada', price: 12.00, image: '🥥', category: 'bebidas' },
  { id: 4, name: 'Isca de Tilápia', description: 'Filé empanado 500g', price: 65.00, image: '🐟', category: 'porcoes' },
  { id: 5, name: 'Açaí na Tigela', description: 'Com granola e banana', price: 28.00, image: '🥣', category: 'destaques' },
  { id: 6, name: 'Caipirinha', description: 'Limão e Cachaça', price: 18.00, image: '🍋', category: 'bebidas' },
  { id: 7, name: 'Batata Frita', description: 'Porção grande com cheddar', price: 35.00, image: '🍟', category: 'porcoes' },
  { id: 8, name: 'Espeto de Queijo', description: 'Queijo coalho assado', price: 15.00, image: '🧀', category: 'espetos' },
];