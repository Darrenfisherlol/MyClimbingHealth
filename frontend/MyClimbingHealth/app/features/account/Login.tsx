import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();


    async function HandleSubmit(e: React.ChangeEvent) {
        e.preventDefault();

        const authUser = await login(email, password);
        navigate(authUser.role === 'pt' ? '/pt/dashboard' : '/patient/dashboard');
    }

    return (
        <>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="email">
                Enter email:
            </label>
            <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">
                Enter password:
            </label>
            <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(event) => (setPassword(event.target.value))}
            />
            <button>Submit</button>
        </form>
        </>
    );
}