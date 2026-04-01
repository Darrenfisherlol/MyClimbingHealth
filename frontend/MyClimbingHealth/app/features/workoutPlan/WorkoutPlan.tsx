import {Fragment} from "react";

import WorkPlanCard from "~/features/workoutPlan/WorkPlanCard";

export default function WorkoutPlan(){

    return(
        <div className={`p-4`}>
            <div className="flex flex-col">
                <h1 className={"text-2xl font-bold "}>WorkPlan Library</h1>
                <div className="flex flex-row justify-between mt-2">
                    <div className="flex-5">
                        <p style={{width: "75%"}}>Your personalized library of recovery and strengthening workouts</p>
                    </div>

                    <div className="flex-3 flex-row">
                        <p>Quick Filter</p>
                        <div className={"flex flex-row"}>
                            <p className={"mr-2"}>Any</p>
                            <p className={"mr-2"}>Strength</p>
                            <p className={"mr-2"}>Endurance</p>
                            <p>Recovery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col pt-4"}>
                <h2 className={"text-xl"}>Create a new Work Plan</h2>
                <div className={"grid grid-cols-3 mt-2 gap-4"}>

                    <WorkPlanCard
                    image={"image"}
                    workPlanName={"Finger Pulley A2-A4 Rehab"}
                    duration={"4 months"}
                    exerciseCount={16}
                    />

                    <WorkPlanCard
                        image={"image"}
                        workPlanName={"Hangboard Basics"}
                        duration={"2 months"}
                        exerciseCount={12}
                    />

                    <WorkPlanCard
                        image={"image"}
                        workPlanName={"Shoulder Moon Board Strength"}
                        duration={"8 months"}
                        exerciseCount={24}
                    />

                    <WorkPlanCard
                        image={"image"}
                        workPlanName={"Title of workout Plan"}
                        duration={"3 months"}
                        exerciseCount={8}
                    />

                </div>
            </div>
        </div>
    );
}