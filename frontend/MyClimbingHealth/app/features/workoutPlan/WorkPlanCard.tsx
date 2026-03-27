import React from "react";

export default function WorkPlanCard({image, workPlanName, duration, exerciseCount}:{ image:string, workPlanName:string, duration:string, exerciseCount:number })
{
    return (
        <div>
            <div className={"justify-center text-center"} style={{height:"50px"}}> {image}</div>
            <p className={"text-lg font-bold text-center"}>{workPlanName}</p>
            <div>
                <div className={"flex flex-row justify-evenly"}>
                    <div className={"flex flex-col"}>
                        <p>Duration </p>
                        <p>{duration}</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p>Exercises</p>
                        <p>{exerciseCount} Total</p>
                    </div>
                </div>

            </div>
        </div>
    );
}