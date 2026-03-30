import React from "react";

export default function ScheduleListCard({name, workPlanName, date, startTime, endTime}:{ name:string, workPlanName:string, date:string, startTime:string, endTime:string})
{
    return (
        <div className={"flex flex-row mt-4"}>
            <div>||</div>
            <div className={"flex flex-col"}>
                <div className={"font-bold"}>{date} {startTime} - {endTime}</div>
                <div>{name}</div>
                <div>{workPlanName}</div>
            </div>
        </div>
    );
}