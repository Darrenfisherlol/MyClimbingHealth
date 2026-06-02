import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./account.module.css";
import { registerPatient, registerPt } from "./accountService";

type AccountType = "pt" | "patient";

export default function CreateAccount() {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get("plan");
    const navigate = useNavigate();
    const { establishSession } = useAuth();

    const [name, setName] = useState("");
    const [accountType, setAccountType] = useState<AccountType | null>(null);
    const [ptCode, setPtCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!plan) {
            navigate("/price", { replace: true });
        }
    }, [plan, navigate]);

    function validateForm(): string | null {
        if (!accountType) return "Select whether you are a physical therapist or a patient.";
        if (!name.trim()) return "Name is required.";
        if (!email.trim()) return "Email is required.";
        if (password.length < 8) return "Password must be at least 8 characters.";
        if (password !== confirmPassword) return "Passwords do not match.";
        if (accountType === "patient" && !ptCode.trim()) {
            return "PT join code is required for patient accounts.";
        }
        return null;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setSubmitting(true);

        try {
            const { access_token } =
                accountType === "pt"
                    ? await registerPt(name.trim(), email.trim(), password)
                    : await registerPatient(
                          name.trim(),
                          email.trim(),
                          password,
                          ptCode.trim(),
                      );

            const authUser = await establishSession(access_token);

            // MVP: skip Stripe checkout — send straight to dashboard
            navigate(
                authUser.role === "pt" ? "/pt/dashboard" : "/patient/dashboard",
            );
        } catch (err) {
            setError(err instanceof Error ? err.message : "Could not create account.");
        } finally {
            setSubmitting(false);
        }
    }

    if (!plan) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-12 py-20 px-4">
            <div className="flex flex-col items-center gap-3 text-center max-w-xl">
                <h1 className={`text-4xl font-bold ${styles.PageTitle}`}>Create your account</h1>
                <p className={`text-lg ${styles.SubText}`}>
                    Signing up for the {plan.charAt(0).toUpperCase() + plan.slice(1)} plan.
                </p>
            </div>

            <div className={`${styles.Card} flex flex-col gap-6 p-8 w-full max-w-md`}>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={`text-sm font-medium ${styles.Label}`}>
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Alex Climber"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={`text-sm font-medium ${styles.Label}`}>
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className={`text-sm font-medium ${styles.Label}`}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            minLength={8}
                            autoComplete="new-password"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="confirmPassword"
                            className={`text-sm font-medium ${styles.Label}`}
                        >
                            Confirm password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            minLength={8}
                            autoComplete="new-password"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                    {accountType === "patient" ? (
                        <div className="flex flex-col gap-2">
                            <label htmlFor="ptCode" className={`text-sm font-medium ${styles.Label}`}>
                                PT join code
                            </label>
                            <input
                                id="ptCode"
                                type="text"
                                required
                                autoComplete="off"
                                placeholder="Code from your physical therapist"
                                className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                                value={ptCode}
                                onChange={(event) => setPtCode(event.target.value)}
                            />
                            <p className={`text-xs ${styles.SubText}`}>
                                Your PT shares this code so we can link your accounts.
                            </p>
                        </div>
                    ) : null}

                    <div className="flex flex-col gap-3">
                        <p className={`text-sm font-medium ${styles.Label}`}>I am a…</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                disabled={submitting}
                                onClick={() => setAccountType("pt")}
                                aria-pressed={accountType === "pt"}
                                className={`flex flex-col items-start gap-1 flex-1 p-4 text-left ${styles.TypeCard} ${
                                    accountType === "pt" ? styles.TypeCardSelected : ""
                                }`}
                            >
                                <span className={`text-base font-semibold ${styles.TypeCardTitle}`}>
                                    Physical therapist
                                </span>
                                <span className={`text-sm ${styles.TypeCardSub}`}>
                                    Manage climbers and workout plans
                                </span>
                            </button>
                            <button
                                type="button"
                                disabled={submitting}
                                onClick={() => setAccountType("patient")}
                                aria-pressed={accountType === "patient"}
                                className={`flex flex-col items-start gap-1 flex-1 p-4 text-left ${styles.TypeCard} ${
                                    accountType === "patient" ? styles.TypeCardSelected : ""
                                }`}
                            >
                                <span className={`text-base font-semibold ${styles.TypeCardTitle}`}>
                                    Patient
                                </span>
                                <span className={`text-sm ${styles.TypeCardSub}`}>
                                    Track recovery with your PT
                                </span>
                            </button>
                        </div>
                    </div>

                    {error ? (
                        <p className={`text-sm ${styles.Error}`} role="alert">
                            {error}
                        </p>
                    ) : null}

                    <button
                        type="submit"
                        disabled={submitting}
                        className={`px-6 py-3 text-sm font-semibold w-full ${styles.ButtonMain}`}
                    >
                        {submitting ? "Creating account…" : "Create account"}
                    </button>
                </form>

                <p className={`text-sm text-center ${styles.SubText}`}>
                    Already have an account?{" "}
                    <Link to="/account/login" className={styles.Link}>
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
