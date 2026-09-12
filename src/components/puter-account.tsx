import { LogOut } from "lucide-react";
import { PuterMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { usePuterAuth } from "@/lib/puter-auth";
import { useHorizonStore } from "@/lib/store";

function syncLabel(
  syncStatus: ReturnType<typeof usePuterAuth>["syncStatus"],
  signedIn: boolean,
  th: boolean,
) {
  if (!signedIn) return th ? "เฉพาะเครื่องนี้ · ล็อกอิน Puter เพื่อซิงก์" : "Local only · sign in with Puter";
  if (syncStatus === "syncing") return th ? "กำลังซิงก์กับ Puter…" : "Syncing with Puter…";
  if (syncStatus === "error") return th ? "ซิงก์คลาวด์หยุดชั่วคราว" : "Cloud sync paused";
  if (syncStatus === "synced") return th ? "ซิงก์กับ Puter แล้ว" : "Chats synced to Puter";
  return th ? "บัญชี Puter" : "Puter account";
}

export function PuterAccount() {
  const { status, user, pending, syncStatus, signIn, signOut } = usePuterAuth();
  const language = useHorizonStore((s) => s.language);
  const th = language === "th";
  const signedIn = status === "signed_in" && user;

  return (
    <div className="rounded-[16px] border border-border bg-secondary/40 p-2">
      <div className="flex items-center gap-2">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] border border-border bg-card">
          {signedIn ? (
            <span className="text-xs font-medium uppercase">{user.username.slice(0, 2)}</span>
          ) : (
            <PuterMark className="size-4 text-muted-foreground" />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium">{signedIn ? user.username : th ? "ผู้เยี่ยมชม" : "Guest"}</span>
          <span className="block truncate text-xs text-subtle">{syncLabel(syncStatus, Boolean(signedIn), th)}</span>
        </span>
        {signedIn ? (
          <Button
            size="icon"
            variant="ghost"
            className="size-10 shrink-0"
            onClick={() => void signOut()}
            aria-label="Sign out of Puter"
          >
            <LogOut className="size-4" />
          </Button>
        ) : null}
      </div>
      {!signedIn ? (
        <Button
          size="sm"
          className="mt-2 h-10 w-full rounded-full text-xs"
          onClick={() => void signIn()}
          disabled={pending}
        >
          <PuterMark className="size-3.5" />
          {pending ? (th ? "รอ Puter…" : "Waiting for Puter…") : th ? "ล็อกอิน Puter" : "Sign in with Puter"}
        </Button>
      ) : null}
    </div>
  );
}
