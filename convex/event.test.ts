import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";

const modules = (
  import.meta as ImportMeta & { glob: (pattern: string) => Record<string, () => Promise<unknown>> }
).glob("./**/*.ts");

async function eventTest() {
  const t = convexTest(schema, modules);
  await t.run(async (ctx) => {
    await ctx.db.insert("state", {
      key: "event",
      live: true,
      openDays: { day1: true, day2: false, day3: false },
      scores: { cc1: 0, cc2: 0 },
      volunteerPw: "volunteer-secret",
      adminPw: "admin-secret",
    });
  });
  return t;
}

describe("event scoring", () => {
  test("returns only public state", async () => {
    const t = await eventTest();
    await expect(t.query(api.event.get, {})).resolves.toEqual({
      key: "event",
      live: true,
      openDays: { day1: true, day2: false, day3: false },
      scores: { cc1: 0, cc2: 0 },
    });
  });

  test("accepts an authorized score only during an open live day", async () => {
    const t = await eventTest();
    await t.mutation(api.event.addScore, {
      lab: "cc1",
      pts: 1,
      question: "Q1",
      day: 1,
      pw: "volunteer-secret",
    });
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({ scores: { cc1: 1, cc2: 0 } });
  });

  test("refuses bad credentials and closed days without changing scores", async () => {
    const t = await eventTest();
    const score = { lab: "cc2" as const, pts: 2 as const, question: "Q4", day: 2 as const };
    await expect(t.mutation(api.event.addScore, { ...score, pw: "wrong" })).rejects.toThrow();
    await expect(
      t.mutation(api.event.addScore, { ...score, pw: "admin-secret" }),
    ).rejects.toThrow();
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({ scores: { cc1: 0, cc2: 0 } });
  });

  test("limits event controls to administrators", async () => {
    const t = await eventTest();
    await expect(
      t.mutation(api.event.setLive, { live: false, pw: "volunteer-secret" }),
    ).rejects.toThrow();
    await t.mutation(api.event.setLive, { live: false, pw: "admin-secret" });
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({ live: false });
  });

  test("returns null before the event exists", async () => {
    const t = convexTest(schema, modules);
    await expect(t.query(api.event.get, {})).resolves.toBeNull();
    await expect(t.query(api.event.checkRole, { pw: "admin-secret" })).resolves.toBeNull();
    await expect(t.mutation(api.event.seed, {})).rejects.toThrow();
  });

  test("seed returns the existing state id", async () => {
    const t = await eventTest();
    const before = await t.query(api.event.get, {});
    const id = await t.mutation(api.event.seed, {});
    expect(id).toBeDefined();
    await expect(t.query(api.event.get, {})).resolves.toEqual(before);
  });

  test("identifies admin, volunteer, and unknown passwords", async () => {
    const t = await eventTest();
    await expect(t.query(api.event.checkRole, { pw: "admin-secret" })).resolves.toBe("admin");
    await expect(t.query(api.event.checkRole, { pw: "volunteer-secret" })).resolves.toBe(
      "volunteer",
    );
    await expect(t.query(api.event.checkRole, { pw: "nope" })).resolves.toBeNull();
  });

  test("opens and closes days for administrators only", async () => {
    const t = await eventTest();
    await expect(
      t.mutation(api.event.setDay, { day: 2, open: true, pw: "volunteer-secret" }),
    ).rejects.toThrow();
    await t.mutation(api.event.setDay, { day: 2, open: true, pw: "admin-secret" });
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({
      openDays: { day1: true, day2: true, day3: false },
    });
    await t.mutation(api.event.setDay, { day: 2, open: false, pw: "admin-secret" });
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({
      openDays: { day1: true, day2: false, day3: false },
    });
  });

  test("resets scores for administrators only", async () => {
    const t = await eventTest();
    await t.mutation(api.event.addScore, {
      lab: "cc1",
      pts: 1,
      question: "Q1",
      day: 1,
      pw: "volunteer-secret",
    });
    await expect(t.mutation(api.event.resetScores, { pw: "volunteer-secret" })).rejects.toThrow();
    await t.mutation(api.event.resetScores, { pw: "admin-secret" });
    await expect(t.query(api.event.get, {})).resolves.toMatchObject({
      scores: { cc1: 0, cc2: 0 },
    });
  });
});
