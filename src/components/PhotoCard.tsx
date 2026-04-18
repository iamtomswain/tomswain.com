import { StatusBadge } from './StatusBadge';

type PhotoCardProps = {
  src: string;
  name: string;
  role: string;
  status?: string;
};

export function PhotoCard({ src, name, role, status }: PhotoCardProps) {
  return (
    <div className="photo-card">
      <img src={src} alt={name} />
      <div className="photo-card__meta">
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
        {status ? <StatusBadge label={status} /> : null}
      </div>
    </div>
  );
}
