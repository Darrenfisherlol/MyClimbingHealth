import React from "react";

export default function WorkoutCard(
    {image, title, description, sets, reps, hold, rest}
    :{ image:string, title:string, description:string, sets?:string, reps?:string, hold?:string, rest?:string })
{
    return (
        <div className={"p-2"}>
            <div className={"flex flex-row"}>
                <div>image</div>
                <div className={"flex flex-col ml-4"}>
                    <div>{title}</div>
                    <div>{description}</div>
                    <div className={"flex flex-row"}>
                        <div>{sets} </div>
                        <div className={"ml-2"}>{hold}</div>
                        <div className={"ml-2"}>{rest}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}