import { MessageSquare } from "lucide-react";
import { Spark } from "@/components/spark";
import { Button } from "@/components/ui/button";
import { copy, formatSpeed, type Era, type Lang } from "@/lib/eras";
import { cn } from "@/lib/utils";

function Metric({ label, value, bar }: { label: string; value: string; bar?: number }) {
  return (
    <div className="rounded-[16px] border border-border bg-secondary/30 p-3">
      <p className="text-xs uppercase tracking-[0.14em] text-subtle">{label}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-foreground">{value}</p>
      {typeof bar === "number" ? (
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)]"
            style={{ width: `${Math.min(100, Math.max(4, bar))}%` }}
          />
        </div>
      ) : null}
    </div>
  );
}

export function EraPanel({
  era,
  lang,
  onAsk,
}: {
  era: Era;
  lang: Lang;
  onAsk: (prompt: string) => void;
}) {
  const c = copy(era, lang);
  const th = lang === "th";

  return (
    <article key={era.id} className="lumen-stagger">
      <p className="text-xs uppercase tracking-[0.18em] text-subtle">{c.range}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-balance sm:text-4xl">{c.title}</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">{c.thesis}</p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        <Metric label={th ? "สกิล" : "Skills"} value={`${era.skills}+`} bar={(era.skills / 200) * 100} />
        <Metric label={th ? "ความแม่น" : "Accuracy"} value={`${era.accuracy}%`} bar={era.accuracy} />
        <Metric label={th ? "ความเร็ว" : "Speed"} value={formatSpeed(era.speedMs, lang)} />
      </div>

      <div className="mt-6 rounded-[20px] border border-border bg-card p-4">
        <p className="text-xs uppercase tracking-[0.14em] text-subtle">{th ? "จำนวนสกิลตามปี" : "Skills over years"}</p>
        <Spark />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="rounded-[20px] border border-border bg-card p-4">
          <h3 className="text-xs uppercase tracking-[0.14em] text-subtle">{th ? "ได้" : "Gained"}</h3>
          <ul className="mt-3 space-y-2">
            {c.gained.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[20px] border border-border bg-card p-4">
          <h3 className="text-xs uppercase tracking-[0.14em] text-subtle">{th ? "ยังไม่ได้" : "Not yet"}</h3>
          <ul className="mt-3 space-y-2">
            {c.notYet.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-subtle" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-subtle">{th ? "งานที่ออกมา" : "Products"} · {c.products.join(" · ")}</p>
        </section>
      </div>

      <section className="mt-4 rounded-[20px] border border-border bg-card p-4">
        <h3 className="text-xs uppercase tracking-[0.14em] text-subtle">{th ? "ตัวอย่างสั้น" : "A short example"}</h3>
        <div className="mt-3 space-y-2">
          <p className={cn("rounded-[12px] bg-secondary/60 px-3 py-2 text-sm")}>
            <span className="text-subtle">{th ? "คุณ" : "You"} · </span>
            {c.exampleAsk}
          </p>
          <p className="rounded-[12px] border border-border px-3 py-2 text-sm text-muted-foreground">
            <span className="text-subtle">Agent · </span>
            {c.exampleReply}
          </p>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="mt-4 h-11 w-full rounded-full sm:w-auto"
          onClick={() =>
            onAsk(
              th
                ? `อธิบายยุค ${era.year}–${era.yearEnd} ให้เรียว ๆ: ได้อะไร ยังขาดอะไร และทำไมคนถึงควรระวัง`
                : `Explain the ${era.year}–${era.yearEnd} era leanly: what is gained, what is still missing, and what to watch.`,
            )
          }
        >
          <MessageSquare className="size-4" />
          {th ? "ถามยุคนี้กับ Agent" : "Ask the agent about this era"}
        </Button>
      </section>
    </article>
  );
}
