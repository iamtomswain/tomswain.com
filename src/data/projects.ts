export type Project = {
  name: string;
  tagline: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    name: 'FounderLock',
    tagline: 'Brand governance SaaS',
    href: 'https://founderlock.ai',
    image: '/portfolio-founderlock.png',
    imageAlt: 'FounderLock product screenshot',
  },
  {
    name: 'Strict Mode',
    tagline: 'AI-orchestrated engineering',
    href: 'https://strictmode.ai',
    image: '/portfolio-strictmode.png',
    imageAlt: 'Strict Mode product screenshot',
  },
];
