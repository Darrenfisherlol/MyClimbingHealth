const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type AuthProfile = {
    userId: number;
    email: string;
    name: string;
    role: "PT" | "PATIENT";
    physicalTherapist: { id: number; joinCode: string } | null;
    patient: {
        id: number;
        therapists: { id: number; joinCode: string }[];
    } | null;
};

export type AuthTokenResponse = {
    access_token: string;
};

async function parseErrorMessage(res: Response): Promise<string> {
    try {
        const body = await res.json();
        const message = body?.message;
        if (Array.isArray(message)) return message.join(", ");
        if (typeof message === "string") return message;
    } catch {
        /* ignore */
    }
    return "Request failed";
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }

    return res.json() as Promise<T>;
}

export function login(email: string, password: string): Promise<AuthTokenResponse> {
    return apiFetch<AuthTokenResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}

export function registerPt(
    name: string,
    email: string,
    password: string,
): Promise<AuthTokenResponse> {
    return apiFetch<AuthTokenResponse>("/auth/register/pt", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
    });
}

export function registerPatient(
    name: string,
    email: string,
    password: string,
    ptCode: string,
): Promise<AuthTokenResponse> {
    return apiFetch<AuthTokenResponse>("/auth/register/patient", {
        method: "POST",
        body: JSON.stringify({ name, email, password, ptCode }),
    });
}

export function getProfile(accessToken: string): Promise<AuthProfile> {
    return apiFetch<AuthProfile>("/auth/profile", {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
}

export function profileRoleToAppRole(role: AuthProfile["role"]): "pt" | "patient" {
    return role === "PT" ? "pt" : "patient";
}
