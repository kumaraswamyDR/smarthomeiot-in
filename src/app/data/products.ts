// data/products.ts
export const products = [
  {
    slug: 'smart-lighting',
    title: 'Smart Lighting',
    blurb: 'Create scenes, schedules and voice control for energy-efficient lighting.',
    image: "https://images.unsplash.com/photo-1600585154207-6cdb9e3e1b9d?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581091012184-7c54d4b62f7c?auto=format&fit=crop&w=800&q=80",
    features: [
      'Real-time alerts',
      'Triggers for lighting / AC',
      'Battery health monitor',
    ],
  },
  {
    slug: 'curtain-control',
    title: 'Curtain & Blind Control',
    image: "https://images.unsplash.com/photo-1611605698335-d2b1c1dfbf68?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1611605698335-d2b1c1dfbf68?auto=format&fit=crop&w=800&q=80",
    blurb: 'CCTV and smart locks integrated with mobile apps for complete peace of mind.',
    features: ['HD video surveillance', 'Smart locks & door sensors', 'Cloud storage access'],
  },
] as const;
