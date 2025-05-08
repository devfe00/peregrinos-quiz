
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
        name: "Mochila Inoxto",
        description: "Perfeita para trilhas, com compartimentos para equipamento e hidratação.",
        imageUrl: "/placeholder.svg",
        price: "R$ 259,99",
        url: "https://peregrinosout.com/products/inoxto-portable-waterproof-bicycle-backpack-10-liters-water-bag-suitable-for-outdoor-sports-mountaineering-hiking-hydratio"
      },
      {
        name: "Garrafa Térmica",
        description: "Mantém sua água fresca mesmo nas trilhas mais quentes.",
        imageUrl: "/placeholder.svg",
        price: "R$ 89,99",
        url: "https://peregrinosout.com/products/650ml-outdoor-sports-304-bottle-stainless-steel-vacuum-cup-thermal-cup-car-handle-cup"
      },
      {
        name: "Chapéu Bucket",
        description: "Proteção UV e secagem rápida para suas aventuras ao ar livre.",
        imageUrl: "/placeholder.svg",
        price: "R$ 269,99",
        url: "https://peregrinosout.com/products/ohsunny-double-sided-wearing-cap-solid-color-anti-uv-sunscreen-bucket-hats-for-women-summer-foldable-large-brim-fisherman-hat"
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
        name: "Drone ®Peregrinos",
        description: "Estilo e praticidade para suas aventuras pela cidade.",
        imageUrl: "/placeholder.svg",
        price: "R$ 509,99",
        url: "https://peregrinosout.com/products/rc-drone-5g-wifi-fpv-laser-obstacle-avoidance-brushless-motor-gps-return-4k-hd-dual-camera-rc-quadcopter-drone-toys"
      },
      {
        name: "Bolsa Crossbody City",
        description: "Compacta e segura para carregar seus essenciais urbanos.",
        imageUrl: "/placeholder.svg",
        price: "R$ 309,99",
        url: "https://peregrinosout.com/products/waterproof-nylon-bag-camping-travel-backpack-with-rain-cover-outdoor-hiking-mountaineering-men-shoulder-climbing-traveling-bags"
      },
      {
        name: "Computador de Bike",
        description: "Tecnologia e praticidade para monitorar sua performance e explorar sem limites.",
        imageUrl: "/placeholder.svg",
        price: "R$ 234,99",
        url: "https://peregrinosout.com/products/cycplus-m1-bike-accessories-gps-bicycle-computer-cycling-speedometer-ble-5-0-ant-cycle-ciclismo-kilometer-counter-for-bicycle"
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
        name: "Mochila ®Peregrinos",
        description: "Espaçosa e versátil para carregar tudo que você precisa.",
        imageUrl: "/placeholder.svg",
        price: "R$ 499,99",
        url: "https://peregrinosout.com/products/1pc-50l-waterproof-hiking-backpack-large-capacity-mountaineering-bag-for-outdoor-travel-climbing-camping-men-women-suitable-2"
      },
      {
        name: "Kit Organizador",
        description: "Mantenha seus itens sempre organizados durante as viagens.",
        imageUrl: "/placeholder.svg",
        price: "R$ 289,99",
        url: "https://peregrinosout.com/products/orbmart-for-gopro-accessories-set-for-go-pro-hero-13-12-11-10-9-8-7-6-5-4-black-mount-for-dji-insta360-for-sjcam-action-camera?_pos=1&_psq=kit&_ss=e&_v=1.0"
      },
      {
        name: "Pochete Adventure",
        description: "Resistente à água e com múltiplos compartimentos secretos.",
        imageUrl: "/placeholder.svg",
        price: "R$ 44,99",
        url: "https://peregrinosout.com/products/sports-bag-running-slim-waterproof-mobile-phone-door-water-bottle-hiking-running-gym-promotion"
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
        name: "Barra Camping",
        description: "Design ultraleve e compacto para aventuras ao ar livre com conforto e praticidade.",
        imageUrl: "/placeholder.svg",
        price: "R$ 899,99",
        url: "https://peregrinosout.com/products/naturehike-cloud-up-1-single-man-1-person-camping-tent-outdoor-ultralight-camp-tents-2018-updated-version-nh15t001-t"
      },
      {
        name: "Binósculo Profissional",
        description: "Alta performance para observações de longa distância com clareza e precisão.",
        imageUrl: "/placeholder.svg",
        price: "R$ 359,99",
        url: "https://peregrinosout.com/products/professional-binoculars-8x40-168m-1000m-vision-long-range-bag"
      },
      {
        name: "Lanterna ®Peregrinos",
        description: "Ilumine suas aventuras com design compacto e potente para qualquer desafio.",
        imageUrl: "/placeholder.svg",
        price: "R$ 239,99",
        url: "https://peregrinosout.com/products/sofirn-hs42-2100lm-6000k-multi-light-sources-3000mah-headlamp-sst40-led-red-light-torch-usb-c-rechargeable-with-magnetic-2"
      }
    ]
  }
};
