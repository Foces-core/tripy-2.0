// Public question bank index. No hints, solutions, or answers in this module,
// so the student page bundle never contains them.
import type { Question } from "./question";
import { DAY1 } from "./day1";
import { DAY2 } from "./day2";
import { DAY3 } from "./day3";

export type { Question };
export const QUESTIONS: Record<number, Question[]> = { 1: DAY1, 2: DAY2, 3: DAY3 };
