import React from "react";

export default function RecentActivityCard({name, event, workPlanName}:{ name:string, workPlanName:string, event:string})
{
    return (
        <div className={"flex flex-row"}>
            <div>Icon</div>

            <div className={"flex flex-col"}>
                <p className={"ml-2"}>{name}</p>
                <p className={"ml-2"}>{event}</p>
                <p className={"ml-2"}>{workPlanName}</p>
            </div>

        </div>
    );
}