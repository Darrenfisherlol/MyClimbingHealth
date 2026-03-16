import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
  layout("./layouts/appLayout.tsx", [
    index("./features/home/dashboard.tsx"),
    route("clients", "./features/clients/clientDashboard.tsx"),
    route("my-climbs", "./features/myClimbs/myclimb.tsx"),
  ])
] satisfies RouteConfig;