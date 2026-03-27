import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    // Base
  layout("./layouts/AppLayout.tsx", [
      index("./features/home/Home.tsx"),
  ]),
    // Physical Therapist
  layout("./layouts/PtLayout.tsx", [
    route("pt/dashboard", "./features/ptDashboard/PtDashboard.tsx"),
    route("pt/clientlist", "./features/patients/Patients.tsx"),
    route("pt/workoutplan", "./features/workoutPlan/WorkoutPlan.tsx"),
    route("pt/colordesignpage", "./features/colorDesignPage/colorDesignPage.tsx"),
  ]),
    // Patients ~ Clients ~ Climbers
  layout("./layouts/PatientsLayout.tsx", [
    route("climber/dashboard", "./features/clientDashboard/ClientDashboard.tsx"),
    route("climber/climbingjournal", "./features/climbingJournal/ClimbingJournal.tsx"),
  ])
] satisfies RouteConfig;