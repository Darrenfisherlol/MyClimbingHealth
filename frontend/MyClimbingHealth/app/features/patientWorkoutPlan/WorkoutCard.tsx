import React from "react";
import styles from "./patientWorkoutPlan.module.css";

export default function WorkoutCard(
    {image, title, description, sets, reps, hold, rest}
    :{ image:string, title:string, description:string, sets?:string, reps?:string, hold?:string, rest?:string })
{
    return (
        <div className={`flex flex-row p-4 mb-3 gap-4 ${styles.WorkoutCard}`}>
            <div className={`w-20 h-20 flex-shrink-0 flex items-center justify-center text-xs ${styles.WorkoutImage}`}>
                {image}
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <p className={`font-semibold text-base ${styles.WorkoutTitle}`}>{title}</p>
                <p className={`text-sm ${styles.WorkoutDescription}`}>{description}</p>
                <div className="flex flex-row gap-2 mt-1 flex-wrap">
                    {sets && <span className={`text-xs px-3 py-1 ${styles.WorkoutStatPill}`}>{sets}</span>}
                    {reps && <span className={`text-xs px-3 py-1 ${styles.WorkoutStatPill}`}>{reps}</span>}
                    {hold && <span className={`text-xs px-3 py-1 ${styles.WorkoutStatPill}`}>{hold}</span>}
                    {rest && <span className={`text-xs px-3 py-1 ${styles.WorkoutStatPill}`}>{rest}</span>}
                </div>
            </div>
        </div>
    );
}