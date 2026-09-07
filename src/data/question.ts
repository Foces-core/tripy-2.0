// Shared question shape. Statements only — no hints or answers here.
export type Question = {
  label: string;
  pts: 1 | 2 | 4;
  tier: "easy" | "medium" | "hard";
  statement: string;
};
