import { useEffect, useState } from "react";
import { Hammer, MessageSquare } from "lucide-react";
import { AppBuilder } from "@/components/app-builder";
import { ChatDock, type QueuedPrompt } from "@/components/chat-dock";
import { EraPanel } from "@/components/era-panel";
import { AppMark } from "@/components/logo";
import { PuterAccount } from "@/components/puter-account";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { YearRail } from "@/components/year-rail";
import { APP_EDITION, APP_SHORT_NAME } from "@/lib/brand";
import { eraById } from "@/lib/eras";
import { shortModelLabel } from "@/lib/models";
import { useHorizonStore } from "@/lib/store";
import { uid } from "@/lib/utils";

export function Horizon() {
  const language = useHorizonStore((s) => s.language);
  const setLanguage = useHorizonStore((s) => s.setLanguage);
  const selectedEraId = useHorizonStore((s) => s.selectedEraId);
  const setSelectedEraId = useHorizonStore((s) => s.setSelectedEraId);
  const lastModelId = useHorizonStore((s) => s.lastModelId);
  const modelMode = useHorizonStore((s) => s.modelMode);
  const era = eraById(selectedEraId);
  const th = language === "th";
  const [wide, setWide] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [queued, setQueued] = useState<QueuedPrompt | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const ask = (prompt: string) => {
    setQueued({ id: uid("ask"), text: prompt });
    if (!wide) setChatOpen(true);
  };

  const dock = <ChatDock queued={queued} onQueuedConsumed={() => setQueued(null)} />;
  const modelChip = modelMode === "auto" ? `${th ? "ออโต้" : "Auto"} · ${shortModelLabel(lastModelId)}` : shortModelLabel(modelMode);

  if (builderOpen) return <AppBuilder onClose={() => setBuilderOpen(false)} />;

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-[100dvh] flex-col bg-background">
        <header className="flex items-center gap-3 border-b border-border px-4 py-3">
          <AppMark className="size-8 shrink-0 text-brand" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{APP_SHORT_NAME}</p>
            <p className="truncate text-xs uppercase tracking-[0.16em] text-subtle">{APP_EDITION}</p>
          </div>
          <p className="hidden max-w-40 truncate text-xs text-subtle sm:block">{modelChip}</p>
          <Button variant="secondary" className="h-10 rounded-full" onClick={() => setBuilderOpen(true)}>
            <Hammer className="mr-2 size-4" />
            {th ? "สร้างแอพ" : "Build app"}
          </Button>
          <div className="flex rounded-full border border-border p-0.5">
            <button type="button" className={`h-9 min-w-11 rounded-full px-3 text-xs ${language === "th" ? "bg-secondary text-foreground" : "text-subtle"}`} onClick={() => setLanguage("th")}>TH</button>
            <button type="button" className={`h-9 min-w-11 rounded-full px-3 text-xs ${language === "en" ? "bg-secondary text-foreground" : "text-subtle"}`} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <Button size="icon" variant="secondary" className="size-10 rounded-full lg:hidden" onClick={() => setChatOpen(true)} aria-label={th ? "เปิดแชต" : "Open chat"}>
            <MessageSquare className="size-4" />
          </Button>
        </header>

        <div className="flex min-h-0 flex-1">
          <main className="lumen-scroll min-w-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">{th ? "แผนที่สมมติ · ไม่ใช่คำทำนาย" : "A speculative map · not a forecast"}</p>
              <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">{th ? "ภายใน 20 ปี Agent จะได้อะไรบ้าง" : "What an agent gains in twenty years"}</h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">{th ? "เดินทีละยุค จากตัวจัดไฟล์วันนี้ ไปจนถึงปัญญาทั่วไปที่ยังเป็นเครื่องหมายคำถาม" : "Walk era by era — from today’s file helper to a general intelligence that is still a question."}</p>
              <div className="mt-6 flex flex-wrap gap-2"><Button className="rounded-full" onClick={() => setBuilderOpen(true)}><Hammer className="mr-2 size-4" />{th ? "เปิด App Builder + Sandbox" : "Open App Builder + Sandbox"}</Button></div>

              <div className="mt-8 rounded-[24px] border border-border bg-card p-4 sm:p-5"><YearRail selectedId={selectedEraId} lang={language} onSelect={setSelectedEraId} /></div>
              <div className="mt-8"><EraPanel era={era} lang={language} onAsk={ask} /></div>
            </div>
          </main>

          {wide ? <aside className="flex w-[min(42vw,420px)] shrink-0 flex-col border-l border-border"><div className="border-b border-border p-3"><PuterAccount /></div><div className="min-h-0 flex-1">{dock}</div></aside> : null}
        </div>

        <Sheet open={!wide && chatOpen} onOpenChange={setChatOpen}>
          <SheetContent side="right" className="p-0"><SheetTitle className="sr-only">{th ? "แชต Agent" : "Agent chat"}</SheetTitle><div className="border-b border-border p-3 pr-12"><PuterAccount /></div><div className="min-h-0 flex-1">{!wide ? dock : null}</div></SheetContent>
        </Sheet>
      </div>
    </TooltipProvider>
  );
}
