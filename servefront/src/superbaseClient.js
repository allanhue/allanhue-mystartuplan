import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://itsxxuhjfmizksjeuuot.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY // or service_role for server-side
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase