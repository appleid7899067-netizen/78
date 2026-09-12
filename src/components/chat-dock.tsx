import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, Plus } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { PuterMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { copy, eraById, type Lang } from "@/lib/eras";
import { FREE_MODELS, shortModelLabel } from "@/lib/models";
import { chatWithFreeModel } from "@/lib/puter-ai";
import { usePuterAuth } from "@/lib/puter-auth";
import { useHorizonStore } from "@/lib/store";
import { cn, uid } from "@/lib/utils";

export type QueuedPrompt = { id: string; text: string };

function systemPrompt(lang: Lang, eraId: string) {
  const era = eraById(eraId);
  const c = copy(era, lang);
  return `You are Horizon, a calm guide inside SLIeQwneB. You walk a speculative 20-year map of agent capability (2026–2044). This is a thought experiment, not a forecast. Never use emoji. Be brief: short sections, no filler.
Reply in ${lang === "th" ? "Thai" : "English"} unless the user switches.
The visitor is looking at ${era.year}–${era.yearEnd}: "${c.title}". Thesis: ${c.thesis}
Gained: ${c.gained.join("; ")}.
Not yet: ${c.notYet.join("; ")}.
If asked about consciousness, rights, or meaning, treat them as open questions. Do not invent citations.`;
}

export function ChatDock({
  queued,
  onQueuedConsumed,
}: {
  queued: QueuedPrompt | null;
  onQueuedConsumed: () => void;
}) {
  const { status, signIn, pending: authPending } = usePuterAuth();
  const signedIn = status === "signed_in";
  const language = useHorizonStore((s) => s.language);
  const th = language === "th";
  const modelMode = useHorizonStore((s) => s.modelMode);
  const setModelMode = useHorizonStore((s) => s.setModelMode);
  const lastModelId = useHorizonStore((s) => s.lastModelId);
  const setLastModelId = useHorizonStore((s) => s.setLastModelId);
  const selectedEraId = useHorizonStore((s) => s.selectedEraId);
  const hydrated = useHorizonStore((s) => s.hydrated);
  const conversations = useHorizonStore((s) => s.conversations);
  const activeId = useHorizonStore((s) => s.activeId);
  const newConversation = useHorizonStore((s) => s.newConversation);
  const appendMessage = useHorizonStore((s) => s.appendMessage);
  const patchMessage = useHorizonStore((s) => s.patchMessage);

  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const seenQueue = useRef<string | null>(null);
  const convo = conversations.find((c) => c.id === activeId) ?? conversations[0];

  useEffect(() => {
    if (hydrated && conversations.length === 0) newConversation();
  }, [hydrated, conversations.length, newConversation]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [convo?.messages.length, busy]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    if (!signedIn) {
      setDraft(trimmed);
      await signIn();
      return;
    }
    let id = convo?.id;
    if (!id) id = newConversation();
    appendMessage(id, {
      id: uid("msg"),
      role: "user",
      content: trimmed,
      createdAt: Date.now(),
    });
    setDraft("");
    setBusy(true);
    const assistantId = uid("msg");
    appendMessage(id, {
      id: assistantId,
      role: "assistant",
      content: "",
      createdAt: Date.now(),
    });
    try {
      const history = (useHorizonStore.getState().conversations.find((c) => c.id === id)?.messages ?? [])
        .filter((m) => m.content.length > 0)
        .slice(-12)
        .map((m) => ({ role: m.role, content: m.content }));
      const result = await chatWithFreeModel({
        messages: [{ role: "system", content: systemPrompt(language, selectedEraId) }, ...history],
        pinnedModel: modelMode === "auto" ? null : modelMode,
        onDelta: (next) => patchMessage(id!, assistantId, { content: next }),
      });
      patchMessage(id, assistantId, { content: result.text, model: result.model.id });
      setLastModelId(result.model.id);
    } catch (err) {
      patchMessage(id, assistantId, {
        content:
          err instanceof Error
            ? err.message
            : th
              ? "โมเดลฟรียังตอบไม่ได้ ลองล็อกอิน Puter อีกครั้ง"
              : "No free model answered. Sign in with Puter and retry.",
      });
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (!queued || seenQueue.current === queued.id) return;
    seenQueue.current = queued.id;
    onQueuedConsumed();
    void send(queued.text);
  }, [queued]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(draft);
  };

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(draft);
    }
  };

  const modelHint =
    modelMode === "auto"
      ? `${th ? "อัตโนมัติ" : "Auto"} · ${shortModelLabel(lastModelId)}`
      : shortModelLabel(modelMode);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="text-sm font-medium">{th ? "ถาม Agent" : "Ask the agent"}</p>
          <p className="truncate text-xs text-subtle">{modelHint}</p>
        </div>
        <div className="flex items-center gap-1">
          <label className="sr-only" htmlFor="model-mode">
            Model
          </label>
          <select
            id="model-mode"
            value={modelMode}
            onChange={(e) => setModelMode(e.target.value)}
            className="h-9 max-w-40 rounded-full border border-border bg-secondary px-3 text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
          >
            <option value="auto">{th ? "เลือกฟรีอัตโนมัติ" : "Auto free model"}</option>
            {FREE_MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
          <Button
            size="icon"
            variant="ghost"
            className="size-9 rounded-full"
            onClick={() => newConversation()}
            aria-label={th ? "แชตใหม่" : "New chat"}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <div ref={scroller} className="lumen-scroll min-h-0 flex-1 overflow-y-auto px-4 py-4">
        {(convo?.messages.length ?? 0) === 0 ? (
          <div className="flex h-full min-h-40 flex-col justify-end gap-3">
            <p className="font-display text-2xl tracking-[-0.03em]">
              {th ? "เลือกปี แล้วถามให้เรียว" : "Pick a year. Ask lean."}
            </p>
            <p className="max-w-sm text-sm text-muted-foreground">
              {th
                ? "โมเดลฟรีจะถูกเลือกให้อัตโนมัติผ่านบัญชี Puter ของคุณ"
                : "A free model is chosen automatically on your Puter account."}
            </p>
          </div>
        ) : (
          <ol className="space-y-4">
            {convo?.messages.map((m) => (
              <li key={m.id} className={cn("max-w-[42rem]", m.role === "user" ? "ml-auto" : "")}>
                {m.role === "user" ? (
                  <p className="rounded-[16px] bg-secondary px-3.5 py-2.5 text-sm text-foreground">{m.content}</p>
                ) : m.content ? (
                  <div>
                    <Markdown text={m.content} />
                    {m.model ? <p className="mt-2 text-xs text-subtle">{shortModelLabel(m.model)}</p> : null}
                  </div>
                ) : (
                  <p className="lumen-shimmer text-sm">{th ? "กำลังเลือกโมเดลฟรี…" : "Picking a free model…"}</p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>

      <form onSubmit={onSubmit} className="border-t border-border p-3">
        {signedIn ? (
          <div className="flex items-end gap-2 rounded-[20px] border border-border bg-secondary/40 px-3 py-2">
            <Textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKey}
              placeholder={th ? "ถามยุคนี้…" : "Ask this era…"}
              rows={1}
              className="max-h-32 min-h-10 py-2"
              disabled={busy}
            />
            <Button
              type="submit"
              size="icon"
              className="mb-0.5 size-10 shrink-0 rounded-full"
              disabled={busy || !draft.trim()}
              aria-label={th ? "ส่ง" : "Send"}
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        ) : (
          <Button type="button" className="h-12 w-full rounded-full" onClick={() => void signIn()} disabled={authPending}>
            <PuterMark className="size-4" />
            {authPending
              ? th
                ? "รอ Puter…"
                : "Waiting for Puter…"
              : th
                ? "ล็อกอิน Puter เพื่อถามโมเดลฟรี"
                : "Sign in with Puter to use free models"}
          </Button>
        )}
      </form>
    </div>
  );
}
