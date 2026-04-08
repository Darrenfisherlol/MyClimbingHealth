import React from 'react';
import { Navigate, Link } from 'react-router';

import styles from './clientDashboard.module.css';


const workouts = [
    { name: "Finger Repeaters", detail: "4 sets - 6 reps - 6s hold" },
    { name: "Weighted Pullups",  detail: "5 sets - 6 reps - 2m rest" },
    { name: "Kilter Board Session", detail: "5x V4 -3x V5 - 3x V6 - 2x V7" },
];

const climbingLog = [
    { date: "Mar 23", note: "Kilter board — V5 project, 3 attempts" },
    { date: "Mar 20", note: "Hangboard session — max hangs" },
    { date: "Mar 18", note: "Moonboard — V4 warmup circuit" },
];

const streakDays = ["M", "T", "W", "T", "F", "S", "S"];
const completedDays = [0, 1, 2, 3];


export default function ClientDashboard() {
    return (
        <div className="flex flex-col p-4">
            <h1 className={`text-2xl font-bold ${styles.PageTitle}`}>
                Welcome back, Alex
            </h1>

            <div className="flex flex-row gap-4 mt-2">

                {/* ── Left column ── */}
                <div className="flex flex-col flex-[3] gap-4">

                    {/* Current Work Plan */}
                    <div className={`p-4 ${styles.Card}`}>
                        <div className="flex flex-row justify-between items-start mb-2">
                            <div>
                                <h2 className={`text-lg font-bold ${styles.CardTitle}`}>Current Work Plan</h2>
                                <p className={`text-sm ${styles.SubText}`}>Finger Pulley A2 Rehab — Phase 3 of 4</p>
                            </div>
                            <Link to="../patient/workoutPlan" className={`text-sm font-semibold ${styles.CardTitle}`}>
                                View All
                            </Link>
                        </div>
                        <div className={`h-2 w-full mt-3 ${styles.ProgressTrack}`}>
                            <div className={`h-full w-[65%] ${styles.ProgressFill}`} />
                        </div>
                        <p className={`text-xs mt-1 ${styles.SubText}`}>65% complete</p>
                    </div>

                    {/* Today's Workouts */}
                    <div className={`p-4 ${styles.Card}`}>
                        <h2 className={`text-lg font-bold mb-3 ${styles.CardTitle}`}>
                            Current Workouts
                        </h2>
                        <div className="flex flex-col">
                            {workouts.map((w, i) => (
                                <div key={i} className={`flex flex-row justify-between py-2 ${styles.WorkoutListItem}`}>
                                    <span className="text-sm font-semibold">{w.name}</span>
                                    <span className={`text-xs ${styles.SubText}`}>{w.detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>

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

                    {/* Rehab Streak */}
                    <div className={`p-4 ${styles.StreakCard}`}>
                        <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1">Rehab Streak</p>
                        <p className="text-4xl font-bold mb-4">12 days</p>
                        <div className="flex flex-row justify-between">
                            {streakDays.map((day, i) => (
                                <div key={i} className="flex flex-col items-center gap-1">
                                    <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold ${completedDays.includes(i) ? styles.StreakDayDone : styles.StreakDayPending}`}>
                                        X
                                    </div>
                                    <span className="text-xs opacity-60">{day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Message PT */}
                    <div className={`p-4 ${styles.MessageCard}`}>
                        <h2 className={`text-base font-bold mb-1 ${styles.CardTitle}`}>Dr.Alex the Alex of Alex.. words</h2>
                        <p className={`text-xs mb-3 ${styles.SubText}`}>
                            5 Big booms today, w climb. Keep it up cheif
                        </p>
                        <button className={`text-sm font-semibold ${styles.CardTitle}`}>
                            Reply All
                        </button>
                    </div>

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


