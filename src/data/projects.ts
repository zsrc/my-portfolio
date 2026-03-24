export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  nda?: boolean;
  slug: string;
  gridTitle: string;
  gridDescription: string;
  overview: string;
  contribution: string;
  team: string;
  year: string;
  fullBleedImage: string;
  process: string;
  process2: string;
  images: string[];
  outcome: string;
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
const loremShort = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const loremShort2 = 'Phasellus euismod nisl eget ultricies tincidunt. Nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod nisl eget ultricies tincidunt, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.';
const placeholderImages = [
  '/images/placeholder-1.jpg',
  '/images/placeholder-2.jpg',
  '/images/placeholder-3.jpg',
  '/images/placeholder-4.jpg',
  '/images/placeholder-5.jpg',
  '/images/placeholder-6.jpg',
];

export const projects: Project[] = [
  {
    title: 'LearnPath — AI',
    subtitle: 'Adaptive learning platform',
    description: 'Designed an AI-powered adaptive learning platform that personalises educational content to individual learners. Led end-to-end UX from research to high-fidelity prototypes.',
    tags: ['UX Design', 'Design System', 'AI', 'B2B'],
    image: '/images/projects/learnpath.png',
    nda: true,
    slug: 'learnpath-ai',
    gridTitle: 'LearnPath — AI',
    gridDescription: 'Adaptive learning platform',
    overview: lorem,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2024',
    fullBleedImage: '/images/placeholder-full.jpg',
    process: loremShort,
    process2: loremShort2,
    images: placeholderImages,
    outcome: lorem,
  },
  {
    title: 'Rolla Health',
    subtitle: 'Wellness & habit tracking app',
    description: 'Full product design for a wellness and habit-tracking mobile app — from zero to launch. Defined the visual language, design system, and core user flows for iOS and Android.',
    tags: ['Mobile', 'iOS', 'Android', 'Design System'],
    image: '/images/projects/rolla.png',
    liveUrl: '#',
    slug: 'rolla-health',
    gridTitle: 'Rolla Health',
    gridDescription: 'Wellness & habit tracking app',
    overview: lorem,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2024',
    fullBleedImage: '/images/placeholder-full.jpg',
    process: loremShort,
    process2: loremShort2,
    images: placeholderImages,
    outcome: lorem,
  },
  {
    title: 'QuizCraft UX',
    subtitle: 'Interactive learning conversion',
    description: 'Redesigned the core quiz and content creation flow to improve conversion and engagement. Conducted usability testing and iterated on findings to reduce friction significantly.',
    tags: ['UX Research', 'Interaction Design', 'Prototyping'],
    image: '/images/projects/quizcraft.png',
    liveUrl: '#',
    slug: 'quizcraft-ux',
    gridTitle: 'QuizCraft UX',
    gridDescription: 'Interactive learning conversion',
    overview: lorem,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2023',
    fullBleedImage: '/images/placeholder-full.jpg',
    process: loremShort,
    process2: loremShort2,
    images: placeholderImages,
    outcome: lorem,
  },
  {
    title: 'Photon Therapeutics',
    subtitle: 'Global medical device launch',
    description: 'Led design for the global product launch of a medical device — website, app interfaces, and marketing materials aligned to regulatory and accessibility standards.',
    tags: ['Product Design', 'Medical', 'Web', 'Accessibility'],
    image: '/images/projects/photon.png',
    liveUrl: '#',
    slug: 'photon-therapeutics',
    gridTitle: 'Photon Therapeutics',
    gridDescription: 'Global medical device launch',
    overview: lorem,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2023',
    fullBleedImage: '/images/placeholder-full.jpg',
    process: loremShort,
    process2: loremShort2,
    images: placeholderImages,
    outcome: lorem,
  },
  {
    title: 'Grow Pharma',
    subtitle: 'Cannabis education platform',
    description: 'Designed a cannabis education and patient-guidance platform, navigating complex regulatory constraints while creating a clear, trustworthy user experience.',
    tags: ['UX Design', 'Content Strategy', 'Web'],
    image: '/images/projects/grow.png',
    liveUrl: '#',
    slug: 'grow-pharma',
    gridTitle: 'Grow Pharma',
    gridDescription: 'Cannabis education platform',
    overview: lorem,
    contribution: 'UX Design, Interaction Design, Prototyping',
    team: '2 Designers, 3 Engineers',
    year: '2022',
    fullBleedImage: '/images/placeholder-full.jpg',
    process: loremShort,
    process2: loremShort2,
    images: placeholderImages,
    outcome: lorem,
  },
];
