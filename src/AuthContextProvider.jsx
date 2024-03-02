import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        token: "",
    });

    const login = (token) => {
        setAuthDetails({
            isLoggedIn: true,
            token: token,
        });
    };

    const logout = () => {
        setAuthDetails({
            isLoggedIn: false,
            token: "",
        });
    };

    const valueToBeKeptInContextBox = {
        ...authDetails,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={valueToBeKeptInContextBox}>
            {children}
        </AuthContext.Provider>
    );
}