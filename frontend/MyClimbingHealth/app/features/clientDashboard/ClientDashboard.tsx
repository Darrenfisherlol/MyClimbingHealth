import React from 'react';
import { Navigate, Link } from 'react-router';

export default function ClientDashboard() {



    return (
        <>
            <h1 className='text-2xl'>Client Name Dashboard</h1>

            <div className="flex flex-row">
                <div className={"flex flex-col flex-3"}>
                    <div className={"flex flex-col"}>
                        <h2>Current Work Plan</h2>
                        <p>desc</p>
                        <div>progress bar</div>
                    </div>

                    <div className={"flex flex-col"}>
                        <h2>Current Workouts</h2>
                        <div>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                            </ul>
                        </div>
                    </div>


                    <div className={"flex flex-col"}>
                        <h2>Climbing Log</h2>
                        <div>
                            <ul>
                                <li>a</li>
                                <li>b</li>
                                <li>c</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col flex-1"}>
                    <div className={"flex flex-col"}>
                        <h2>Rehab Streak</h2>
                        <div>a b c</div>
                        <div>e f g</div>
                    </div>


                    <div>
                        <h2 className={"text-lg font-bold"}>Recovery Metrics</h2>
                        <div className={"flex flex-col text-lg"}>
                            <div>Monthly Climbs: 8</div>
                            <div>Most Common Workout: Kilter Board</div>
                            <div>Last workout: Pull Ups</div>
                        </div>
                    </div>

                    <div className={"flex flex-col"}>
                        Message
                    </div>
                </div>

            </div>

            <div className="flex flex-row gap-4 m-4">
            </div>
        </>
    );
}


