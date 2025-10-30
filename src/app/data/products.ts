// src/data/products.ts
export const products = [
  {
    slug: "smart-lighting",
    title: "Smart Lighting",
    blurb:
      "Create scenes, schedules and voice control for energy-efficient lighting.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dimmable and RGB modes",
      "App & voice control with Alexa / Google Home",
      "Energy saver schedules",
    ],
  },
  {
    slug: "smart-sensors",
    title: "Smart Sensors",
    blurb:
      "Motion, door, temperature and water-leak sensors for safety and automation.",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time alerts",
      "Triggers for lighting / AC",
      "Battery health monitor",
    ],
  },
  {
    slug: "curtain-control",
    title: "Curtain & Blind Control",
    blurb:
      "Automated motorized curtains with sunrise/sunset routines and remote control.",
    image:
      "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg",
    features: [
      "Quiet motor operation",
      "Scene integration",
      "Manual override supported",
    ],
  },
  {
    slug: "security-solution",
    title: "Security Solutions",
    blurb:
      "CCTV and smart locks integrated with mobile apps for complete peace of mind.",
    image:
      "https://media.istockphoto.com/id/1187658587/photo/pressing-down-on-electronic-access-control-machine.jpg?s=2048x2048&w=is&k=20&c=Riw6CfPQIJpYLX1Zhb4U-ak5Cku3pAyQVu_olg5NHOg=",
    features: [
      "HD video surveillance",
      "Smart locks & door sensors",
      "Cloud storage access",
    ],
  },
] as const;
