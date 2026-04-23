import {Navigate} from "react-router";
import {useAuth} from "~/contexts/AuthContext";

type Props = {
    allowedRole: 'pt' | 'patient';
    children: React.ReactNode;
};

export default function ProtectedRoute({ allowedRole, children }: Props) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/account/login" replace />;
    }

    if (user.role !== allowedRole) {
        return <Navigate to="/home/home" replace />;
    }

    return <>{children}</>;
}

