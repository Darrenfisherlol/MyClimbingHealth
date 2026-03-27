import React from 'react';
import { Navigate, Link } from 'react-router';
import MonthlyClimbsChart from "./ClientDashboardChart";
import ActionCard from "./ClientDashboardActionCard";


interface clientDahsboardProps {

}

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

function AddToTrainingPlan() {

}

function CreateNewTrainingPlan() {

}


export default function ClientDashboard() {



    return (
        <>
            <h1 className='text-2xl'>Client Name Dashboard</h1>

            <div className="flex flex-row justify-center gap-4 m-4">
                <ActionCard action={"Progression"} link={"./user?id"}></ActionCard>
                <ActionCard action={"Edit workout plan"} link={"../workplans/workplan?id"}></ActionCard>
                <ActionCard action={"Message Client"} link={"./message/user?id"}></ActionCard>
            </div>


            <div className="flex flex-row gap-4 m-4">
                <div className="flex-1 flex flex-col text-lg">
                    <div>Monthly Climbs: 8</div>
                    <div>Most Common Workout: Kilter Board</div>
                    <div>Last workout: Pull Ups</div>
                </div>
                <div className="flex-1">
                    <MonthlyClimbsChart />
                </div>
            </div>

            <div>

                <h2 className='text-xl mb-4'>
                    Climbing Stats
                </h2>

                <div>
                    <div className="flex flex-col text-lg">
                        Current Goal:</div>
                    <span >
                        Worked on volumne V6s and shoulder work
                    </span>
                </div>

                <div>
                    <div className="flex flex-col text-lg">
                        Focus:
                        <span className="text-base">Shoulders</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex flex-col text-lg">
                        Rehab:
                        <span className="text-base">Shoulder Stain</span>
                    </div>

                </div>

                <div className="flex flex-col">
                    <h2 className='text-xl mb-4'>
                        Work Out Plan 1
                    </h2>
                    <div className="flex flex-row justify-evenly">
                        <div className="text-xl">
                            Warm up
                            <ul className='text-base'>
                                <li>Bike</li>
                                <li>Pull ups</li>
                                <li>Pinches</li>
                                <li>V2 Climb</li>
                                <li>V2 Climb</li>
                                <li>V3 Climb</li>
                            </ul>
                        </div>
                        <div className="text-xl">
                            Session
                            <ul className='text-base'>
                                <li>V5 - easy - 1 tires</li>
                                <li>V6 - easy - 1 tires</li>
                                <li>V6 - medium - 2 tires</li>
                                <li>V7 - hard - 4 tires</li>
                                <li>V6 - hard - 5 tires</li>
                                <li>V6 - medium - 2 tires</li>
                            </ul>
                        </div>
                        <div className="text-xl">
                            Cool down
                            <ul className='text-base'>
                                <li>shoulder across body stretch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


