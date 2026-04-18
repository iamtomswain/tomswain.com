import { navLinks } from '../data/site';
import { Signature } from './Signature';

export function PillNav() {
  return (
    <nav className="pill-nav" aria-label="Primary">
      <a href="#top" className="pill-nav__logo" aria-label="Tom Swain — home">
        <Signature className="pill-nav__signature" />
      </a>
      <ul className="pill-nav__list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`pill-nav__link${link.cta ? ' pill-nav__link--cta' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
