import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import styles from "./account.module.css";

export default function CreateAccount() {
    const [searchParams] = useSearchParams();
    const plan = searchParams.get("plan");
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!plan) {
            navigate("/price", { replace: true });
        }
    }, [plan, navigate]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        navigate(`/account/checkout?plan=${plan}`);
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
                <p className={`text-sm px-4 py-3 ${styles.Hint}`}>
                    FOR TESTERS (to access wanted dashboard) Include <strong>pt</strong> or <strong>patient</strong> in your email so we route you to the
                    right dashboard after signup.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={`text-sm font-medium ${styles.Label}`}>
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@patient.example.com"
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
                            autoComplete="new-password"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className={`text-sm font-medium ${styles.Label}`}>
                            Confirm password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            autoComplete="new-password"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                    {error ? (
                        <p className={`text-sm ${styles.Error}`} role="alert">
                            {error}
                        </p>
                    ) : null}

                    <button
                        type="submit"
                        className={`px-6 py-3 text-sm font-semibold w-full ${styles.ButtonMain}`}
                    >
                        Continue to checkout
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
