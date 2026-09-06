import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s) return null;
    const { volunteerPw, adminPw, ...pub } = s as any;
    return pub;
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const ex = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (ex) return ex._id;
    return await ctx.db.insert("state", {
      key: "event",
      live: false,
      openDays: { 1: true, 2: false, 3: false },
      scores: { cc1: 0, cc2: 0 },
      volunteerPw: "vol-877b7d",
      adminPw: "admin-bd7c6bfb",
    });
  },
});

export const checkRole = query({
  args: { pw: v.string() },
  handler: async (ctx, { pw }) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s) return null;
    if (pw === (s as any).adminPw) return "admin";
    if (pw === (s as any).volunteerPw) return "volunteer";
    return null;
  },
});

export const setLive = mutation({
  args: { live: v.boolean(), pw: v.string() },
  handler: async (ctx, { live, pw }) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s || pw !== (s as any).adminPw) throw new Error("admin only");
    await ctx.db.patch(s._id, { live });
  },
});

export const setDay = mutation({
  args: { day: v.number(), open: v.boolean(), pw: v.string() },
  handler: async (ctx, { day, open, pw }) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s || pw !== (s as any).adminPw) throw new Error("admin only");
    await ctx.db.patch(s._id, { openDays: { ...(s as any).openDays, [day]: open } });
  },
});

export const addScore = mutation({
  args: { lab: v.string(), pts: v.number(), question: v.string(), by: v.string(), day: v.number(), pw: v.string() },
  handler: async (ctx, a) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s) throw new Error("no event");
    const ok = a.pw === (s as any).volunteerPw || a.pw === (s as any).adminPw;
    if (!ok) throw new Error("bad password");
    const scores = { ...(s as any).scores };
    if (a.lab === "cc1") scores.cc1 += a.pts; else scores.cc2 += a.pts;
    await ctx.db.patch(s._id, { scores });
    await ctx.db.insert("scores_log", { lab: a.lab, pts: a.pts, question: a.question, by: a.by, day: a.day });
  },
});

export const resetScores = mutation({
  args: { pw: v.string() },
  handler: async (ctx, { pw }) => {
    const s = await ctx.db.query("state").withIndex("by_key", (q) => q.eq("key", "event")).first();
    if (!s || pw !== (s as any).adminPw) throw new Error("admin only");
    await ctx.db.patch(s._id, { scores: { cc1: 0, cc2: 0 } });
  },
});
