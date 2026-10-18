import { 
  Landmark, 
  Sword, 
  Flag, 
  Building2, 
  Palette, 
  HelpCircle, 
  Clock, 
  FileCheck2 
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

export const bookStats = [
  { value: '3,000+', label: 'Questions & PYQs', sub: 'From UPSC & State PSCs' },
  { value: '5 Core', label: 'History Pillars', sub: 'Ancient to Post-Independence' },
  { value: '100%', label: 'Detailed Explanations', sub: 'Option-wise breakdown' },
  { value: '17.5 MB', label: 'Instant PDF Download', sub: 'Lifetime offline access' }
];

export const sampleQuestions = [
  {
    exam: "UPSC CSE Prelims",
    year: "History",
    question: "With reference to ancient Indian History, consider the following statements regarding the 'Dhamma' of Ashoka:\n1. It was a synthesis of all religions and contained no sectarian bias.\n2. Ashoka appointed Dhamma Mahamattas to spread the message of Dhamma across and outside his empire.\nWhich of the statements given above is/are correct?",
    options: [
      { key: "A", text: "1 only" },
      { key: "B", text: "2 only" },
      { key: "C", text: "Both 1 and 2", correct: true },
      { key: "D", text: "Neither 1 nor 2" }
    ],
    explanation: "Both statements are correct. Ashoka's Dhamma was not a formal religion or religious doctrine; rather, it was a code of ethical conduct, moral duty, and social responsibility inspired by universal human values. Major Rock Edict V mentions the creation and appointment of 'Dhamma Mahamattas' in his 14th regnal year to propagate Dhamma among all sects and even beyond the imperial frontiers."
  },
  {
    exam: "UPSC CSE Prelims",
    year: "Modern History",
    question: "Why was the Simon Commission boycotted by the Indian National Congress in 1927?",
    options: [
      { key: "A", text: "It supported the Muslim League's demand for separate electorates" },
      { key: "B", text: "It did not include any Indian member in the commission", correct: true },
      { key: "C", text: "It recommended the partition of Bengal" },
      { key: "D", text: "It proposed abolition of provincial autonomy" }
    ],
    explanation: "The Indian Statutory Commission (commonly known as the Simon Commission) was appointed by the British Government under Sir John Simon in November 1927. The exclusion of all Indians from an all-white 7-member commission that was tasked with deciding India's constitutional destiny was seen as an insult to national self-respect, leading to universal boycott by the Congress, Muslim League, and Liberal Federation."
  }
];
