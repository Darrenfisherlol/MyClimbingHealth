import { Outlet, Link } from "react-router";
import styles from './ptLayout.module.css';

export default function AppLayout() {
    return (
        <div>
            <header className={`flex flex-row items-center px-6 py-3 ${styles.header}`}>
                <h1 className={`text-xl font-bold ${styles.Logo}`}>
                    <Link to="/">Ascent Recovery</Link>
                </h1>
                <nav className={`flex flex-row items-center ml-4 gap-4 text-sm ${styles.Nav}`}>
                    <Link to="pt/dashboard">PT Dashboard</Link>
                    <Link to="patient/dashboard">Patient Dashboard</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}