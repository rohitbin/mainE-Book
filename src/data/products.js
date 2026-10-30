import { 
  Landmark, 
  Sword, 
  Flag, 
  Building2, 
  Palette, 
  HelpCircle, 
  Clock, 
  FileCheck2,
  Mountain,
  Globe,
  Compass,
  MapPin,
  Trees,
  Navigation,
  BookOpen,
  Layers,
  Newspaper
} from 'lucide-react';

export const historyModules = [
  { 
    id: 1, 
    title: 'Ancient Indian History', 
    icon: Landmark, 
    badge: '650+ Questions',
    desc: 'Prehistoric era, Indus Valley, Vedic Age, Mahajanapadas, Mauryan Empire, Guptas, Harsha, Sangam period & South Indian dynasties.', 
    category: 'Ancient India' 
  },
  { 
    id: 2, 
    title: 'Medieval Indian History', 
    icon: Sword, 
    badge: '550+ Questions',
    desc: 'Tripartite struggle, Delhi Sultanate, Vijayanagara & Bahmani kingdoms, Mughal administrative system, Marathas, Bhakti & Sufi traditions.', 
    category: 'Medieval India' 
  },
  { 
    id: 3, 
    title: 'Modern Indian History', 
    icon: Flag, 
    badge: '950+ Questions',
    desc: 'Advent of Europeans, British revenue systems, 1857 Revolt, socio-religious reforms, Indian National Congress, and Gandhian mass movements.', 
    category: 'Modern India' 
  },
  { 
    id: 4, 
    title: 'Post-Independence India', 
    icon: Building2, 
    badge: '250+ Questions',
    desc: 'Integration of princely states, linguistic reorganization, five-year plans, foreign policy & Non-Aligned Movement, and constitutional evolution.', 
    category: 'Post-Independence' 
  },
  { 
    id: 5, 
    title: 'Indian Art & Culture', 
    icon: Palette, 
    badge: '600+ Questions',
    desc: 'Temple & cave architecture (Nagara, Dravida, Vesara), rock-cut caves, sculptures, classical dances, music, schools of painting & UNESCO sites.', 
    category: 'Art & Culture' 
  },
  { 
    id: 6, 
    title: 'Detailed Analytical Explanations', 
    icon: FileCheck2, 
    badge: '100% Solved',
    desc: 'Every single question includes a comprehensive explanation breaking down why the correct option is right and the underlying historical context.', 
    category: 'Solutions' 
  },
  { 
    id: 7, 
    title: 'Option Elimination & Traps', 
    icon: HelpCircle, 
    badge: 'Exam Strategy',
    desc: 'Master UPSC elimination strategies, identify misleading distractors, extreme wordings, and subtle UPSC traps.', 
    category: 'Technique' 
  },
  { 
    id: 8, 
    title: 'Chronology & Timeline Charts', 
    icon: Clock, 
    badge: 'Revision Asset',
    desc: 'High-yield timeline tables, dynasty sequences, treaties, and battles for rapid memorization and last-minute revision.', 
    category: 'Chronology' 
  }
];

export const geographyModules = [
  { 
    id: 101, 
    title: 'Physical Geography', 
    icon: Mountain, 
    badge: '750+ Questions',
    desc: 'Geomorphology, Earth’s interior, plate tectonics, vulcanism, climatology, cyclones, pressure belts, and ocean currents.', 
    category: 'Physical Geography' 
  },
  { 
    id: 102, 
    title: 'Indian Geography', 
    icon: MapPin, 
    badge: '900+ Questions',
    desc: 'Himalayan & Peninsular drainage, monsoon mechanism, El Niño, agro-climatic zones, soils, mineral belts, and industries.', 
    category: 'Indian Geography' 
  },
  { 
    id: 103, 
    title: 'World Geography', 
    icon: Globe, 
    badge: '550+ Questions',
    desc: 'Major mountain ranges, straits, tectonic trenches, desert formations, global biomes, and economic resource distribution.', 
    category: 'World Geography' 
  },
  { 
    id: 104, 
    title: 'Human & Economic Geography', 
    icon: Navigation, 
    badge: '400+ Questions',
    desc: 'Demographic trends, urbanization, migration patterns, industrial clusters, dedicated freight corridors, and major ports.', 
    category: 'Economic Geography' 
  },
  { 
    id: 105, 
    title: 'Environment & Ecology', 
    icon: Trees, 
    badge: '400+ Questions',
    desc: 'Ecosystem dynamics, biodiversity hotspots, Ramsar wetlands, Biosphere reserves, wildlife sanctuaries, and COP climate treaties.', 
    category: 'Environment' 
  },
  { 
    id: 106, 
    title: 'Map Revision & Critical Locations', 
    icon: Compass, 
    badge: 'High Yield',
    desc: 'High-yield UPSC map pointings: strategic passes, river tributaries, national parks, conflict zones, and maritime chokepoints.', 
    category: 'Map Practice' 
  }
];

export const megaBundleModules = [
  {
    id: 201,
    title: 'NCERTs Class 6 to 12 Complete Set',
    icon: BookOpen,
    badge: 'All Subjects',
    desc: 'Complete NCERTs in searchable PDF format for Science, Social Science, History, Geography, Political Science, and Economics.',
    category: 'Foundations'
  },
  {
    id: 202,
    title: 'Standard Reference Books & Notes',
    icon: Layers,
    badge: 'Topper Notes',
    desc: 'High-yield theory compilations for Indian Polity, Modern History, Geography, Economy, Ethics & Integrity, and CSAT.',
    category: 'Standard Books'
  },
  {
    id: 203,
    title: '30,000+ Topic-Wise PYQ Books',
    icon: Landmark,
    badge: '1995–2024 Solved',
    desc: 'Complete chapter-wise previous year question banks with in-depth analytical explanations for Prelims & Mains.',
    category: 'Question Bank'
  },
  {
    id: 204,
    title: 'Exam-Wise Special Collections',
    icon: Flag,
    badge: 'All Govt. Exams',
    desc: 'Dedicated curated question series for UPSC CSE, State PCS (UPPSC, BPSC, MPPSC), SSC CGL/CHSL, Railways & Defence.',
    category: 'Exam Specific'
  },
  {
    id: 205,
    title: 'Daily Newspapers (The Hindu & Express)',
    icon: Newspaper,
    badge: 'Every Morning',
    desc: 'Fresh PDF editions of leading national dailies uploaded every morning, along with monthly current affairs compilations.',
    category: 'Daily Updates'
  },
  {
    id: 206,
    title: 'Maps, Atlas & Essay Compilations',
    icon: Globe,
    badge: 'Visual Assets',
    desc: 'High-yield thematic map pointings (India & World), model essays, disaster management, and governance case studies.',
    category: 'Special Modules'
  }
];
