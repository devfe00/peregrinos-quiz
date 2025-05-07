
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    emoji: string;
    type: PeregrinoType;
  }[];
}

export type PeregrinoType = 'raiz' | 'urbano' | 'nomade' | 'contemplativo';

export interface PeregrinoProfile {
  type: PeregrinoType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  products: {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
    url: string;
  }[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você curte mais explorar o mundo?",
    options: [
      { id: "1a", text: "Trilhas na natureza", emoji: "🌲", type: "raiz" },
      { id: "1b", text: "Rolês urbanos e culturais", emoji: "🏙️", type: "urbano" },
      { id: "1c", text: "Mochilão raiz em qualquer canto", emoji: "🎒", type: "nomade" },
      { id: "1d", text: "Ficar de boa, só absorvendo a vibe", emoji: "🍃", type: "contemplativo" }
    ]
  },
  {
    id: 2,
    question: "Qual dessas frases parece mais contigo?",
    options: [
      { id: "2a", text: "Preciso respirar ar puro", emoji: "🌬️", type: "raiz" },
      { id: "2b", text: "Onde tem arte, tem eu", emoji: "🎨", type: "urbano" },
      { id: "2c", text: "Bora sem rumo, o caminho se faz andando", emoji: "🧭", type: "nomade" },
      { id: "2d", text: "Prefiro observar do que aparecer", emoji: "👀", type: "contemplativo" }
    ]
  },
  {
    id: 3,
    question: "Um item indispensável pra sua jornada:",
    options: [
      { id: "3a", text: "Bota firme", emoji: "👢", type: "raiz" },
      { id: "3b", text: "Caderninho de anotações", emoji: "📓", type: "urbano" },
      { id: "3c", text: "Cantil ou garrafinha", emoji: "🍶", type: "nomade" },
      { id: "3d", text: "Óculos escuros estilosos", emoji: "😎", type: "contemplativo" }
    ]
  },
  {
    id: 4,
    question: "Você prefere viajar:",
    options: [
      { id: "4a", text: "Sozinho", emoji: "🧗", type: "raiz" },
      { id: "4b", text: "Com amigos", emoji: "👥", type: "urbano" },
      { id: "4c", text: "Com alguém especial", emoji: "❤️", type: "nomade" },
      { id: "4d", text: "Tanto faz, só quero ir", emoji: "✈️", type: "contemplativo" }
    ]
  },
  {
    id: 5,
    question: "Qual dessas músicas te representa mais?",
    options: [
      { id: "5a", text: "Natureza — sons da floresta", emoji: "🌳", type: "raiz" },
      { id: "5b", text: "Indie alternativo", emoji: "🎸", type: "urbano" },
      { id: "5c", text: "Reggae ou lo-fi", emoji: "💨", type: "nomade" },
      { id: "5d", text: "Música instrumental ou chill", emoji: "🎧", type: "contemplativo" }
    ]
  }
];

