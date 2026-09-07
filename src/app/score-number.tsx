export default function ScoreNumber({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span key={value} className={`score-pop tabular-nums ${className}`}>
      {value}
    </span>
  );
}
