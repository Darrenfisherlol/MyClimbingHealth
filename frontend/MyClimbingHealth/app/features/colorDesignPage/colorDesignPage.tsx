import { useState } from "react";
import {Link} from "react-router";

// ─── Token map (mirrors your CSS variables) ────────────────────────────────
const T = {
    primary:           "#002d1c",
    primaryContainer:  "#00452e",
    secondary:         "#4c616c",
    tertiaryContainer: "#6e2200",
    accent:            "#c84b00",
    surface:           "#f8fafa",
    surfaceLow:        "#f2f4f4",
    surfaceLowest:     "#ffffff",
    surfaceHighest:    "rgba(255,255,255,0.8)",
    surfaceTint:       "rgba(0,45,28,0.05)",
    onSurface:         "#191c1d",
    onSurfaceVariant:  "#4c616c",
    onPrimary:         "#ffffff",
    outlineVariant:    "rgba(193,200,194,0.35)",
    error:             "#ba1a1a",
    errorContainer:    "#ffdad6",
    success:           "#1a6e3f",
    successContainer:  "#d6f5e3",
    warning:           "#7a4f00",
    warningContainer:  "#ffecd2",
    dim:               "#d8dada",
} as const;

const fonts = {
    display: "'Lexend', sans-serif",
    body:    "'Work Sans', sans-serif",
    mono:    "'Space Grotesk', monospace",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────
type BadgeVariant  = "neutral" | "primary" | "success" | "warning" | "error";
type AlertVariant  = "success" | "warning" | "error";
type ExerciseStatus = "Done" | "Pending" | "Skipped";

// ─── Shared style helpers ──────────────────────────────────────────────────
const card = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    background:   T.surfaceLowest,
    borderRadius: 16,
    boxShadow:    "0 1px 4px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.08)",
    padding:      "24px",
    ...extra,
});

// ─── Section ───────────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section style={{ marginBottom: 56 }}>
            <h2 style={{
                fontFamily:    fonts.body,
                fontSize:      13,
                fontWeight:    600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         T.secondary,
                marginBottom:  20,
                paddingBottom: 10,
                borderBottom:  `1px solid ${T.outlineVariant}`,
            }}>
                {title}
            </h2>
            {children}
        </section>
    );
}

// ─── Chip ──────────────────────────────────────────────────────────────────
function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                fontFamily:  fonts.body,
                fontSize:    13,
                fontWeight:  500,
                padding:     "6px 14px",
                borderRadius: 9999,
                border:      `1.5px solid ${active ? T.primary : T.outlineVariant}`,
                background:  active ? T.primary : T.surfaceLowest,
                color:       active ? T.onPrimary : T.onSurface,
                cursor:      "pointer",
                transition:  "all 160ms ease",
            }}
        >
            {label}
        </button>
    );
}

// ─── Badge ─────────────────────────────────────────────────────────────────
function Badge({ label, variant = "neutral" }: { label: string; variant?: BadgeVariant }) {
    const map: Record<BadgeVariant, { bg: string; color: string }> = {
        neutral: { bg: T.surfaceLow,        color: T.secondary },
        primary: { bg: T.primaryContainer,  color: T.onPrimary },
        success: { bg: T.successContainer,  color: T.success   },
        warning: { bg: T.warningContainer,  color: T.warning   },
        error:   { bg: T.errorContainer,    color: T.error     },
    };
    const s = map[variant];
    return (
        <span style={{
            fontFamily:    fonts.body,
            fontSize:      11,
            fontWeight:    600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding:       "3px 10px",
            borderRadius:  9999,
            background:    s.bg,
            color:         s.color,
        }}>
      {label}
    </span>
    );
}

// ─── ProgressBar ───────────────────────────────────────────────────────────
function ProgressBar({ value, label, color = T.primary }: { value: number; label: string; color?: string }) {
    return (
        <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurfaceVariant }}>{label}</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 13, color: T.onSurface, fontWeight: 600 }}>{value}%</span>
            </div>
            <div style={{ height: 8, borderRadius: 9999, background: T.surfaceLow, overflow: "hidden" }}>
                <div style={{
                    height:     "100%",
                    width:      `${value}%`,
                    borderRadius: 9999,
                    background: color,
                    transition: "width 600ms cubic-bezier(.4,0,.2,1)",
                }} />
            </div>
        </div>
    );
}

