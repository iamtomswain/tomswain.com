export const site = {
  name: 'Tom Swain',
  role: 'Product Designer & Founder',
  location: 'Chandler, Arizona',
  email: 'tom@tomswain.com',
  avatar: '/tom.jpg',
  socials: {
    linkedin: 'https://linkedin.com/in/thomascswain',
    github: 'https://github.com/',
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

export const navLinks: NavLink[] = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact', cta: true },
];
