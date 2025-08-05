import { createClient } from '@supabase/supabase-js';

// Get Supabase config from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Add explicit checks for required values
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is required. Please set it in your .env file.');
}
if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is required. Please set it in your .env file.');
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Backend API URL from env (optional, fallback to hardcoded if not set)
export const backendApiUrl = import.meta.env.VITE_API_BASE_URL || 'https://mystartuplan-back.onrender.com';

export default supabase;
export { supabaseUrl, supabaseAnonKey };