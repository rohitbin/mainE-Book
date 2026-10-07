import { 
  BookOpen, 
  Map, 
  Globe, 
  Landmark, 
  Sprout, 
  TrendingUp, 
  Wind,
  Users,
  AlertTriangle,
  Building,
  Coins,
  ShieldAlert
} from 'lucide-react';

export const bundleItems = [
  { id: 1, title: 'Ancient History', icon: BookOpen, desc: 'Complete coverage from prehistoric times to early medieval India.', category: 'History' },
  { id: 2, title: 'Medieval History', icon: Landmark, desc: 'Delhi Sultanate, Mughals, and regional kingdoms explained clearly.', category: 'History' },
  { id: 3, title: 'Modern History', icon: Users, desc: 'British conquest to India\'s independence movement.', category: 'History' },
  { id: 4, title: 'Art & Culture', icon: Building, desc: 'Architecture, literature, and arts of ancient and medieval India.', category: 'History' },
  { id: 5, title: 'Physical Geography', icon: Globe, desc: 'Geomorphology, climatology, and oceanography concepts.', category: 'Geography' },
  { id: 6, title: 'Indian Physical Geography', icon: Map, desc: 'Physiography, drainage, and climate of India.', category: 'Geography' },
  { id: 7, title: 'Human Geography', icon: Users, desc: 'Population, settlements, and economic activities.', category: 'Geography' },
  { id: 8, title: 'India: People & Economy', icon: TrendingUp, desc: 'Resources, agriculture, industries, and transport in India.', category: 'Geography' },
  { id: 9, title: 'Environment', icon: Sprout, desc: 'Ecology, biodiversity, climate change, and conservation.', category: 'Environment' },
  { id: 10, title: 'Indian Economic Development', icon: TrendingUp, desc: 'Post-independence economic policies and planning.', category: 'Economy' },
  { id: 11, title: 'Economy', icon: Coins, desc: 'Macroeconomics, banking, inflation, and fiscal policy.', category: 'Economy' },
  { id: 12, title: 'Disaster Management', icon: AlertTriangle, desc: 'Types of disasters, mitigation, and institutional framework.', category: 'Economy' }
];

export const categories = {
  History: ['Ancient History', 'Medieval History', 'Modern History', 'Art & Culture'],
  Geography: ['Physical Geography', 'Indian Physical Geography', 'Human Geography', 'India: People & Economy'],
  'Economy & Development': ['Economy', 'Indian Economic Development', 'Disaster Management'],
  Environment: ['Environment']
};
