import { Outlet, Link } from "react-router";
import styles from './layout.module.css';

export default function AppLayout() {
    return (
        <div>
            <header className={`flex flex-row justify-between px-6 py-3 ${styles.header}`}>
                <div className="flex items-center gap-8">
                    <h1 className={`text-2xl font-semibold ${styles.Logo}`}>
                        <Link to="/">Ascent Recovery</Link>
                    </h1>

                    <nav className={`flex gap-6 text-xl ${styles.LinkItem}`}>
                        <Link to="home/product">Products</Link>
                        <Link to="home/aboutUs">About us</Link>
                        <Link to="account/login">Login</Link>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}