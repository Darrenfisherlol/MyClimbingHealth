import styles from "./patients.module.css";

const patients = [
    { id: 1, name: "Magi Carp",    reason: "Finger pulley strain",        progress: "75% - resumed light climbing",      feeling: "Optimistic",               lastSession: "2026-03-20" },
    { id: 2, name: "Salmon Lemon", reason: "Shoulder impairment",         progress: "60% - doing rehab exercises",       feeling: "Frustrated but improving",  lastSession: "2026-03-18" },
    { id: 3, name: "Tuna Rice",    reason: "Ankle sprain",                progress: "85% - back to easy routes",         feeling: "Relieved",                  lastSession: "2026-03-22" },
    { id: 4, name: "Steak Sauce",  reason: "Elbow tendinitis",            progress: "50% - limited training",            feeling: "Cautious",                  lastSession: "2026-03-17" },
    { id: 5, name: "Sam Patel",    reason: "Middle finger pulley injury",  progress: "90% - nearly healed",              feeling: "Motivated",                 lastSession: "2026-03-23" },
    { id: 6, name: "Fish Stick",   reason: "Wrist strain",                progress: "65% - gradually increasing load",   feeling: "Careful",                   lastSession: "2026-03-19" },
    { id: 7, name: "Shark Nato",   reason: "Knee pain",                   progress: "70% - mobility work ongoing",       feeling: "Hopeful",                   lastSession: "2026-03-21" },
    { id: 8, name: "Shell Fish",   reason: "Lower back strain",           progress: "55% - focusing on core strength",   feeling: "Determined",                lastSession: "2026-03-16" },
];

export default function Patients() {
    return (
        <>
            <div className="flex flex-col p-4">
                <h1 className={`text-2xl font-bold ${styles.PageTitle}`}>Client List</h1>

                <div className="flex flex-row justify-between mt-2 mb-4">
                    <p>Manage and monitor active physical therapy programs</p>
                    <div className="flex flex-row gap-2">
                        <p className={`px-4 py-1.5 ${styles.FilterChip}`}>Filter one</p>
                        <p className={`px-4 py-1.5 ${styles.FilterChipActive}`}>Filter Two</p>
                        <p className={`px-4 py-1.5 ${styles.FilterChip}`}>-- all filter --</p>
                    </div>
                </div>

                <div className={styles.TableCard}>
                    <table className="w-full border-collapse text-sm">
                        <thead>
                        <tr className={styles.TableHeader}>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Client Name</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Reason</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Recovery Progress</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Feeling</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Last Session</th>
                        </tr>
                        </thead>
                        <tbody>
                        {patients.map((p, index) => (
                            <tr key={p.id} className={styles.TableRow}>
                                <td className="px-4 py-3 font-semibold">{p.name}</td>
                                <td className="px-4 py-3">{p.reason}</td>
                                <td className="px-4 py-3">{p.progress}</td>
                                <td className="px-4 py-3">{p.feeling}</td>
                                <td className="px-4 py-3">{p.lastSession}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            Pagination section
                        </tfoot>
                    </table>
                </div>

                <div className="flex flex-row mt-4">
                    <div className="flex-[2]" style={{ height: "400px", textAlign: "center", alignContent: "center" }}>
                        Chart 1
                    </div>
                    <div className="flex-1" style={{ height: "400px", textAlign: "center", alignContent: "center" }}>
                        Chart 2
                    </div>
                </div>
            </div>
        </>
    );
}