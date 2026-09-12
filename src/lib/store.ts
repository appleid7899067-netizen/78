import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/lib/eras";
import { uid } from "@/lib/utils";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
  model?: string;
};

export type Conversation = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  messages: ChatMessage[];
};

export type WorkspaceSlice = {
  conversations: Conversation[];
  activeId: string | null;
  language: Lang;
  modelMode: "auto" | string;
  lastModelId: string | null;
  selectedEraId: string;
};

type HorizonState = WorkspaceSlice & {
  hydrated: boolean;
  markHydrated: () => void;
  setLanguage: (language: Lang) => void;
  setModelMode: (mode: "auto" | string) => void;
  setLastModelId: (id: string | null) => void;
  setSelectedEraId: (id: string) => void;
  newConversation: () => string;
  setActive: (id: string) => void;
  deleteConversation: (id: string) => void;
  appendMessage: (conversationId: string, message: ChatMessage) => void;
  patchMessage: (conversationId: string, messageId: string, patch: Partial<ChatMessage>) => void;
  replaceWorkspace: (slice: WorkspaceSlice) => void;
};

function blankConversation(): Conversation {
  const now = Date.now();
  return {
    id: uid("chat"),
    title: "New chat",
    createdAt: now,
    updatedAt: now,
    messages: [],
  };
}

const emptySlice: WorkspaceSlice = {
  conversations: [],
  activeId: null,
  language: "th",
  modelMode: "auto",
  lastModelId: null,
  selectedEraId: "now",
};

export const useHorizonStore = create<HorizonState>()(
  persist(
    (set) => ({
      ...emptySlice,
      hydrated: false,
      markHydrated: () => set({ hydrated: true }),
      setLanguage: (language) => set({ language }),
      setModelMode: (modelMode) => set({ modelMode }),
      setLastModelId: (lastModelId) => set({ lastModelId }),
      setSelectedEraId: (selectedEraId) => set({ selectedEraId }),
      newConversation: () => {
        const convo = blankConversation();
        set((state) => ({
          conversations: [convo, ...state.conversations],
          activeId: convo.id,
        }));
        return convo.id;
      },
      setActive: (id) => set({ activeId: id }),
      deleteConversation: (id) =>
        set((state) => {
          const conversations = state.conversations.filter((c) => c.id !== id);
          const activeId = state.activeId === id ? (conversations[0]?.id ?? null) : state.activeId;
          return { conversations, activeId };
        }),
      appendMessage: (conversationId, message) =>
        set((state) => ({
          conversations: state.conversations.map((c) =>
            c.id === conversationId
              ? {
                  ...c,
                  updatedAt: Date.now(),
                  title:
                    c.messages.length === 0 && message.role === "user"
                      ? message.content.slice(0, 48) || c.title
                      : c.title,
                  messages: [...c.messages, message],
                }
              : c,
          ),
        })),
      patchMessage: (conversationId, messageId, patch) =>
        set((state) => ({
          conversations: state.conversations.map((c) =>
            c.id === conversationId
              ? {
                  ...c,
                  updatedAt: Date.now(),
                  messages: c.messages.map((m) => (m.id === messageId ? { ...m, ...patch } : m)),
                }
              : c,
          ),
        })),
      replaceWorkspace: (slice) => set({ ...slice }),
    }),
    {
      name: "horizon-workspace",
      partialize: (state) => ({
        conversations: state.conversations.slice(0, 24),
        activeId: state.activeId,
        language: state.language,
        modelMode: state.modelMode,
        lastModelId: state.lastModelId,
        selectedEraId: state.selectedEraId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);
