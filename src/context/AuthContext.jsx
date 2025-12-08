import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Supabase configuration is missing. Please check your environment variables.');
// }

// const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Auth backend is currently disabled; keep loading false so UI renders.
    const [loading] = useState(false);

    const signUp = async (email, password) => {
        throw new Error('Authentication is not configured yet.');
    };

    const signIn = async (email, password) => {
        throw new Error('Authentication is not configured yet.');
    };

    const logOut = async () => {
        setUser(null);
    };

    // useEffect(() => {
    //     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    //         setUser(session?.user ?? null);
    //         setLoading(false);
    //     });
    //     // Get current session on mount
    //     supabase.auth.getSession().then(({ data }) => {
    //         setUser(data?.session?.user ?? null);
    //         setLoading(false);
    //     });
    //     return () => listener?.subscription?.unsubscribe();
    // }, []);

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);