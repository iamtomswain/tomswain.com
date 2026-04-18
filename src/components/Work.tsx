import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">Current Work</span>
          <h2>
            Two products. Both live. <span className="muted">Shipped as a solo founder.</span>
          </h2>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
