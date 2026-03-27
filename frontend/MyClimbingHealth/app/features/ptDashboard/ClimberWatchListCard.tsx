import React from "react";

export default function ClimberWatchListCard({name, engagement, lastSession}:{name:string, engagement:number, lastSession:number})
{
    function FormatEngagement(engagement: number){
        if(engagement > 80)
        {
            return `High ${engagement}%`;
        }
        if(engagement > 60)
        {
            return `Good ${engagement}%`;
        }
        if(engagement > 40)
        {
            return `Decent ${engagement}%`;
        }
        return `Low ${engagement}%`;

    }
    return (
        <div className={"flex flex-row justify-between"}>
            <div className={"flex flex-row"}>
                <div>Profile Pic or initials</div>
                <div className={"ml-4"}>{name}</div>
            </div>
            <div className={"flex flex-row"}>
                <div className={"flex flex-col mr-4"}>
                    <p>Engagement</p>
                    <p>{FormatEngagement(engagement)}</p>
                </div>
                <div className={"flex flex-col"}>
                    <p>Last Session</p>
                    <p>{lastSession} Days Ago</p>
                </div>
            </div>
        </div>
    );
}