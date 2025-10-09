// data/products.ts
export const products = [
  {
    slug: 'smart-lighting',
    title: 'Smart Lighting',
    blurb: 'Create scenes, schedules and voice control for energy-efficient lighting.',
    features: [
      'Dimmable and RGB modes',
      'App & voice control with Alexa / Google Home',
      'Energy saver schedules',
    ],
  },
  {
    slug: 'smart-sensors',
    title: 'Smart Sensors',
    blurb: 'Motion, door, temperature and water-leak sensors for safety and automation.',
    features: [
      'Real-time alerts',
      'Triggers for lighting / AC',
      'Battery health monitor',
    ],
  },
  {
    slug: 'curtain-control',
    title: 'Curtain & Blind Control',
    blurb: 'Automated motorized curtains with sunrise/sunset routines and remote control.',
    features: [
      'Quiet motor operation',
      'Scene integration',
      'Manual override supported',
    ],
  },
  {
    slug: 'security-solution',
    title: 'Security Solutions',
    blurb: 'CCTV and smart locks integrated with mobile apps for complete peace of mind.',
    features: ['HD video surveillance', 'Smart locks & door sensors', 'Cloud storage access'],
  },
] as const;
