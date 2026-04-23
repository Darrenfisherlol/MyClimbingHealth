
import SubscriptionCard from "./SubscriptionCard";

export default function Pricing() {

    const liteBenefits = [
        "Therapist Dashboard",
        "Custom Workout Plans",
        "Patient Dashboard",
        "Patient Workout Plans",
        "Progress Tracking",];
    const proBenefits = ["Lite plan but better"];

    return(
        <div className="flex flex-col items-center gap-12 py-20 px-4">

            <div className="flex flex-col items-center gap-3 text-center max-w-xl">
                <h1 className="text-4xl font-bold">Easy pricing</h1>
                <p className="text-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
                    Built for physical therapists and trainers working with climbers.
                </p>
                <p className="text-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
                    Pick the plan that fits your practice.
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-6">
                <SubscriptionCard
                    planKey="lite"
                    planName="Lite"
                    cost="25"
                    desc="Perfect tooling to help climbers flash their projects"
                    benefits={liteBenefits}
                />
                <SubscriptionCard
                    planKey="pro"
                    planName="Pro"
                    cost="50"
                    desc="Lite but its the pro version"
                    benefits={proBenefits}
                />
            </div>
        </div>
    )
}