import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://itsxxuhjfmizksjeuuot.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setUser(data.user ?? null);
        return data.user;
    };

    const signIn = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setUser(data.user ?? null);
        return data.user;
    };

    const logOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    };

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });
        // Get current session on mount
        supabase.auth.getSession().then(({ data }) => {
            setUser(data?.session?.user ?? null);
            setLoading(false);
        });
        return () => listener?.subscription?.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);