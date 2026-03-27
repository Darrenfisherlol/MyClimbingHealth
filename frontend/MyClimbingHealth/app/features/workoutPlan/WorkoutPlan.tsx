import {Fragment} from "react";

import WorkPlanCard from "~/features/workoutPlan/WorkPlanCard";

export default function WorkoutPlan(){

    return(
        <>
            <div className="flex flex-col p-4">
                <h1 className={"text-2xl"}>WorkPlan Library</h1>
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

            <div className={"flex flex-col p-4"}>
                <div className={"flex flex-row justify-center"}>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 1</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 2</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 3</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 4</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 5</div>
                </div>

                <h2 className={"p-4 text-xl"}>Create a new Work Plan</h2>

                <div>
                    <div className={"grid grid-cols-3 gap-4"}>

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
        </>
    );
}