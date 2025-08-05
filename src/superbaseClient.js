
import { createClient } from '@supabase/supabase-js';

// Get Supabase config from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Backend API URL from env (optional, fallback to hardcoded if not set)
export const backendApiUrl = import.meta.env.VITE_API_BASE_URL || 'https://mystartuplan-back.onrender.com';

export default supabase;
export { supabaseUrl, supabaseAnonKey, backendApiUrl };