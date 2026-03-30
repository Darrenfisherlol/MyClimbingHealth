import {Fragment} from "react";

import HeadlineCard from "~/features/ptDashboard/HeadlineCard";
import ClimberWatchListCard from "~/features/ptDashboard/ClimberWatchListCard";
import ScheduleListCard from "~/features/ptDashboard/ScheduleListCard";
import RecentActivityCard from "~/features/ptDashboard/RecentActivityCard";

import styles from "./ptDashboard.module.css";

export default function PtDashboard() {
    return(
        <>
            <h1 className={"p-4 text-2xl font-bold"}> PT Dashboard</h1>
            <div className={"flex flex-row p-4"}>
                <div className={"flex-2"}>

                    <div className={"flex flex-row justify-around"}>
                        <HeadlineCard header={"Active Climbers"} value={"32"} />
                        <HeadlineCard header={"Avg. Work Plan Progress"} value={"56%"} />
                        <HeadlineCard header={"New Messages"} value={"3"} />
                    </div>

                    <div style={{height:"400px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        Chart
                    </div>

                    <div className={"flex flex-col"}>
                        {/*<div className={"flex flex-row justify-between"}>*/}
                        <div className={`flex flex-row justify-between font-bold ${styles.WatchlistTitle}`}>
                            <h2 className={"text-2xl"}>Patient Watch List</h2>
                            <span className={"flex mt-auto"}> View All Patients</span>
                        </div>

                        <div className={"flex flex-col justify-between"}>

                            <ClimberWatchListCard
                            name={"Barry Larry"}
                            engagement={57}
                            lastSession={12}/>

                            <ClimberWatchListCard
                                name={"Johnny Test"}
                                engagement={84}
                                lastSession={28}/>

                            <ClimberWatchListCard
                                name={"Salmon Tuna"}
                                engagement={30}
                                lastSession={8}/>
                        </div>
                    </div>
                </div>
                <div className={"flex-1"}>
                    <div className={`p-4 ${styles.Schedule}`}>
                        <h2 className={`text-2xl`}>Schedule</h2>
                        <div className={"flex flex-col"}>
                            <ScheduleListCard
                            name={"Tom Hilton"}
                            workPlanName={"Finger pulley training"}
                            date={"Jan 12"}
                            startTime={"10:30"}
                            endTime={"11:45"}
                            />
                            <ScheduleListCard
                                name={"Alex Beef"}
                                workPlanName={"Shoulder Strengthening"}
                                date={"Jan 12"}
                                startTime={"1:15"}
                                endTime={"3:00"}
                            />
                        </div>
                        <div className={`flex justify-center mt-4 pt-2 pb-2 ${styles.ScheduleViewButton}`}>View Full Schedule</div>
                    </div>

                    <div className={`mt-4`}>
                        <div className={`p-4 ${styles.RecentBody}`}>
                            <h2 className={`text-lg font-bold ${styles.RecentTitle}`}>Recent Activity</h2>
                            <div className={`flex flex-col mt-2 ${styles.RecentTitle}`}>

                                <RecentActivityCard
                                    name={"Mr. Tuna"}
                                    event={"Finished stage 4/8"}
                                    workPlanName={"Finger pulley training"}/>

                                <RecentActivityCard
                                    name={"Alex Beef"}
                                    event={"Started stage 2/4"}
                                    workPlanName={"Shoulder Strengthening"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}