// ─── Alert ─────────────────────────────────────────────────────────────────
function Alert({ variant = "success", icon, title, body }: {
    variant?: AlertVariant;
    icon: string;
    title: string;
    body?: string;
}) {
    const map: Record<AlertVariant, { bg: string; color: string; border: string }> = {
        success: { bg: T.successContainer, color: T.success, border: T.success },
        warning: { bg: T.warningContainer, color: T.warning, border: T.warning },
        error:   { bg: T.errorContainer,   color: T.error,   border: T.error   },
    };
    const s = map[variant];
    return (
        <div style={{
            display:    "flex",
            gap:        12,
            alignItems: "flex-start",
            background: s.bg,
            border:     `1px solid ${s.border}22`,
            borderLeft: `4px solid ${s.border}`,
            borderRadius: 12,
            padding:    "14px 16px",
            marginBottom: 12,
        }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
            <div>
                <p style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 14, color: s.color, margin: 0 }}>{title}</p>
                {body && (
                    <p style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurface, margin: "4px 0 0", lineHeight: 1.6 }}>
                        {body}
                    </p>
                )}
            </div>
        </div>
    );
}

// ─── StatCard ──────────────────────────────────────────────────────────────
function StatCard({ value, label, delta, icon }: { value: string; label: string; delta: number; icon: string }) {
    const up = delta >= 0;
    return (
        <div style={{ ...card(), display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <span style={{
                    fontFamily: fonts.mono,
                    fontSize:   12,
                    fontWeight: 600,
                    color:      up ? T.success : T.error,
                    background: up ? T.successContainer : T.errorContainer,
                    padding:    "2px 8px",
                    borderRadius: 9999,
                }}>
          {up ? "+" : ""}{delta}%
        </span>
            </div>
            <p style={{ fontFamily: fonts.display, fontSize: 28, fontWeight: 700, color: T.onSurface, margin: 0 }}>{value}</p>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurfaceVariant, margin: 0 }}>{label}</p>
        </div>
    );
}

// ─── ExerciseRow ───────────────────────────────────────────────────────────
function ExerciseRow({ name, sets, reps, status }: {
    name: string;
    sets: number;
    reps: string;
    status: ExerciseStatus;
}) {
    const variantMap: Record<ExerciseStatus, BadgeVariant> = {
        Done:    "success",
        Pending: "neutral",
        Skipped: "error",
    };
    return (
        <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            padding:        "14px 0",
            borderBottom:   `1px solid ${T.outlineVariant}`,
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 14, color: T.onSurface }}>{name}</span>
                <span style={{ fontFamily: fonts.mono, fontSize: 12, color: T.onSurfaceVariant }}>{sets} × {reps}</span>
            </div>
            <Badge label={status} variant={variantMap[status]} />
        </div>
    );
}

// ─── InputField ────────────────────────────────────────────────────────────
function InputField({ label, placeholder, type = "text" }: {
    label: string;
    placeholder: string;
    type?: string;
}) {
    const [focused, setFocused] = useState(false);
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{
                fontFamily:   fonts.body,
                fontSize:     13,
                fontWeight:   500,
                color:        T.onSurfaceVariant,
                display:      "block",
                marginBottom: 6,
            }}>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width:       "100%",
                    fontFamily:  fonts.body,
                    fontSize:    14,
                    padding:     "10px 14px",
                    border:      `1.5px solid ${focused ? T.primary : T.outlineVariant}`,
                    borderRadius: 10,
                    background:  T.surfaceLowest,
                    color:       T.onSurface,
                    outline:     "none",
                    boxSizing:   "border-box",
                    transition:  "border-color 160ms ease, box-shadow 160ms ease",
                    boxShadow:   focused ? `0 0 0 3px ${T.primary}18` : "none",
                }}
            />
        </div>
    );
}

