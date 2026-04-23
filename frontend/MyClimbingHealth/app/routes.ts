import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    // Base
    layout("./layouts/AppLayout.tsx", [
        index("./features/home/Home.tsx"),
        route("price", "./features/price/Pricing.tsx"),
        route("account/login", "./features/account/Login.tsx"),
        route("account/createaccount", "./features/account/CreateAccount.tsx"),
        route("account/checkout", "./features/account/Checkout.tsx"),
        route("account/forgotPassword", "./features/account/ForgotPassword.tsx"),

        // anything else
        route("*", "./components/PageNotFound.tsx"),

    //   route("home/login", "./features/product/Product.tsx"),
    //   route("home/product", "./features/product/Product.tsx"),
    //   route("pt/clientlist", "./features/patients/Patients.tsx"),
    //   route("pt/workoutplan", "./features/workoutPlan/WorkoutPlan.tsx"),

    ]),
    // Physical Therapists
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
    ]),

] satisfies RouteConfig;