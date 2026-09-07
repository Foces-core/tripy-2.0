import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  dayValidator,
  labValidator,
  openDaysValidator,
  scoresValidator,
  scoreValidator,
} from "./schema";

const roleValidator = v.union(v.literal("admin"), v.literal("volunteer"), v.null());
const publicStateValidator = v.object({
  key: v.literal("event"),
  live: v.boolean(),
  openDays: openDaysValidator,
  scores: scoresValidator,
});

export const get = query({
  args: {},
  returns: v.union(publicStateValidator, v.null()),
  handler: async (ctx) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state) return null;
    return { key: state.key, live: state.live, openDays: state.openDays, scores: state.scores };
  },
});

export const seed = mutation({
  args: {},
  returns: v.id("state"),
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (existing) return existing._id;
    throw new Error(
      "Event is not configured. An administrator must create its state through the Convex dashboard.",
    );
  },
});

export const checkRole = query({
  args: { pw: v.string() },
  returns: roleValidator,
  handler: async (ctx, { pw }) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state) return null;
    if (pw === state.adminPw) return "admin";
    if (pw === state.volunteerPw) return "volunteer";
    return null;
  },
});

export const setLive = mutation({
  args: { live: v.boolean(), pw: v.string() },
  returns: v.null(),
  handler: async (ctx, { live, pw }) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state || pw !== state.adminPw) throw new Error("Admin access required.");
    await ctx.db.patch(state._id, { live });
    return null;
  },
});

export const setDay = mutation({
  args: { day: dayValidator, open: v.boolean(), pw: v.string() },
  returns: v.null(),
  handler: async (ctx, { day, open, pw }) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state || pw !== state.adminPw) throw new Error("Admin access required.");
    const dayKey = `day${day}` as "day1" | "day2" | "day3";
    await ctx.db.patch(state._id, { openDays: { ...state.openDays, [dayKey]: open } });
    return null;
  },
});

export const addScore = mutation({
  args: {
    lab: labValidator,
    pts: scoreValidator,
    question: v.string(),
    day: dayValidator,
    pw: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state) throw new Error("Event is not configured.");
    const by =
      args.pw === state.adminPw ? "admin" : args.pw === state.volunteerPw ? "volunteer" : null;
    if (!by) throw new Error("Volunteer or admin access required.");
    const dayKey = `day${args.day}` as "day1" | "day2" | "day3";
    if (!state.live || !state.openDays[dayKey])
      throw new Error("This day is not accepting scores.");
    const scores = { ...state.scores, [args.lab]: state.scores[args.lab] + args.pts };
    await ctx.db.patch(state._id, { scores });
    await ctx.db.insert("scores_log", {
      lab: args.lab,
      pts: args.pts,
      question: args.question,
      by,
      day: args.day,
    });
    return null;
  },
});

export const deductScore = mutation({
  args: {
    lab: labValidator,
    pts: scoreValidator,
    day: dayValidator,
    pw: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state || args.pw !== state.adminPw) throw new Error("Admin access required.");
    const scores = {
      ...state.scores,
      [args.lab]: Math.max(0, state.scores[args.lab] - args.pts),
    };
    await ctx.db.patch(state._id, { scores });
    await ctx.db.insert("scores_log", {
      lab: args.lab,
      pts: -args.pts,
      question: "correction",
      by: "admin",
      day: args.day,
    });
    return null;
  },
});

export const resetScores = mutation({
  args: { pw: v.string() },
  returns: v.null(),
  handler: async (ctx, { pw }) => {
    const state = await ctx.db
      .query("state")
      .withIndex("by_key", (q) => q.eq("key", "event"))
      .unique();
    if (!state || pw !== state.adminPw) throw new Error("Admin access required.");
    await ctx.db.patch(state._id, { scores: { cc1: 0, cc2: 0 } });
    return null;
  },
});
