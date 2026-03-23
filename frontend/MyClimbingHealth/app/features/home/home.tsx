// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Link } from "react-router";

export default function Home() {
    return(
        <>
            <div>
                <h1> Home page - Dashboard</h1>
            </div>

            <div className="flex flex-col">

                <div className="p-4">
                    <span>Navigate to:</span>
                    <ul>    
                        <li>--- Base ---</li>
                        <li><Link to="/">Dashboard</Link></li>
                    </ul>
                </div>

                <div className="p-4">                    
                    <span>Navigate to:</span>
                    <ul>    
                        <li>--- PT ---</li>
                        <li><Link to="pt/dashboard">PT Dashboard</Link></li>
                        <li><Link to="pt/dashboard">Patients List</Link></li>
                        <li><Link to="pt/workoutPlan">Workout Plans</Link></li>
                        <li><Link to="pt/message">Messaging</Link></li>
                    </ul>
                </div>


                <div className="p-4">                   
                    <span>Navigate to:</span>
                    <ul>    
                        <li>--- Climbers ---</li>
                        <li><Link to="p/dashboard">Clients</Link></li>
                        <li><Link to="p/climbingJournal">My Climbs</Link></li>
                    </ul>
                </div>
                
            </div>
            
        </>
    );
}