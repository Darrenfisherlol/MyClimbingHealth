import {Fragment} from "react";


export default function WorkoutPlan(){

    return(
        <>
            <div className="flex flex-col p-4">
                <h1 className={"text-2xl"}>WorkPlan Library</h1>
                <div className="flex flex-row justify-between mt-2">
                    <div className="flex-5">
                        <p style={{width: "75%"}}>Your personalized library of recovery and strengthening workouts</p>
                    </div>

                    <div className="flex-3 flex-row">
                        <p>Quick Filter</p>
                        <div className={"flex flex-row"}>
                            <p className={"mr-2"}>Any</p>
                            <p className={"mr-2"}>Strength</p>
                            <p className={"mr-2"}>Endurance</p>
                            <p>Recovery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col p-4"}>
                <div className={"flex flex-row justify-center"}>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 1</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 2</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 3</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 4</div>
                    <div className={"pr-4"} style={{height:"100px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        most used 5</div>
                </div>

                <h2 className={"p-4 text-xl"}>Create a new Work Plan</h2>

                <div>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div>
                            <div className={"justify-center text-center"} style={{height:"50px"}}> image</div>
                            <p className={"text-lg font-bold text-center"}> Finger Pulley A2-A4 Rehab</p>
                            <div>
                                <div className={"flex flex-row justify-evenly"}>
                                    <div className={"flex flex-col"}>
                                        <p>Duration </p>
                                        <p>4 months</p>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p>Exercises</p>
                                        <p>16 Total</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className={"justify-center text-center"} style={{height:"50px"}}> image</div>
                            <p className={"text-lg font-bold text-center"}>Hangboard Basics</p>
                            <div>
                                <div className={"flex flex-row justify-evenly"}>
                                    <div className={"flex flex-col"}>
                                        <p>Duration </p>
                                        <p>2 months</p>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p>Exercises</p>
                                        <p>12 Total</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className={"justify-center text-center"} style={{height:"50px"}}> image</div>
                            <p className={"text-lg font-bold text-center"}>Shoulder Moon Board Strength</p>
                            <div>
                                <div className={"flex flex-row justify-evenly"}>
                                    <div className={"flex flex-col"}>
                                        <p>Duration </p>
                                        <p>6 months</p>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p>Exercises</p>
                                        <p>24 Total</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className={"justify-center text-center"} style={{height:"50px"}}> image</div>
                            <p className={"text-lg font-bold text-center"}> Title of workout Plan</p>
                            <div>
                                <div className={"flex flex-row justify-evenly"}>
                                    <div className={"flex flex-col"}>
                                        <p>Duration </p>
                                        <p>6 months</p>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p>Exercises</p>
                                        <p>24 Total</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col pt-4"}>
                    <div className={"flex-1"}>
                        a
                    </div>
                    <div className={"flex-2"}>
                        b
                    </div>
                </div>
            </div>
        </>
    );
}