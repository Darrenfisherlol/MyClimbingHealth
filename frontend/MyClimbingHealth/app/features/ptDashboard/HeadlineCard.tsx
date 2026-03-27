import React from "react";

export default function HeadlineCard({header, value}:{header:string, value:string})
{
    return (
        <div className={"flex flex-col m-2 text-xl"}>
            <p>{header}</p>
            <p className={"mt-2"}>{value}</p>
        </div>
    );
}