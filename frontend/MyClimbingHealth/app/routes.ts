import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    // Base
  layout("./layouts/appLayout.tsx", [
      index("./features/home/home.tsx"),
  ]),
    // Physical Therapist
  layout("./layouts/ptLayout.tsx", [
    route("pt/dashboard", "./features/ptDashboard/ptDashboard.tsx"),
    route("pt/clientlist", "./features/patients/patients.tsx"),
    route("pt/workoutplan", "./features/workoutPlan/workoutPlan.tsx"),
  ]),
    // Patients / Climbers
  layout("./layouts/patientsLayout.tsx", [
    route("p/dashboard", "./features/clientDashboard/clientDashboard.tsx"),
    route("p/climbingjournal", "./features/climbingJournal/climbingJournal.tsx"),
  ])
] satisfies RouteConfig;