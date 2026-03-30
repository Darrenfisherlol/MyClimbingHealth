import { Outlet, Link } from "react-router";

import styles from './patientsLayout.module.css';

export default function AppLayout() {
  return (
    <div>
      <header className={"p-16"} style={{ borderBottom: "1px solid #ddd" }}>
          <div className={"flex flex-row justify-between styles.header"}>

              <nav style={{ display: "flex", gap: "20px" }}>
                  <Link className={"font-bold"} to="/">Ascent Recovery</Link>
                  <Link to="patient/dashboard">My Dashboard</Link>
                  <Link to="patient/climbingjournal">Climbing Journal</Link>
                  <Link to="patient/workoutPlan">Workout Plan</Link>
              </nav>

              <div className={"flex flex-row"}>
                  <span className={"pr-2 mt-auto"}>Profile</span>
                  <span className={"pr-2 mt-auto"}>Settings</span>
              </div>

          </div>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}