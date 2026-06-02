import { useState } from "react";
import { Link } from "react-router";
import styles from "./account.module.css";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Neeedd to wire to backend reset flow
        // Neeedd to wire to backend reset flow
        // Neeedd to wire to backend reset flow
        setSubmitted(true);
    }

    return (
        <div className="flex flex-col items-center gap-12 py-20 px-4">
            <div className="flex flex-col items-center gap-3 text-center max-w-xl">
                <h1 className={`text-4xl font-bold ${styles.PageTitle}`}>Reset password</h1>
                <p className={`text-lg ${styles.SubText}`}>
                    Enter your email and we&apos;ll send reset instructions.
                </p>
            </div>

            <div className={`${styles.Card} flex flex-col gap-6 p-8 w-full max-w-md`}>
                {submitted ? (
                    <p className={`text-sm text-center ${styles.SubText}`}>
                        Ohhhh yaaaa new email coming... amazing code right?
                    </p>
                ) : (
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
                                className={`px-4 py-3 text-sm w-full ${styles.Input}`}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`px-6 py-3 text-sm font-semibold w-full ${styles.ButtonMain}`}
                        >
                            Send reset link
                        </button>
                    </form>
                )}

                <p className={`text-sm text-center ${styles.SubText}`}>
                    <Link to="/account/login" className={styles.Link}>
                        Back to sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
