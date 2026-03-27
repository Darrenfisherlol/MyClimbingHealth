import { Outlet, Link } from "react-router";

export default function AppLayout() {
  return (
    <div className=".body">
      <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Ascent Recovery</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}