import { Outlet, Link } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <header className={"flex flex-row justify-between p-2"} style={{ borderBottom: "1px solid #ddd" }}>

      <div className={"flex flex-row"}>
          <h1 className={"text-xl pr-4"}>
              <Link to="/">Ascent Recovery</Link>
          </h1>

          <nav className={"flex flex-rows"}>
              <Link to="pt/dashboard" className={"pr-2 mt-auto"}>Dashboard</Link>
              <Link to="pt/clientlist" className={"pr-2 mt-auto"}>Climbers</Link>
              <Link to="pt/workoutplan" className={"pr-2 mt-auto"}>WorkPlan</Link>
              <Link to="pt/colordesignpage" className={"pr-2 mt-auto"}>Color Design</Link>
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