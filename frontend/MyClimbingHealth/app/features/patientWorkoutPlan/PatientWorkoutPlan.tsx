import {Fragment} from "react";
import WorkoutCard from "./WorkoutCard";

export default function PatientWorkoutPlan(){

    return(
        <>
        patient workout plan
        <div className="flex flex-col p-4">
            <h1 className={"text-2xl font-bold "}>WorkPlanTitle</h1>
            <div className={"flex flex-row justify-between"}>
                <p>desc about the workout plan</p>
                <div className={"flex flex-col"}>
                    <div>Phase 3</div>
                    <div>25% Completed</div>
                </div>
            </div>

            <div>

                <div>
                    // Carousel of stages
                </div>

                <div className="mt-4">
                    <h2>Stage 3 - stage name</h2>
                </div>

                <div className={"flex mt-4"}>
                    <div className={"flex-4"}>
                        <div className={"flex flex-col"}>

                            <div> each row is a workout in a workplan</div>

                            <WorkoutCard
                                image={"image"}
                                title={"Finger Repeaters"}
                                description={"On a hangboard, we will crimp any hold for a short period of time for a long time"}
                                sets={"4 Sets"}
                                reps={"6 Reps"}
                                hold={"6s Hold"}
                                rest={"2m Rest"}
                            />
                            <WorkoutCard
                                image={"image"}
                                title={"Weighted Pullups"}
                                description={"On a hangboard or pullup bar, use a harness to strap 25 lbs to your belt. If the weight becomes too much, reduce by 5 lbs at a time. You've be surprised on how much you can do!"}
                                sets={"5 Sets"}
                                reps={"6 Reps"}
                                rest={"2m Rest"}
                            />

                            <WorkoutCard
                            image={"image"}
                            title={"wow this is a workout title"}
                            description={"Desc of a workout"}
                            sets={"4 Sets"}
                            reps={"5 Reps"}
                            hold={"10s Hold"}
                            rest={"2m Rest"}
                            />

                        </div>
                    </div>
                    <div className={"flex-1 flex flex-col ml-4 mr-4"}>
                        <div>Box of This phase desc goal</div>
                        <div>Tips and Tricks for this week</div>
                    </div>
                </div>


            </div>
        </div>
        </>
    );
}