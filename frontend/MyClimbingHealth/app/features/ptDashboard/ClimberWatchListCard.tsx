import React from "react";

import styles from './ptDashboard.module.css'
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
        <div className={`flex flex-row justify-between pr-4 pl-4 mt-4 ${styles.WatchListCard}`}>
            <div className={"flex flex-row"}>
                <div>Profile Pic or initials</div>
                <div className={"flex flex-col ml-4"}>
                    <div className={"font-bold"}>{name}</div>
                    <div>injury name</div>
                </div>

            </div>
            <div className={"flex flex-row"}>
                <div className={"flex flex-col mr-8"}>
                    <p>Engagement</p>
                    <p className={'font-bold'}>{FormatEngagement(engagement)}</p>
                </div>
                <div className={"flex flex-col"}>
                    <p>Last Session</p>
                    <p className={'font-bold'}>{lastSession} Days Ago</p>
                </div>
            </div>
        </div>
    );
}