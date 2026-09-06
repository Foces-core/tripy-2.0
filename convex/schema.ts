import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  state: defineTable({
    key: v.string(), // "event"
    live: v.boolean(),
    openDays: v.object({ day1: v.boolean(), day2: v.boolean(), day3: v.boolean() }),
    scores: v.object({ cc1: v.number(), cc2: v.number() }),
    volunteerPw: v.string(),
    adminPw: v.string(),
  }).index("by_key", ["key"]),
  scores_log: defineTable({
    lab: v.string(),
    pts: v.number(),
    question: v.string(),
    by: v.string(),
    day: v.number(),
  }),
});
