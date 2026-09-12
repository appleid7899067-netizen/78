import { createFileRoute } from "@tanstack/react-router";
import { Horizon } from "@/components/horizon";
import { PuterGate } from "@/components/puter-gate";
import { PuterAuthProvider } from "@/lib/puter-auth";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PuterAuthProvider>
      <PuterGate>
        <Horizon />
      </PuterGate>
    </PuterAuthProvider>
  );
}
