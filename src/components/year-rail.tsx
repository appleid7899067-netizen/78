import { ERAS, NOW_YEAR, copy, type Lang } from "@/lib/eras";
import { cn } from "@/lib/utils";

export function YearRail({
  selectedId,
  lang,
  onSelect,
}: {
  selectedId: string;
  lang: Lang;
  onSelect: (id: string) => void;
}) {
  const selected = ERAS.find((e) => e.id === selectedId) ?? ERAS[0];

  return (
    <div className="w-full">
      <div className="mb-3 flex items-end justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-subtle">2026 — 2044</p>
        <p className="font-mono text-xs tabular-nums text-muted-foreground">
          {selected.year}–{selected.yearEnd}
        </p>
      </div>
      <div className="relative">
        <div aria-hidden="true" className="absolute top-4 right-4 left-4 h-px bg-border" />
        <ol className="relative grid grid-cols-5 gap-1">
          {ERAS.map((era) => {
            const active = era.id === selectedId;
            const isNow = era.year === NOW_YEAR;
            const label = copy(era, lang);
            return (
              <li key={era.id} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => onSelect(era.id)}
                  className={cn(
                    "relative z-[1] flex size-8 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)]",
                    active
                      ? "scale-110 border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground",
                  )}
                  aria-current={active ? "step" : undefined}
                  aria-label={`${era.year} ${label.title}`}
                >
                  <span className="font-mono text-xs tabular-nums">{String(era.year).slice(2)}</span>
                </button>
                <span
                  className={cn(
                    "mt-2 max-w-16 text-center text-xs leading-snug",
                    active ? "text-foreground" : "text-subtle",
                  )}
                >
                  {isNow ? (lang === "th" ? "ตอนนี้" : "Now") : era.year}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
