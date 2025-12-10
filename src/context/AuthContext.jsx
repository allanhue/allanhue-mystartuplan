import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading] = useState(false); // Keep false so UI renders

    const signUp = async (email, password) => {
        throw new Error('Authentication is not configured yet.');
    };

    const signIn = async (email, password) => {
        throw new Error('Authentication is not configured yet.');
    };

    const logOut = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);