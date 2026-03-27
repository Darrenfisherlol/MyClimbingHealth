import {Fragment} from "react";

export default function PtDashboard() {
    return(
        <>

            <h1 className={"p-4 text-2xl"}> PT Dashboard</h1>

            <div className={"flex flex-row p-4"}>
                <div className={"flex-2"}>

                    <div className={"text-xl"}>
                        <div className={"flex flex-row justify-around"}>
                            <div className={"flex flex-col m-2"}>
                                <p>Active Climbers:</p>
                                <p className={"mt-2"}>32</p>
                            </div>
                            <div className={"flex flex-col p-2"}>
                                <p>Avg. Work Plan Progress:</p>
                                <p className={"mt-2"}>56%</p>
                            </div>
                            <div className={"flex flex-col p-2"}>
                                <p>New Messages:</p>
                                <p className={"mt-2"}>3</p>
                            </div>
                        </div>
                    </div>

                    <div style={{height:"400px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        Chart
                    </div>

                    <div className={"flex flex-col"}>
                        {/*<div className={"flex flex-row justify-between"}>*/}
                        <div className={"flex flex-row justify-between"}>
                            <h2>Patient Watch List</h2>
                            <span> View All Patients</span>
                        </div>
                        <div className={"flex flex-col justify-between"}>
                            <div className={"flex flex-row justify-between"}>
                                <div className={"flex flex-row"}>
                                    <div>~Fun Profile~</div>
                                    <div className={"ml-4"}>Barry Larry</div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <div className={"flex flex-col mr-4"}>
                                        <p>Engagement</p>
                                        <p>Low - 15%</p>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p>Last Session</p>
                                        <p>12 Days Ago</p>
                                    </div>
                                </div>
                            </div>
                            <div>patient card 2</div>
                            <div>patient card 3</div>
                        </div>
                        <div>aaa</div>
                    </div>
                </div>
                <div className={"flex-1"}>
                    <div>
                        <h2>Schedule</h2>
                        <div className={"flex flex-col mt-2"}>
                            <div className={"flex flex-row"}>
                                <div>||</div>
                                <div className={"flex flex-col"}>
                                    <div>Start time - End Time</div>
                                    <div>Tom Hilton</div>
                                    <div>Shoulder Workouts</div>

                                </div>

                            </div>
                            <div className={"flex flex-row"}>
                                <div>||</div>
                                <div className={"flex flex-col"}>
                                    <div>Start time - End Time</div>
                                    <div>Alex Beef</div>
                                    <div>Thumb A-1 Pulley Injury</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-4"}>
                        <h2>Recent Activity</h2>
                        <div className={"flex flex-col mt-2"}>
                            <div className={"flex flex-row"}>
                                <div>Icon</div>
                                <p className={"ml-2"}> Mr. Tuna finished stage 4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}