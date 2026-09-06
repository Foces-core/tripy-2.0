import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const labValidator = v.union(v.literal("cc1"), v.literal("cc2"));
export const dayValidator = v.union(v.literal(1), v.literal(2), v.literal(3));
export const scoreValidator = v.union(v.literal(1), v.literal(2), v.literal(4));
export const openDaysValidator = v.object({
  day1: v.boolean(),
  day2: v.boolean(),
  day3: v.boolean(),
});
export const scoresValidator = v.object({ cc1: v.number(), cc2: v.number() });

export default defineSchema({
  state: defineTable({
    key: v.literal("event"),
    live: v.boolean(),
    openDays: openDaysValidator,
    scores: scoresValidator,
    volunteerPw: v.string(),
    adminPw: v.string(),
  }).index("by_key", ["key"]),
  scores_log: defineTable({
    lab: labValidator,
    pts: scoreValidator,
    question: v.string(),
    by: v.union(v.literal("admin"), v.literal("volunteer")),
    day: dayValidator,
  }),
});
