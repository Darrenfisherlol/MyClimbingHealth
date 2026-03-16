// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Link } from "react-router";

export default function Dashboard() {
    return(
        <>
            <div>
                <h1>Dashboard</h1>
            </div>

            <div>
                <ul>
                    <li>draft</li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/my-climbs">My Climbs</Link></li>
                </ul>
            </div>
        </>
    );
}