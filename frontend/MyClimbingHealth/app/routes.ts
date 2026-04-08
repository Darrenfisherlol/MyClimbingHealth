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
  ]),
    // Patients
  layout("./layouts/PatientsLayout.tsx", [
    route("patient/dashboard", "./features/clientDashboard/ClientDashboard.tsx"),
    route("patient/climbingjournal", "./features/climbingJournal/ClimbingJournal.tsx"),
    route("patient/workoutplan", "./features/patientWorkoutPlan/PatientWorkoutPlan.tsx"),
  ])
] satisfies RouteConfig;