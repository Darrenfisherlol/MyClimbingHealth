import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./account.module.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            const authUser = await login(email, password);
            navigate(authUser.role === "pt" ? "/pt/dashboard" : "/patient/dashboard");
        } catch {
            setError("Login failed. Check your email and password.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-12 py-20 px-4">
            <div className="flex flex-col items-center gap-3 text-center max-w-xl">
                <h1 className={`text-4xl font-bold ${styles.PageTitle}`}>Welcome back</h1>
                <p className={`text-lg ${styles.SubText}`}>
                    Sign in to your therapist or patient dashboard.
                </p>
            </div>

            <div className={`${styles.Card} flex flex-col gap-6 p-8 w-full max-w-md`}>
                <p className={`text-sm px-4 py-3 ${styles.Hint}`}>
                    Hey testers! <strong>pt</strong> or <strong>patient</strong> in your email to sign in to the
                    correct dashboard 
                    
                    (e.g. <span className="font-mono">you@pt.example.com</span> or{" "}
                    <span className="font-mono">you@patient.example.com</span>).
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
                            placeholder="you@pt.example.com"
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
                            autoComplete="current-password"
                            className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
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
                        {submitting ? "Signing in…" : "Sign in"}
                    </button>
                </form>

                <div className="flex flex-col items-center gap-2 text-sm">
                    <Link to="/account/forgotPassword" className={styles.Link}>
                        Forgot password?
                    </Link>
                    <p className={styles.SubText}>
                        No account?{" "}
                        <Link to="/account/createaccount" className={styles.Link}>
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
