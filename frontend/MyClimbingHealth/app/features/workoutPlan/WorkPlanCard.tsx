import React from "react";
import styles from "./workplan.module.css";

export default function WorkPlanCard({image, workPlanName, duration, exerciseCount}:{ image:string, workPlanName:string, duration:string, exerciseCount:number })
{
    return (
        <div className={`flex flex-col gap-3 p-5 cursor-pointer ${styles.WorkPlanCard}`}>
            <div className={`h-20 flex items-center justify-center text-sm ${styles.WorkPlanCardImage}`}>
                {image}
            </div>
            <p className={`text-base font-bold text-center ${styles.WorkPlanCardTitle}`}>
                {workPlanName}
            </p>

            <div className={`flex justify-around pt-3 ${styles.WorkPlanCardMeta}`}>
                <div className="flex flex-col items-center gap-1">
                    <span className={`text-xs uppercase tracking-wide ${styles.WorkPlanCardMetaLabel}`}>Duration</span>
                    <span className="text-sm font-semibold">{duration}</span>
                </div>
                <div className={`w-px ${styles.Divider}`} />
                <div className="flex flex-col items-center gap-1">
                    <span className={`text-xs uppercase tracking-wide ${styles.WorkPlanCardMetaLabel}`}>Exercises</span>
                    <span className="text-sm font-semibold">{exerciseCount} total</span>
                </div>
            </div>
        </div>
    );
}