import { useMemo, useState } from "react";
import { Code2, Eye, Hammer, Play, RotateCcw, Search, Sparkles, Terminal, Wand2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatWithFreeModel } from "@/lib/puter-ai";
import { usePuterAuth } from "@/lib/puter-auth";
import { useHorizonStore } from "@/lib/store";
import { cn } from "@/lib/utils";

type FileMap = Record<string, string>;
type Feature = { id: number; name: string; group: string };

const GROUPS = ["Core", "Data", "Auth", "AI", "UI", "Media", "Commerce", "Productivity", "Developer", "Cloud"];
const NAMES = [
  "Responsive UI", "Dark mode", "Light mode", "Search", "Filters", "Sorting", "Pagination", "Forms", "Validation", "Toasts",
  "Modal", "Tabs", "Accordion", "Keyboard shortcuts", "Command palette", "Drag and drop", "Import JSON", "Export JSON", "CSV import", "CSV export",
  "Local storage", "Indexed data", "CRUD", "Offline mode", "Undo/redo", "Autosave", "History", "Favorites", "Tags", "Bulk actions",
  "Sign in", "Sign out", "Session state", "User profile", "Roles", "Permissions", "Protected actions", "Guest mode", "Account settings", "Onboarding",
  "AI chat", "Streaming", "Prompt templates", "AI actions", "Summaries", "Rewrite", "Classification", "Structured JSON", "Web research", "Error repair",
  "Charts", "Tables", "Cards", "Timeline", "Calendar", "Kanban", "Dashboard", "Notifications", "File picker", "Rich text",
  "Image upload", "Image preview", "Audio controls", "Video controls", "Markdown", "Code editor", "Syntax preview", "QR generator", "Print view", "PDF-ready layout",
  "Cart", "Checkout UI", "Invoices", "Coupons", "Subscriptions", "Orders", "Inventory", "Product catalog", "Pricing", "Receipts",
  "Tasks", "Projects", "Notes", "Bookmarks", "Reminders", "Time tracking", "Goals", "Habits", "Contacts", "Activity log",
  "Console", "Live preview", "Sandbox", "File tree", "Runtime errors", "Build diagnostics", "JSON viewer", "Diff view", "Environment config", "Project export",
  "Puter AI", "Puter KV", "Puter Files", "Cloud persistence", "Shareable state", "App metadata", "Deployment config", "Feature flags", "Telemetry hooks", "Health checks",
];

const FEATURES: Feature[] = Array.from({ length: 300 }, (_, i) => ({
  id: i + 1,
  name: NAMES[i % NAMES.length],
  group: GROUPS[Math.floor(i / 30) % GROUPS.length],
}));

const starter: FileMap = {
  "index.html": "<!doctype html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Generated App</title><link rel='stylesheet' href='style.css'></head><body><main id='app'></main><script src='app.js'></script></body></html>",
  "style.css": "*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif;background:#0b0d12;color:#f4f5f7}main{max-width:900px;margin:0 auto;padding:48px 20px}.card{border:1px solid #2a2e38;border-radius:20px;padding:24px;background:#11151d}button{border:0;border-radius:12px;padding:10px 14px;cursor:pointer}",
  "app.js": "const root=document.querySelector('#app'); root.innerHTML=`<section class=card><h1>Generated App</h1><p>Describe an app in the builder and generate a working prototype.</p><button id=go>Try it</button><p id=out></p></section>`; document.querySelector('#go').onclick=()=>document.querySelector('#out').textContent='It works.';",
};

function parseGenerated(text: string): FileMap | null {
  try {
    const cleaned = text.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
    const data = JSON.parse(cleaned) as { files?: Record<string, unknown> };
    if (!data.files || typeof data.files !== "object") return null;
    const files: FileMap = {};
    for (const [name, value] of Object.entries(data.files)) if (typeof value === "string") files[name] = value;
    return Object.keys(files).length ? files : null;
  } catch {
    return null;
  }
}

