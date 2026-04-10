import { Outlet, Link } from "react-router";
import styles from './layout.module.css';

export default function AppLayout() {
  return (
    <div>
      <header className={`flex flex-row justify-between p-2 ${styles.header}`}>

      <div className={"flex flex-row"}>
          <h1 className={`text-2xl pr-4 ${styles.Logo}`}>
              <Link to="/">Ascent Recovery</Link>
          </h1>

          <nav className={`flex flex-rows text-lg ${styles.Nav}`}>
              <Link to="pt/dashboard" className={"pr-2 mt-auto"}>Dashboard</Link>
              <Link to="pt/clientlist" className={"pr-2 mt-auto"}>Climbers</Link>
              <Link to="pt/workoutplan" className={"pr-2 mt-auto"}>WorkPlan</Link>
          </nav>
      </div>


        <div className={"flex flex-row"}>
            {/*<Link to="pt/dashboard">Dashboard</Link>*/}
            <span className={"pr-2 mt-auto"}>Profile</span>
            <span className={"pr-2 mt-auto"}>Settings</span>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}