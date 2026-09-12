export type FreeModel = {
  id: string;
  label: string;
  vendor: string;
};

/** Flash / nano / lite models Puter serves without a developer API key. */
export const FREE_MODELS: FreeModel[] = [
  { id: "gemini-3.8-flash", label: "Gemini 3.8 Flash", vendor: "Google" },
  { id: "gemini-3.5-flash-lite", label: "Gemini 3.5 Lite", vendor: "Google" },
  { id: "gpt-5-nano", label: "GPT-5 Nano", vendor: "OpenAI" },
  { id: "gpt-5.4-nano", label: "GPT-5.4 Nano", vendor: "OpenAI" },
  { id: "qwen/qwen3.8-flash", label: "Qwen 3.8 Flash", vendor: "Alibaba" },
  { id: "deepseek/deepseek-v4.1-flash", label: "DeepSeek V4.1 Flash", vendor: "DeepSeek" },
  { id: "openai/gpt-5.4-nano", label: "GPT-5.4 Nano", vendor: "OpenAI" },
];

export function modelById(id: string | null | undefined): FreeModel | undefined {
  if (!id) return undefined;
  return FREE_MODELS.find((m) => m.id === id);
}

export function shortModelLabel(id: string | null | undefined): string {
  return modelById(id)?.label ?? "Auto free";
}