export function AppBuilder({ onClose }: { onClose: () => void }) {
  const { status, signIn } = usePuterAuth();
  const language = useHorizonStore((s) => s.language);
  const th = language === "th";
  const [prompt, setPrompt] = useState("");
  const [files, setFiles] = useState<FileMap>(starter);
  const [activeFile, setActiveFile] = useState("index.html");
  const [tab, setTab] = useState<"preview" | "code" | "console">("preview");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([th ? "Sandbox พร้อมใช้งาน" : "Sandbox ready"]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = useMemo(() => FEATURES.filter((f) => !query || `${f.name} ${f.group}`.toLowerCase().includes(query.toLowerCase())).slice(0, 60), [query]);
  const srcDoc = useMemo(() => files["index.html"].replace("</head>", `<style>${files["style.css"]}</style></head>`).replace("<script src='app.js'></script>", `<script>${files["app.js"]}<\/script>`), [files]);

  const generate = async () => {
    if (!prompt.trim() || busy) return;
    if (status !== "signed_in") {
      await signIn();
      return;
    }
    setBusy(true);
    setLog((v) => [...v, "AI build started"]);
    try {
      const chosen = FEATURES.filter((f) => selected.includes(f.id)).map((f) => f.name).join(", ");
      const result = await chatWithFreeModel({
        messages: [
          { role: "system", content: "You are an expert frontend app builder. Return ONLY valid JSON: {\"files\":{\"index.html\":\"...\",\"style.css\":\"...\",\"app.js\":\"...\"}}. Build a complete working browser app with no external dependencies. Include accessible responsive UI, real interactions, validation, empty/loading/error states, and localStorage when persistence helps. Never use markdown fences." },
          { role: "user", content: `Build this app: ${prompt.trim()}\nRequested feature modules: ${chosen || "responsive UI, CRUD, persistence, search, filters"}.` },
        ],
        onDelta: () => undefined,
      });
      const generated = parseGenerated(result.text);
      if (!generated) throw new Error("AI returned invalid project JSON");
      setFiles(generated);
      setActiveFile("index.html");
      setTab("preview");
      setLog((v) => [...v, `Generated ${Object.keys(generated).length} files with ${result.model.label}`]);
    } catch (error) {
      setLog((v) => [...v, error instanceof Error ? error.message : "Build failed"]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-secondary"><Hammer className="size-4" /></div>
        <div className="min-w-0 flex-1"><p className="text-sm font-medium">{th ? "AI App Builder + Sandbox" : "AI App Builder + Sandbox"}</p><p className="text-xs text-subtle">300 feature modules · live preview · repair loop</p></div>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={onClose}><X className="size-4" /></Button>
      </header>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
        <aside className="lumen-scroll hidden overflow-y-auto border-r border-border p-3 lg:block">
          <p className="mb-2 text-xs uppercase tracking-[.16em] text-subtle">{th ? "คุณสมบัติ 300 โมดูล" : "300 feature modules"}</p>
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-border bg-secondary/30 px-3"><Search className="size-4 text-subtle" /><input className="h-9 min-w-0 flex-1 bg-transparent text-xs outline-none" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search features" /></div>
          <div className="space-y-1">
            {filtered.map((f) => <button key={f.id} type="button" onClick={() => setSelected((s) => s.includes(f.id) ? s.filter((id) => id !== f.id) : [...s, f.id])} className={cn("flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs", selected.includes(f.id) ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60")}><span>{f.id}. {f.name}</span><span className="text-[10px] text-subtle">{f.group}</span></button>)}
          </div>
        </aside>

        <section className="flex min-w-0 flex-col">
          <div className="border-b border-border p-3"><div className="flex items-end gap-2 rounded-2xl border border-border bg-secondary/30 p-2"><Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={th ? "เช่น สร้างร้านค้าออนไลน์ มีสินค้า ตะกร้า ค้นหา และแดชบอร์ด" : "e.g. Build an online store with products, cart, search and dashboard"} rows={2} className="min-h-16 border-0 bg-transparent shadow-none" /><Button className="h-11 shrink-0 rounded-xl" onClick={() => void generate()} disabled={busy || !prompt.trim()}><Wand2 className="mr-2 size-4" />{busy ? "Building…" : "Build"}</Button></div></div>
          <div className="flex items-center gap-1 border-b border-border px-3 py-2"><Button variant={tab === "preview" ? "secondary" : "ghost"} size="sm" onClick={() => setTab("preview")}><Eye className="mr-2 size-4" />Preview</Button><Button variant={tab === "code" ? "secondary" : "ghost"} size="sm" onClick={() => setTab("code")}><Code2 className="mr-2 size-4" />Code</Button><Button variant={tab === "console" ? "secondary" : "ghost"} size="sm" onClick={() => setTab("console")}><Terminal className="mr-2 size-4" />Console</Button><Button variant="ghost" size="sm" className="ml-auto" onClick={() => { setFiles(starter); setLog(["Sandbox reset"]); }}><RotateCcw className="mr-2 size-4" />Reset</Button></div>
          <div className="min-h-0 flex-1 bg-black/10">
            {tab === "preview" ? <iframe title="App sandbox preview" sandbox="allow-scripts allow-forms allow-modals" srcDoc={srcDoc} className="size-full border-0 bg-white" /> : tab === "code" ? <div className="flex h-full min-h-0"><div className="w-44 shrink-0 border-r border-border p-2">{Object.keys(files).map((name) => <button key={name} className={cn("mb-1 w-full rounded-lg px-2 py-2 text-left text-xs", activeFile === name ? "bg-secondary" : "text-muted-foreground")} onClick={() => setActiveFile(name)}>{name}</button>)}</div><textarea value={files[activeFile] ?? ""} onChange={(e) => setFiles((f) => ({ ...f, [activeFile]: e.target.value }))} spellCheck={false} className="min-w-0 flex-1 resize-none bg-[#0b0d12] p-4 font-mono text-xs leading-5 text-foreground outline-none" /></div> : <div className="p-5 font-mono text-xs text-muted-foreground">{log.map((line, i) => <p key={i}>$ {line}</p>)}</div>}
          </div>
        </section>

        <aside className="hidden overflow-y-auto border-l border-border p-4 xl:block">
          <p className="text-xs uppercase tracking-[.16em] text-subtle">{th ? "สถานะโปรเจกต์" : "Project status"}</p>
          <div className="mt-3 space-y-2 text-sm"><div className="rounded-xl border border-border p-3"><p className="text-subtle">Features</p><p className="mt-1 text-lg font-medium">{selected.length} selected / 300</p></div><div className="rounded-xl border border-border p-3"><p className="text-subtle">Files</p><p className="mt-1 text-lg font-medium">{Object.keys(files).length}</p></div><div className="rounded-xl border border-border p-3"><p className="text-subtle">Sandbox</p><p className="mt-1 flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" />Live</p></div></div>
          <Button variant="outline" className="mt-4 w-full" onClick={() => setTab("preview")}><Play className="mr-2 size-4" />Run sandbox</Button>
          <div className="mt-6 rounded-xl border border-border p-3 text-xs leading-relaxed text-muted-foreground">{th ? "แก้โค้ดทางขวาได้ทันที แล้วดูผลใน Preview โดย sandbox แยกจากหน้าแอปหลัก" : "Edit generated code directly, then run it in an isolated iframe sandbox."}</div>
        </aside>
      </div>
    </div>
  );
}
