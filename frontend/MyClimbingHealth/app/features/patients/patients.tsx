import {Fragment} from "react";


export default function Patients(){

    return(
        <>
            <div className="flex flex-col p-4">
                <h1 className={"text-2xl"}>Client List</h1>
                <div className="flex flex-row justify-between">
                    <p>sub text</p>
                    <div className="flex flex-row">
                        <p className={"m-4"}>Filter one</p>
                        <p className={"m-4"}>Filter Two</p>
                        <p className={"m-4"}> -- all filter -- </p>
                    </div>

                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Reason</th>
                        <th>Recovery Progress</th>
                        <th>Feeling</th>
                        <th>Last Session</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Magi Carp</td>
                        <td>Finger pulley strain</td>
                        <td>75% - resumed light climbing</td>
                        <td>Optimistic</td>
                        <td>2026-03-20</td>
                    </tr>
                    <tr>
                        <td>Salmon Lemon</td>
                        <td>Shoulder impairment</td>
                        <td>60% - doing rehab exercises</td>
                        <td>Frustrated but improving</td>
                        <td>2026-03-18</td>
                    </tr>
                    <tr>
                        <td>Tuna Rice</td>
                        <td>Ankle sprain</td>
                        <td>85% - back to easy routes</td>
                        <td>Relieved</td>
                        <td>2026-03-22</td>
                    </tr>
                    <tr>
                        <td>Steak Sauce</td>
                        <td>Elbow tendinitis</td>
                        <td>50% - limited training</td>
                        <td>Cautious</td>
                        <td>2026-03-17</td>
                    </tr>
                    <tr>
                        <td>Sam Patel</td>
                        <td>Middle finger pulley injury</td>
                        <td>90% - nearly healed</td>
                        <td>Motivated</td>
                        <td>2026-03-23</td>
                    </tr>
                    <tr>
                        <td>Fish Stick</td>
                        <td>Wrist strain</td>
                        <td>65% - gradually increasing load</td>
                        <td>Careful</td>
                        <td>2026-03-19</td>
                    </tr>
                    <tr>
                        <td>Shark Nato</td>
                        <td>Knee pain</td>
                        <td>70% - mobility work ongoing</td>
                        <td>Hopeful</td>
                        <td>2026-03-21</td>
                    </tr>
                    <tr>
                        <td>Shell Fish</td>
                        <td>Lower back strain</td>
                        <td>55% - focusing on core strength</td>
                        <td>Determined</td>
                        <td>2026-03-16</td>
                    </tr>
                    </tbody>
                </table>

                <div className={"flex flex-row"}>
                    <div className={"flex-2"} style={{height:"400px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        Chart 1
                    </div>
                    <div className={"flex-1"} style={{height:"400px", width: "100%", textAlign:"center", alignContent:'center'}}>
                        Chart 2
                    </div>
                </div>
            </div>
        </>
    );
}