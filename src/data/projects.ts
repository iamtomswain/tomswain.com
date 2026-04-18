export type Project = {
  name: string;
  tagline: string;
  href: string;
  image: string;
  imageMobile: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    name: 'FounderLock',
    tagline: 'Brand governance SaaS',
    href: 'https://founderlock.ai',
    image: '/portfolio-founderlock.png',
    imageMobile: '/portfolio-founderlock-mobile.png',
    imageAlt: 'FounderLock product screenshot',
  },
  {
    name: 'Strict Mode',
    tagline: 'AI-orchestrated engineering',
    href: 'https://strictmode.ai',
    image: '/portfolio-strictmode.png',
    imageMobile: '/portfolio-strictmode-mobile.png',
    imageAlt: 'Strict Mode product screenshot',
  },
];
