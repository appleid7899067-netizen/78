import { getPuterKv, type PuterSDK } from "@/lib/puter";
import { useHorizonStore, type Conversation, type WorkspaceSlice } from "@/lib/store";

const KV_KEY = "slieqwneb:horizon:v1";

function clipText(text: string, max = 6_000) {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}\n\n[truncated]`;
}

export function snapshotWorkspace(): WorkspaceSlice {
  const state = useHorizonStore.getState();
  return {
    conversations: state.conversations.slice(0, 24).map((convo) => ({
      ...convo,
      messages: convo.messages.slice(-40).map((message) => ({
        id: message.id,
        role: message.role,
        content: clipText(message.content),
        createdAt: message.createdAt,
        model: message.model,
      })),
    })),
    activeId: state.activeId,
    language: state.language,
    modelMode: state.modelMode,
    lastModelId: state.lastModelId,
    selectedEraId: state.selectedEraId,
  };
}

function isSnapshot(value: unknown): value is WorkspaceSlice {
  if (!value || typeof value !== "object") return false;
  const record = value as WorkspaceSlice;
  return Array.isArray(record.conversations);
}

function sanitize(convo: Conversation): Conversation {
  return {
    ...convo,
    messages: convo.messages.map((m) => ({
      id: m.id,
      role: m.role,
      content: m.content,
      createdAt: m.createdAt,
      model: m.model,
    })),
  };
}

export async function pullWorkspace(puter: PuterSDK): Promise<WorkspaceSlice | null> {
  const kv = await getPuterKv(puter);
  const raw = await kv.get(KV_KEY);
  if (typeof raw === "string") {
    try {
      const parsed: unknown = JSON.parse(raw);
      return isSnapshot(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }
  return isSnapshot(raw) ? raw : null;
}

export async function pushWorkspace(puter: PuterSDK, snap = snapshotWorkspace()): Promise<void> {
  const kv = await getPuterKv(puter);
  await kv.set(KV_KEY, snap);
}

export function applyWorkspace(snap: WorkspaceSlice) {
  useHorizonStore.getState().replaceWorkspace({
    conversations: snap.conversations.map(sanitize),
    activeId: snap.activeId,
    language: snap.language === "en" ? "en" : "th",
    modelMode: snap.modelMode || "auto",
    lastModelId: snap.lastModelId ?? null,
    selectedEraId: snap.selectedEraId || "now",
  });
}
