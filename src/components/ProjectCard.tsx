import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={project.href} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-card__visual">
        <picture>
          <source media="(max-width: 640px)" srcSet={project.imageMobile} />
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-card__image"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="project-card__meta">
        <div>
          <h3>{project.name}</h3>
          <p>{project.tagline}</p>
        </div>
        <span className="project-card__link">View&nbsp;↗</span>
      </div>
    </a>
  );
}
