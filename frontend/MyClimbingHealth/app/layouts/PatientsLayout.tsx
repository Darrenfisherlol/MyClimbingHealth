import { Outlet, Link } from "react-router";
import styles from './ptLayout.module.css';

export default function AppLayout() {
    return (
        <div>
            <header className={`flex flex-row justify-between items-center px-6 py-3 ${styles.header}`}>
                <div className="flex flex-row items-center gap-6">
                    <h1 className={`text-xl font-bold ${styles.Logo}`}>
                        <Link to="/">Ascent Recovery</Link>
                    </h1>
                    <nav className={`flex flex-row gap-4 text-sm ${styles.Nav}`}>
                        <Link to="patient/dashboard">My Dashboard</Link>
                        <Link to="patient/climbingjournal">Climbing Journal</Link>
                        <Link to="patient/workoutPlan">Workout Plan</Link>
                    </nav>
                </div>
                <div className={`flex flex-row items-center gap-4 text-sm ${styles.ProfileArea}`}>
                    <span>Profile</span>
                    <span>Settings</span>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}