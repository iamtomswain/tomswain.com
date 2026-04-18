import { experience } from '../data/experience';

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Experience</span>
          <h2>
            Fifteen years.{' '}
            <span className="muted">Agencies, enterprise, independent, and now founder.</span>
          </h2>
        </div>
        <div className="exp-list">
          {experience.map((entry) => (
            <div className="exp-card" key={`${entry.org}-${entry.years}`}>
              <span className="exp-card__role">{entry.role}</span>
              <span className="exp-card__org">{entry.org}</span>
              <span className="exp-card__years">{entry.years}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
