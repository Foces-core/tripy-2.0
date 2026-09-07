"use client";

export type Toast = { id: number; msg: string; kind: "ok" | "err" };

export function ToastStack({ toasts }: { toasts: Toast[] }) {
  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 space-y-2 px-4"
    >
      {toasts.map((t) => (
        <p
          key={t.id}
          role={t.kind === "err" ? "alert" : "status"}
          className={`rounded-xl border p-3 text-center text-sm font-bold shadow-lg ${
            t.kind === "err"
              ? "border-red-400/60 bg-red-950/95 text-red-100"
              : "border-[#d8a84e]/60 bg-[#4a1420]/95 text-[#f4e8c6]"
          }`}
        >
          {t.msg}
        </p>
      ))}
    </div>
  );
}
