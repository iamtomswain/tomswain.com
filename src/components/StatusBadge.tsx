type StatusBadgeProps = {
  label: string;
};

export function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <span className="status-badge">
      <span className="status-badge__dot" aria-hidden />
      {label}
    </span>
  );
}
