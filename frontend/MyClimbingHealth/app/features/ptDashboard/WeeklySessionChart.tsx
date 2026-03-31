import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { day: "Mon", completed: 8, skipped: 2 },
    { day: "Tue", completed: 6, skipped: 4 },
    { day: "Wed", completed: 9, skipped: 1 },
    { day: "Thu", completed: 5, skipped: 5 },
    { day: "Fri", completed: 7, skipped: 3 },
    { day: "Sat", completed: 3, skipped: 1 },
    { day: "Sun", completed: 1, skipped: 0 },
];

export default function WeeklySessionChart() {
    return (
        <div className="flex flex-col gap-2 pt-4 pr-4 pb-4 w-full">
            <h2 className="text-xl font-bold">Weekly Session Completion</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(193,200,194,0.35)" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                        cursor={{ fill: "rgba(193,200,194,0.15)" }}
                        contentStyle={{
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--color-outline-variant)",
                            background: "var(--color-surface-highest)",
                        }}
                    />
                    <Legend />
                    <Bar dataKey="completed" name="Completed" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="skipped"   name="Skipped"   fill="var(--color-surface-dim)" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

