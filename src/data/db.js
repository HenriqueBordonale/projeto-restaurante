import {
  Home,
  Flame,
  Beer,
  Wine, // Para Drinks
  GlassWater, // Para Sem Álcool
  UtensilsCrossed, // Para Porções
  Beef, // Para Espetos (Se não tiver 'Beef', use 'Utensils')
  IceCream, // Para Sobremesas
} from "lucide-react";

export const categories = [
  { id: "home", label: "Início", icon: Home },
  { id: "destaques", label: "Destaques", icon: Flame },
  { id: "espetos", label: "Espetos", icon: Beef },
  { id: "porcoes", label: "Porções e Lanches", icon: UtensilsCrossed },
  { id: "cervejas", label: "Cervejas", icon: Beer },
  { id: "drinks", label: "Drinks e Doses", icon: Wine },
  { id: "bebidas", label: "Sem Álcool", icon: GlassWater },
  { id: "sobremesas", label: "Açaí e Frutas", icon: IceCream },
];

export const products = [
  // --- DESTAQUES (Duplicatas estratégicas para aparecer na Home) ---
  // A categoria 'destaques' é especial. Itens podem ter ela E sua categoria original.
  // No seu código atual, estamos filtrando por string única, então vamos marcar como 'destaques'
  // os itens que queremos na vitrine, mas o ideal é que eles apareçam na categoria original também.
  // PARA SIMPLIFICAR SEU MVP: Vou colocar os itens principais com a categoria original,
  // e no App.jsx nós decidimos quem aparece na Home.

  // --- ESPETOS ---
  {
    id: 1,
    name: "Espeto de Carne",
    description: "Carne macia selecionada, assada na brasa no ponto ideal.",
    price: 12.0,
    image: "/produtos/espeto-carne.jpg",
    category: "espetos",
  },
  {
    id: 2,
    name: "Espeto de Queijo Coalho",
    description: "Queijo coalho tostado e crocante por fora.",
    price: 12.0,
    image: "/produtos/espeto-queijo.jpg",
    category: "espetos",
  },
  {
    id: 3,
    name: "Kafta Tradicional",
    description: "Carne moída temperada com especiarias árabes.",
    price: 12.0,
    image: "/produtos/espeto-kafta.jpg",
    category: "espetos",
  },
  {
    id: 4,
    name: "Kafta com Queijo",
    description: "Nossa deliciosa kafta recheada com queijo derretido.",
    price: 12.0,
    image: "/produtos/kafta-queijo.jpg",
    category: "espetos",
  },
  {
    id: 5,
    name: "Medalhão de Mandioca",
    description: "Mandioca macia envolta em bacon com toque de gorgonzola.",
    price: 12.0,
    image: "/produtos/medalhao-mandioca.jpg",
    category: "espetos",
  },

  // --- PORÇÕES E LANCHES ---
  {
    id: 6,
    name: "Batata Frita Tradicional",
    description: "Porção generosa, sequinha e crocante.",
    price: 26.0,
    image: "/produtos/batata-frita.jpg",
    category: "porcoes",
  },
  {
    id: 7,
    name: "Batata com Cheddar e Bacon",
    description:
      "A queridinha da casa! Coberta com muito cheddar e cubos de bacon.",
    price: 36.0,
    image: "/produtos/batata-cheddar.jpg",
    category: "porcoes",
  },
  {
    id: 8,
    name: "Isca de Frango",
    description: "Peito de frango empanado e frito. Ótimo petisco.",
    price: 34.0,
    image: "/produtos/isca-frango.jpg",
    category: "porcoes",
  },
  {
    id: 9,
    name: "Anéis de Cebola",
    description: "Onion rings empanadas e douradas.",
    price: 32.0,
    image: "/produtos/cebola.jpg",
    category: "porcoes",
  },
  {
    id: 10,
    name: "Lanche Natural",
    description:
      "Pão fresco, salada e escolha entre recheio de Frango ou Salame.",
    price: 12.0,
    image: "/produtos/lanche-natural.jpg",
    category: "porcoes",
  },

  // --- CERVEJAS ---
  {
    id: 11,
    name: "Heineken 600ml",
    description: "Garrafa 600ml. Gelada trincando.",
    price: 18.0,
    image: "/produtos/heineken-600.jpg",
    category: "cervejas",
  },
  {
    id: 12,
    name: "Original 600ml",
    description: "Garrafa 600ml. A clássica.",
    price: 16.0,
    image: "/produtos/original-600.jpg",
    category: "cervejas",
  },
  {
    id: 13,
    name: "Amstel 600ml",
    description: "Garrafa 600ml. Puro malte.",
    price: 14.0,
    image: "/produtos/amstel-600.jpg",
    category: "cervejas",
  },
  {
    id: 14,
    name: "Antarctica Boa 600ml",
    description: "Garrafa 600ml. Pilsen.",
    price: 12.0,
    image: "/produtos/boa-600.jpg",
    category: "cervejas",
  },
  {
    id: 15,
    name: "Heineken Long Neck",
    description: "330ml.",
    price: 12.0,
    image: "/produtos/heineken-ln.jpg",
    category: "cervejas",
  },
  {
    id: 16,
    name: "Corona Long Neck",
    description: "330ml. Acompanha limão.",
    price: 12.0,
    image: "/produtos/corona-ln.jpg",
    category: "cervejas",
  },
  {
    id: 17,
    name: "Budweiser Long Neck",
    description: "330ml.",
    price: 12.0,
    image: "/produtos/bud-ln.jpg",
    category: "cervejas",
  },

  // --- DRINKS E DOSES ---
  {
    id: 18,
    name: "Copão de Whisky",
    description: "Dose generosa com gelo de água de coco (opcional).",
    price: 26.0,
    image: "/produtos/whisky.jpg",
    category: "drinks",
  },
  {
    id: 19,
    name: "Copão Licor 43",
    description: "Doce e aromático, servido com bastante gelo.",
    price: 36.0,
    image: "/produtos/licor43.jpg",
    category: "drinks",
  },
  {
    id: 20,
    name: "Caipirinha de Limão",
    description: "Clássica com Cachaça, limão e açúcar.",
    price: 20.0,
    image: "/produtos/caipirinha.jpg",
    category: "drinks",
  },
  {
    id: 21,
    name: "Caipiroska",
    description: "Feita com Vodka e limão.",
    price: 25.0,
    image: "/produtos/caipiroska.jpg",
    category: "drinks",
  },

  // --- SOBREMESAS / AÇAÍ ---
  {
    id: 22,
    name: "Açaí na Tigela",
    description:
      "Até 4 complementos: Leite em pó, Leite condensado, Granola, Paçoca, Fruta do dia.",
    price: 18.9,
    image: "/produtos/acai.jpg",
    category: "sobremesas",
  },
  {
    id: 23,
    name: "Salada de Frutas (P)",
    description: "Mix de frutas frescas da estação. Pote pequeno.",
    price: 12.0,
    image: "/produtos/salada-frutas.jpg",
    category: "sobremesas",
  },
  {
    id: 24,
    name: "Salada de Frutas (G)",
    description: "Mix de frutas frescas da estação. Pote grande.",
    price: 16.0,
    image: "/produtos/salada-frutas.jpg",
    category: "sobremesas",
  },

  // --- SEM ÁLCOOL ---
  {
    id: 25,
    name: "Suco de Laranja",
    description: "Natural, feito na hora. Copo grande.",
    price: 12.0,
    image: "/produtos/suco-laranja.jpg",
    category: "bebidas",
  },
  {
    id: 26,
    name: "Refrigerante Lata",
    description: "Coca-cola, Guaraná, Sprite (350ml).",
    price: 7.0,
    image: "/produtos/refri-lata.jpg",
    category: "bebidas",
  },
  {
    id: 27,
    name: "Refrigerante KS",
    description: "Garrafa de vidro 290ml.",
    price: 6.0,
    image: "/produtos/refri-ks.jpg",
    category: "bebidas",
  },
  {
    id: 28,
    name: "Gatorade",
    description: "Isotônico para repor energias.",
    price: 9.5,
    image: "/produtos/gatorade.jpg",
    category: "bebidas",
  },
  {
    id: 29,
    name: "H2OH!",
    description: "Garrafa 500ml.",
    price: 9.5,
    image: "/produtos/h2oh.jpg",
    category: "bebidas",
  },
  {
    id: 30,
    name: "Energético Monster",
    description: "Lata 473ml.",
    price: 15.5,
    image: "/produtos/monster.jpg",
    category: "bebidas",
  },
  {
    id: 31,
    name: "Energético RedBull",
    description: "Lata 250ml.",
    price: 16.5,
    image: "/produtos/redbull.jpg",
    category: "bebidas",
  },
  {
    id: 32,
    name: "Água Mineral",
    description: "Garrafa 500ml sem gás.",
    price: 4.0,
    image: "/produtos/agua.jpg",
    category: "bebidas",
  },
  {
    id: 33,
    name: "Água com Gás",
    description: "Garrafa 500ml.",
    price: 5.0,
    image: "/produtos/agua-gas.jpg",
    category: "bebidas",
  },
];
