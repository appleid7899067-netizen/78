import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { SERIES } from "@/lib/eras";

export function Spark() {
  return (
    <div className="h-28 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={SERIES} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
          <XAxis
            dataKey="year"
            tick={{ fill: "var(--fg-subtle)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={[0, 220]} />
          <Area
            type="monotone"
            dataKey="skills"
            stroke="var(--brand)"
            fill="var(--brand)"
            fillOpacity={0.12}
            strokeWidth={1.5}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
