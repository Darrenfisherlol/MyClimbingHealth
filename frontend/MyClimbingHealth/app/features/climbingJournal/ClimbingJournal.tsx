import React from 'react';
import { Navigate,Link } from 'react-router';
import styles from "~/features/clientDashboard/clientDashboard.module.css";


var Holds = [
  "Crimp",
  "Sloper",
  "Jug",
  "Pocket",
  "Pinch"
];

const TrainingPlans = [
  "1 On 1 Off",
  "1 On 2 Off",
  "Kilter Borad",
  "Moon Borad",
  "Pull ups",
  "Block Pinch",
  "Jump & Grads"
];

const climbingLog = [
    { date: "Mar 23", note: "Kilter board — V5 project, 3 attempts" },
    { date: "Mar 20", note: "Hangboard session — max hangs" },
    { date: "Mar 18", note: "Moonboard — V4 warmup circuit" },
];



export default function ClimbingJournal() {
  


    return (
        <div className="flex flex-col p-4">
            <h1 className={`text-2xl font-bold ${styles.PageTitle}`}>
                My Climbing Log
            </h1>

            <div className="flex flex-row gap-4 mt-2">

                <div className="flex flex-col flex-[3] gap-4">


                    <div className={`p-4 ${styles.Card}`}>
                        <div className="flex flex-row justify-between items-center mb-3">
                            <h2 className={`text-lg font-bold ${styles.CardTitle}`}>Climbing Log</h2>
                            <Link to="../patient/climbingjournal" className={`text-sm font-semibold ${styles.CardTitle}`}>
                                View All
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            {climbingLog.map((entry, i) => (
                                <div key={i} className={`flex flex-row gap-4 py-2 ${styles.WorkoutListItem}`}>
                                    <span className={`text-xs w-12 flex-shrink-0 ${styles.SubText}`}>{entry.date}</span>
                                    <span className="text-sm">{entry.note}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Right column ── */}
                <div className="flex flex-col flex-1 gap-4">

                    {/* Recovery Metrics */}
                    <div className={`p-4 ${styles.Card}`}>
                        <h2 className={`text-base font-bold mb-3 ${styles.CardTitle}`}>Recovery Metrics</h2>
                        <div className="flex flex-col gap-2">
                            <div className={`flex flex-col p-3 ${styles.StatPill}`}>
                                <span className={`text-xs ${styles.StatLabel}`}>Monthly Climbs</span>
                                <span className="text-lg font-bold">8</span>
                            </div>
                            <div className={`flex flex-col p-3 ${styles.StatPill}`}>
                                <span className={`text-xs ${styles.StatLabel}`}>Top Workout</span>
                                <span className="text-sm font-bold">Kilter Board</span>
                            </div>
                            <div className={`flex flex-col p-3 ${styles.StatPill}`}>
                                <span className={`text-xs ${styles.StatLabel}`}>Last Workout</span>
                                <span className="text-sm font-bold">Pull Ups</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
  );
}


