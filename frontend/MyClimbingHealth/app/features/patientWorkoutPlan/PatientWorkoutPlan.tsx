import {Fragment} from "react";
import WorkoutCard from "./WorkoutCard";
import styles from "./patientWorkoutPlan.module.css";

export default function PatientWorkoutPlan(){

    return(
        <div className="flex flex-col p-4">

            <div className="flex flex-row justify-between mb-4">
                <div >
                    <h1 className={`text-2xl font-bold ${styles.PageTitle}`}>WorkPlanTitle</h1>
                    <p className={`text-sm ${styles.SubText}`}>desc about the workout plan</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-semibold px-4 py-2 ${styles.PhaseBadge}`}>Phase 3</span>
                    <span className={`text-sm ${styles.ProgressText}`}>25% Completed</span>
                </div>
            </div>

            <div>

                <div>
                    // Carousel of stages
                </div>

                <div className={"flex mt-2"}>
                    <div className={"flex-4"}>

                        <div className={"flex flex-row justify-between mt-2 mb-4"}>
                            <h2 className={`text-lg font-bold ${styles.StageTitle}`}>
                                Stage 3 — Stage Name
                            </h2>
                            <button className={`text-sm font-semibold ${styles.DownloadWorkout}`}>Download</button>
                        </div>

                        <div className={"flex flex-col"}>

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

                    <div className="flex-1 flex flex-col ml-4 gap-4">
                        <div className={`p-4 ${styles.SideCard}`}>
                            <h3 className={`text-sm font-semibold mb-2 ${styles.SideCardTitle}`}>Phase Goal</h3>
                            <p className="text-sm"> current phase goal desc</p>
                        </div>
                        <div className={`p-4 ${styles.SideCard}`}>
                            <h3 className={`text-sm font-semibold mb-2 ${styles.SideCardTitle}`}>Tips & Tricks</h3>
                            <p className="text-sm">Tips and tricks for one of the workouts</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}