// ─── Recommendation item ───────────────────────────────────────────────────
interface Rec {
    tag:   "FIX" | "ADD" | "TWEAK" | "CONSIDER";
    color: string;
    bg:    string;
    title: string;
    body:  string;
}

const recommendations: Rec[] = [
    {
        tag: "FIX", color: T.error, bg: T.errorContainer,
        title: "Fix typo in --color-surface-highest",
        body:  "Remove the leading hyphen (`-    --color-surface-highest`). It will silently break in any CSS parser.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add semantic feedback tokens: error, success, warning",
        body:  "Material 3 includes error roles by default. PT apps surface pain alerts, missed sessions, and healing milestones — you need all three states with matching container colours.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add --color-accent: #c84b00 (derived from tertiary)",
        body:  "Your tertiary-container (#6e2200) is too dark for interactive CTAs on white. A lighter #c84b00 works as an 'accent' token for high-priority buttons like Book PT and Start Session.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add --color-surface-dim and --color-surface-tint",
        body:  "surface-dim (#d8dada) handles disabled/muted states. surface-tint (primary at 5% opacity) adds a subtle hover glow on white cards. Both are standard M3 surface roles.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add shape / radius tokens",
        body:  "Hardcoded border-radius values will drift. Define --radius-sm (6px), --radius-md (12px), --radius-lg (20px), --radius-pill (9999px) as tokens.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add elevation / shadow tokens",
        body:  "Add --shadow-card and --shadow-elevated so all elevated surfaces share the same depth language rather than each component rolling its own box-shadow.",
    },
    {
        tag: "ADD", color: T.success, bg: T.successContainer,
        title: "Add transition tokens",
        body:  "Define --transition-fast (120ms ease) and --transition-base (220ms ease) to keep motion consistent across hover states, focus rings, and state changes.",
    },
    {
        tag: "TWEAK", color: T.warning, bg: T.warningContainer,
        title: "Increase --color-outline-variant opacity (0.15 → 0.35)",
        body:  "At 0.15 alpha the divider is nearly invisible on #f8fafa. Bumping to 0.30–0.40 makes card edges and row separators clearly legible without feeling heavy.",
    },
    {
        tag: "TWEAK", color: T.warning, bg: T.warningContainer,
        title: "Add --color-surface-container for elevated cards",
        body:  "Currently cards use surfaceLowest (#fff) but no token names that pattern. A --color-surface-container token makes the intent explicit vs. 'lowest' implying a raw hierarchy level.",
    },
    {
        tag: "CONSIDER", color: T.secondary, bg: T.surfaceLow,
        title: "Add a dark theme variant",
        body:  "Rock climbers often train in gyms with dim lighting and check their phones mid-session. A dark variant with role-swapped tokens improves low-light usability significantly.",
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ColorDesignPage() {
    const [activeChips, setActiveChips] = useState<string[]>(["Fingers"]);
    const [activeTab,   setActiveTab]   = useState("Dashboard");

    const toggleChip = (c: string) =>
        setActiveChips(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

    const navTabs = ["Dashboard", "Program", "Progress"] as const;

    return (
        <div style={{ background: T.surface, minHeight: "100vh", fontFamily: fonts.body, color: T.onSurface }}>

            {/* ── NAV ───────────────────────────────────────────────────── */}
            <nav style={{
                background: T.primary,
                padding:    "0 24px",
                height:     56,
                display:    "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position:   "sticky",
                top:        0,
                zIndex:     100,
                boxShadow:  "0 2px 8px rgba(0,0,0,.18)",
            }}>
        <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 17, color: T.onPrimary, letterSpacing: "0.01em" }}>
          <Link to="/">Ascent Recovery</Link>
        </span>
                <div style={{ display: "flex", gap: 20 }}>
                    {navTabs.map(t => (
                        <span
                            key={t}
                            onClick={() => setActiveTab(t)}
                            style={{
                                fontFamily:   fonts.body,
                                fontSize:     13,
                                fontWeight:   activeTab === t ? 600 : 400,
                                color:        activeTab === t ? T.onPrimary : "rgba(255,255,255,.6)",
                                cursor:       "pointer",
                                borderBottom: activeTab === t ? `2px solid ${T.onPrimary}` : "2px solid transparent",
                                paddingBottom: 2,
                                transition:   "all 150ms ease",
                            }}
                        >
              {t}
            </span>
                    ))}

                    <Link to="../../pt/dashboard" className={"text-amber-50 pr-2 mt-auto"}>Dashboard</Link>
                    <Link to="../../pt/clientlist" className={"text-amber-50 pr-2 mt-auto"}>Climbers</Link>
                    <Link to="../../pt/workoutplan" className={"text-amber-50 pr-2 mt-auto"}>WorkPlan</Link>
                </div>
                <div style={{
                    width:       34,
                    height:      34,
                    borderRadius: 9999,
                    background:  T.primaryContainer,
                    border:      `2px solid rgba(255,255,255,.25)`,
                    display:     "flex",
                    alignItems:  "center",
                    justifyContent: "center",
                    fontSize:    14,
                    color:       T.onPrimary,
                    fontWeight:  700,
                    cursor:      "pointer",
                }}>
                    AK
                </div>
            </nav>

            <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>

                {/* ── TYPOGRAPHY ──────────────────────────────────────────── */}
                <Section title="Typography">
                    <div style={card()}>
                        <p style={{ fontFamily: fonts.display, fontSize: 34, fontWeight: 700, color: T.onSurface, margin: "0 0 4px" }}>
                            Display — Lexend 700
                        </p>
                        <p style={{ fontFamily: fonts.display, fontSize: 20, fontWeight: 400, color: T.onSurfaceVariant, margin: "0 0 20px" }}>
                            Title — Lexend 400
                        </p>
                        <p style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 1.7, color: T.onSurface, margin: "0 0 12px" }}>
                            Body — Work Sans 400. Your personalised recovery program adapts to your climbing grade,
                            injury history, and training load so you can get back on the wall stronger.
                        </p>
                        <p style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurfaceVariant, margin: "0 0 12px" }}>
                            Caption — Work Sans 400 · 13px · Last assessment: 3 days ago · Next session: Tomorrow 8:00 AM
                        </p>
                        <code style={{
                            fontFamily:   fonts.mono,
                            fontSize:     13,
                            background:   T.surfaceLow,
                            padding:      "4px 10px",
                            borderRadius: 6,
                            color:        T.onSurface,
                        }}>
                            mono — Space Grotesk · V8 · 4×10 crimp · 60s rest
                        </code>
                    </div>
                </Section>

                {/* ── COLOR PALETTE ───────────────────────────────────────── */}
                <Section title="Color Palette">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px,1fr))", gap: 12 }}>
                        {(
                            [
                                { name: "Primary",         bg: T.primary,           fg: "#fff" },
                                { name: "Primary Cont.",   bg: T.primaryContainer,  fg: "#fff" },
                                { name: "Secondary",       bg: T.secondary,         fg: "#fff" },
                                { name: "Tertiary Cont.",  bg: T.tertiaryContainer, fg: "#fff" },
                                { name: "Accent (NEW)",    bg: T.accent,            fg: "#fff" },
                                { name: "Surface",         bg: T.surface,           fg: T.onSurface },
                                { name: "Surface Low",     bg: T.surfaceLow,        fg: T.onSurface },
                                { name: "Surface Lowest",  bg: T.surfaceLowest,     fg: T.onSurface, border: T.outlineVariant },
                                { name: "Error (NEW)",     bg: T.error,             fg: "#fff" },
                                { name: "Success (NEW)",   bg: T.success,           fg: "#fff" },
                                { name: "Warning (NEW)",   bg: T.warning,           fg: "#fff" },
                            ] as Array<{ name: string; bg: string; fg: string; border?: string }>
                        ).map(s => (
                            <div key={s.name} style={{
                                background:   s.bg,
                                border:       s.border ? `1px solid ${s.border}` : "none",
                                borderRadius: 12,
                                padding:      "16px 12px",
                                display:      "flex",
                                flexDirection: "column",
                                gap:          4,
                            }}>
                                <span style={{ fontFamily: fonts.mono, fontSize: 10, color: s.fg, opacity: 0.7 }}>{s.name}</span>
                                <span style={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: s.fg }}>{s.bg}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── BUTTONS ─────────────────────────────────────────────── */}
                <Section title="Buttons">
                    <div style={{ ...card(), display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                        <button style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 10, border: "none", background: T.primary, color: T.onPrimary, cursor: "pointer" }}>
                            Start Session
                        </button>
                        <button style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 10, border: "none", background: T.primaryContainer, color: T.onPrimary, cursor: "pointer" }}>
                            Log Exercise
                        </button>
                        <button style={{ fontFamily: fonts.body, fontWeight: 700, fontSize: 14, padding: "11px 24px", borderRadius: 10, border: "none", background: T.accent, color: "#fff", cursor: "pointer" }}>
                            Book PT Session
                        </button>
                        <button style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 14, padding: "10px 22px", borderRadius: 10, border: `1.5px solid ${T.primary}`, background: "transparent", color: T.primary, cursor: "pointer" }}>
                            View History
                        </button>
                        <button style={{ fontFamily: fonts.body, fontWeight: 500, fontSize: 14, padding: "10px 16px", borderRadius: 10, border: "none", background: "transparent", color: T.onSurfaceVariant, cursor: "pointer" }}>
                            Cancel
                        </button>
                        <button disabled style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 10, border: "none", background: T.dim, color: T.onSurfaceVariant, cursor: "not-allowed" }}>
                            Disabled
                        </button>
                        <button style={{ fontFamily: fonts.body, fontWeight: 600, fontSize: 13, padding: "9px 20px", borderRadius: 9999, border: "none", background: T.primary, color: T.onPrimary, cursor: "pointer" }}>
                            + Add Exercise
                        </button>
                    </div>
                </Section>

                {/* ── CHIPS ───────────────────────────────────────────────── */}
                <Section title="Filter Chips — Body Region">
                    <div style={{ ...card(), display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {["Fingers", "Wrist", "Elbow", "Shoulder", "Core", "Knee", "Ankle"].map(c => (
                            <Chip key={c} label={c} active={activeChips.includes(c)} onClick={() => toggleChip(c)} />
                        ))}
                    </div>
                </Section>

                {/* ── BADGES ──────────────────────────────────────────────── */}
                <Section title="Status Badges">
                    <div style={{ ...card(), display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                        <Badge label="Active"   variant="primary" />
                        <Badge label="Done"     variant="success" />
                        <Badge label="Overdue"  variant="error"   />
                        <Badge label="Rest Day" variant="warning" />
                        <Badge label="Pending"  variant="neutral" />
                    </div>
                </Section>

                {/* ── ALERTS ──────────────────────────────────────────────── */}
                <Section title="Alerts & Feedback (RECOMMENDED — currently missing)">
                    <Alert variant="success" icon="✅" title="Session complete!"    body="You finished all 6 exercises. Recovery score: 94/100." />
                    <Alert variant="warning" icon="⚠️" title="High training load"  body="You've climbed 5 days in a row. Consider an active rest day." />
                    <Alert variant="error"   icon="🚨" title="Pain reported"        body="You flagged finger pain. Please review exercise modifications below." />
                </Section>

                {/* ── PROGRESS BARS ───────────────────────────────────────── */}
                <Section title="Progress Bars">
                    <div style={card()}>
                        <ProgressBar value={78} label="Weekly Program Completion" color={T.primary} />
                        <ProgressBar value={55} label="Finger Strength Recovery"  color={T.primaryContainer} />
                        <ProgressBar value={92} label="Mobility Goals"            color={T.success} />
                        <ProgressBar value={30} label="Pain-Free Range of Motion" color={T.accent} />
                    </div>
                </Section>

                {/* ── STAT CARDS ──────────────────────────────────────────── */}
                <Section title="Stat Cards">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: 16 }}>
                        <StatCard value="V6"   label="Current Climbing Grade" delta={1}  icon="🧗" />
                        <StatCard value="14kg" label="Max Crimp Strength"      delta={8}  icon="💪" />
                        <StatCard value="3"    label="Pain-Free Sessions"      delta={50} icon="✅" />
                        <StatCard value="87%"  label="Program Adherence"       delta={-4} icon="📋" />
                    </div>
                </Section>

                {/* ── EXERCISE LIST ───────────────────────────────────────── */}
                <Section title="Exercise List Card">
                    <div style={card()}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <h3 style={{ fontFamily: fonts.display, fontSize: 17, fontWeight: 700, margin: 0, color: T.onSurface }}>
                                Today's Program
                            </h3>
                            <Badge label="4 / 6 done" variant="success" />
                        </div>
                        <p style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurfaceVariant, marginBottom: 4 }}>
                            Focus: Finger Rehab · ~35 min
                        </p>
                        {(
                            [
                                { name: "Fingerboard Dead Hangs",       sets: 3, reps: "10s", status: "Done"    },
                                { name: "Wrist Pronation / Supination",  sets: 3, reps: "15",  status: "Done"    },
                                { name: "Antagonist Push-ups",           sets: 2, reps: "12",  status: "Done"    },
                                { name: "Shoulder External Rotation",    sets: 3, reps: "12",  status: "Done"    },
                                { name: "Rice Bucket Pinch Curls",       sets: 2, reps: "20",  status: "Pending" },
                                { name: "Passive Stretching — Forearm",  sets: 2, reps: "60s", status: "Skipped" },
                            ] as Array<{ name: string; sets: number; reps: string; status: ExerciseStatus }>
                        ).map(e => <ExerciseRow key={e.name} {...e} />)}
                    </div>
                </Section>

                {/* ── FORM ────────────────────────────────────────────────── */}
                <Section title="Form Inputs">
                    <div style={card({ maxWidth: 480 })}>
                        <h3 style={{ fontFamily: fonts.display, fontSize: 16, fontWeight: 700, margin: "0 0 20px", color: T.onSurface }}>
                            Pain Check-In
                        </h3>
                        <InputField label="Location of discomfort" placeholder="e.g. A2 pulley, left hand" />
                        <InputField label="Pain intensity (1–10)"  placeholder="e.g. 3" type="number" />
                        <InputField label="When did it start?"     placeholder="e.g. After yesterday's session" />
                        <button style={{
                            marginTop:   8,
                            fontFamily:  fonts.body,
                            fontWeight:  600,
                            fontSize:    14,
                            padding:     "12px 24px",
                            borderRadius: 10,
                            border:      "none",
                            background:  T.primary,
                            color:       T.onPrimary,
                            cursor:      "pointer",
                            width:       "100%",
                        }}>
                            Submit Check-In
                        </button>
                    </div>
                </Section>

                {/* ── RECOMMENDATIONS ─────────────────────────────────────── */}
                <Section title="⭐ Design System Recommendations">
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {recommendations.map(r => (
                            <div key={r.title} style={{
                                background:  r.bg,
                                borderLeft:  `4px solid ${r.color}`,
                                borderRadius: 12,
                                padding:     "16px 18px",
                                display:     "flex",
                                gap:         14,
                                alignItems:  "flex-start",
                            }}>
                <span style={{
                    fontFamily:   fonts.mono,
                    fontSize:     10,
                    fontWeight:   700,
                    background:   r.color,
                    color:        "#fff",
                    padding:      "3px 8px",
                    borderRadius: 4,
                    flexShrink:   0,
                    marginTop:    1,
                }}>
                  {r.tag}
                </span>
                                <div>
                                    <p style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 14, color: T.onSurface, margin: "0 0 4px" }}>
                                        {r.title}
                                    </p>
                                    <p style={{ fontFamily: fonts.body, fontSize: 13, color: T.onSurface, margin: 0, lineHeight: 1.6 }}>
                                        {r.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

            </div>
        </div>
    );
}
