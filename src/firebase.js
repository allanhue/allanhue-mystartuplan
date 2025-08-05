import { createClient } from '@supabase/supabase-js';



// Supabase configuration (npm import)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Render backend API URL
export const backendApiUrl = 'https://mystartuplan-back.onrender.com';

console.log('Profile component loaded');