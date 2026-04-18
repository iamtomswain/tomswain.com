import { site } from '../data/site';
import { PhotoCard } from './PhotoCard';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <span className="eyebrow">About</span>
        <div className="about__grid">
          <PhotoCard src={site.avatar} name={site.name} role={site.role} />
          <div className="bio">
            <p>
              <strong>I design and ship complete products.</strong>{' '}
              <span className="muted">
                Not features, not components. Products. From the first decision about what should
                exist, through the system architecture, user flows, brand identity, and
                go-to-market.
              </span>
            </p>
            <p>
              <strong>I work with AI as an accelerator for execution</strong>{' '}
              <span className="muted">
                the same way a product leader works with an engineering team. My value is not in
                writing code from memory. It is in knowing what should exist, making the right
                decisions at every layer, and shipping products that work.
              </span>
            </p>
            <p>
              <strong>Taste, judgment, and product architecture.</strong>{' '}
              <span className="muted">
                I am strongest where product thinking, design systems, and brand identity converge.
                The decisions that determine whether a product feels right, communicates clearly,
                and earns trust.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
