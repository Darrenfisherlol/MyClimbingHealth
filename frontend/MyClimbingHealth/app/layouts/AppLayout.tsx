import { Outlet, Link } from "react-router";
import styles from './layout.module.css';

import GeneralFooter from "./../features/footer/GeneralFooter"
export default function AppLayout() {
    return (
        <div>
            <header className={`flex flex-row justify-between px-6 py-3 ${styles.header}`}>
                <div className="flex items-center gap-8">
                    <h1 className={`text-2xl font-semibold ${styles.Logo}`}>
                        <Link to="/">Ascent Recovery</Link>
                    </h1>

                    <nav className={`flex gap-6 text-xl ${styles.LinkItem}`}>
                        <Link to="account/login">Login</Link>
                        <Link to="price">Pricing</Link>
                    </nav>
                </div>
                {/*ACCESS */}
                <div className={"flex flex-col"}>
                    <div>
                        PT ---
                        <Link to="pt/dashboard" className={"pr-2 mt-auto"}>Dashboard</Link>
                        <Link to="pt/clientlist" className={"pr-2 mt-auto"}>Climbers</Link>
                        <Link to="pt/workoutplan" className={"pr-2 mt-auto"}>WorkPlan</Link>
                    </div>
                    <div>
                        Climber---
                        <Link to="patient/dashboard">Dashboard</Link>
                        <Link to="patient/climbingjournal">Climbing Journal</Link>
                        <Link to="patient/workoutplan">Workout Plan</Link>
                    </div>

                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <GeneralFooter />
        </div>
    );
}