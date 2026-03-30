import React from "react";

import styles from "./ptDashboard.module.css";


export default function HeadlineCard({header, value}:{header:string, value:string})
{
    return (
        <div className={`flex flex-col p-8 text-xl ${styles.HeadlineCard}`}>
            <p className={`text-xl`}>{header}</p>
            <p className={`text-3xl mt-2 font-bold`}>{value}</p>
        </div>
    );
}