export const peregrinoProfiles: Record<PeregrinoType, PeregrinoProfile> = {
  raiz: {
    type: "raiz",
    title: "Peregrino Raiz",
    description: "Você é o aventureiro clássico! Em contato com a natureza é onde você se sente em casa. Suas trilhas favoritas são aquelas que levam a cachoeiras escondidas, montanhas desafiadoras e vistas de tirar o fôlego. Para você, viajar é sinônimo de explorar o natural, o autêntico, o selvagem.",
    color: "#2D6A4F",
    bgColor: "#ECFDF5",
    products: [
      {
        name: "Mochila Terra",
        description: "Perfeita para trilhas, com compartimentos para equipamento e hidratação",
        imageUrl: "/placeholder.svg",
        price: "R$ 259,90",
        url: "https://peregrinos.com/products/mochila-terra"
      },
      {
        name: "Cantil Montanha",
        description: "Mantém sua água fresca mesmo nas trilhas mais quentes",
        imageUrl: "/placeholder.svg",
        price: "R$ 89,90",
        url: "https://peregrinos.com/products/cantil-montanha"
      },
      {
        name: "Chapéu Trek",
        description: "Proteção UV e secagem rápida para suas aventuras ao ar livre",
        imageUrl: "/placeholder.svg",
        price: "R$ 79,90",
        url: "https://peregrinos.com/products/chapeu-trek"
      }
    ]
  },
  urbano: {
    type: "urbano",
    title: "Peregrino Urbano",
    description: "Você é o explorador cultural! Da arquitetura moderna aos cafés charmosos, seu habitat natural são as cidades vibrantes. Museus, galerias, ruas históricas e restaurantes locais são seus destinos favoritos. Para você, cada esquina pode esconder uma nova descoberta, uma foto incrível ou uma experiência inesquecível.",
    color: "#7678ED",
    bgColor: "#EEF2FF",
    products: [
      {
        name: "Mochila Urbana",
        description: "Estilo e praticidade para suas aventuras pela cidade",
        imageUrl: "/placeholder.svg",
        price: "R$ 229,90",
        url: "https://peregrinos.com/products/mochila-urbana"
      },
      {
        name: "Bolsa Crossbody City",
        description: "Compacta e segura para carregar seus essenciais urbanos",
        imageUrl: "/placeholder.svg",
        price: "R$ 139,90",
        url: "https://peregrinos.com/products/bolsa-crossbody-city"
      },
      {
        name: "Pochete Moderna",
        description: "Estilo com praticidade para explorar sem pesos extras",
        imageUrl: "/placeholder.svg",
        price: "R$ 99,90",
        url: "https://peregrinos.com/products/pochete-moderna"
      }
    ]
  },
  nomade: {
    type: "nomade",
    title: "Peregrino Nômade",
    description: "Você é o viajante sem rumo! Mapas são apenas sugestões para você, que prefere seguir o coração e o instinto. Do deserto às montanhas, da praia à floresta, você está pronto para qualquer aventura. Para você, o verdadeiro destino é a jornada e as histórias que coleciona pelo caminho.",
    color: "#E85D04",
    bgColor: "#FEF3C7",
    products: [
      {
        name: "Mochila Freedom",
        description: "Espaçosa e versátil para carregar tudo que você precisa",
        imageUrl: "/placeholder.svg",
        price: "R$ 299,90",
        url: "https://peregrinos.com/products/mochila-freedom"
      },
      {
        name: "Kit Organizador",
        description: "Mantenha suas roupas e itens sempre organizados durante as viagens",
        imageUrl: "/placeholder.svg",
        price: "R$ 129,90",
        url: "https://peregrinos.com/products/kit-organizador"
      },
      {
        name: "Pochete Adventure",
        description: "Resistente à água e com múltiplos compartimentos secretos",
        imageUrl: "/placeholder.svg",
        price: "R$ 119,90",
        url: "https://peregrinos.com/products/pochete-adventure"
      }
    ]
  },
  contemplativo: {
    type: "contemplativo",
    title: "Peregrino Contemplativo",
    description: "Você é o viajante reflexivo! Seu objetivo não é ver tudo, mas sentir profundamente cada lugar que visita. Praias desertas, mirantes solitários e cafés tranquilos são seus lugares ideais. Para você, viajar é uma forma de autoconhecimento, uma pausa para respirar e absorver calmamente as maravilhas do mundo.",
    color: "#577590",
    bgColor: "#EFF6FF",
    products: [
      {
        name: "Mochila Serenity",
        description: "Design minimalista e confortável para jornadas tranquilas",
        imageUrl: "/placeholder.svg",
        price: "R$ 259,90",
        url: "https://peregrinos.com/products/mochila-serenity"
      },
      {
        name: "Bolsa Horizon",
        description: "Elegante e espaçosa para carregar seu diário e livros favoritos",
        imageUrl: "/placeholder.svg",
        price: "R$ 179,90",
        url: "https://peregrinos.com/products/bolsa-horizon"
      },
      {
        name: "Necessaire Essentials",
        description: "Para guardar seus itens pessoais com organização e estilo",
        imageUrl: "/placeholder.svg",
        price: "R$ 69,90",
        url: "https://peregrinos.com/products/necessaire-essentials"
      }
    ]
  }
};
