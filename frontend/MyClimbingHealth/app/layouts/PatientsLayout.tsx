import { Outlet, Link } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Ascent Recovery</Link>
          <Link to="climber/dashboard">Clients</Link>
          <Link to="climber/climbingjournal">My Climbs</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}