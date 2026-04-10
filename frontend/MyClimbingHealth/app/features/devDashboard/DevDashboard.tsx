import { Link } from "react-router";

const ptLinks = [
    { label: "PT Dashboard",  to: "pt/dashboard" },
    { label: "Patient List",  to: "pt/clientlist" },
    { label: "Workout Plans", to: "pt/workoutplan" },
];

const climberLinks = [
    { label: "My Dashboard",     to: "patient/dashboard" },
    { label: "Climbing Journal", to: "patient/climbingjournal" },
    { label: "Workout Plan",     to: "patient/workoutplan" },
];

export default function Home() {
    return (
        <div className="min-h-screen p-8" style={{ background: "var(--color-surface-low)" }}>
            <h1 className="text-2xl font-bold mb-8" style={{ color: "var(--color-primary)" }}>
                Ascent Recovery
            </h1>

            <div className="flex flex-row gap-6">

                <div className="flex flex-col gap-3 p-6" style={{ background: "var(--color-surface-highest)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}>
                    <h2 className="text-lg font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
                        PT View
                    </h2>
                    {ptLinks.map(l => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className="text-lg font-medium"
                            style={{ color: "var(--color-primary)" }}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-3 p-6" style={{ background: "var(--color-surface-highest)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-card)" }}>
                    <h2 className="text-lg font-semibold uppercase tracking-widest" style={{ color: "var(--color-secondary)" }}>
                        Climber View
                    </h2>
                    {climberLinks.map(l => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className="text-lg font-medium"
                            style={{ color: "var(--color-primary)" }}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div>
                    <ul>
                        <li>PT</li>
                        <li>CRUD PT</li>
                        <li>CRUD workout Plan</li>
                        <li>CRUD workout</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Patient</li>
                        <li>CRUD Patient</li>
                        <li>see assigned workout plan WITH workouts</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Welcome page</li>
                        <li>Login</li>
                        <li>DB</li>
                        <li>Data faker</li>
                        <li>"styling :D sooo funnn omggg" - backend / data dev</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}