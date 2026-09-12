import { cn } from "@/lib/utils";

function inline(text: string, keyBase: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    const key = `${keyBase}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="rounded-[var(--radius-xs)] bg-secondary px-1 py-px font-mono text-xs">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={key}>{part}</span>;
  });
}

export function Markdown({ text, className }: { text: string; className?: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className={cn("space-y-3 text-sm leading-relaxed text-foreground", className)}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^[-*]\s+/.test(l) || l.trim() === "");
        if (isList) {
          return (
            <ul key={bi} className="space-y-1.5 pl-4">
              {lines
                .filter((l) => l.trim())
                .map((l, li) => (
                  <li key={li} className="list-disc text-muted-foreground">
                    {inline(l.replace(/^[-*]\s+/, ""), `${bi}-${li}`)}
                  </li>
                ))}
            </ul>
          );
        }
        return (
          <p key={bi} className="text-pretty text-muted-foreground">
            {lines.map((line, li) => (
              <span key={li}>
                {li > 0 ? <br /> : null}
                {inline(line, `${bi}-${li}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
