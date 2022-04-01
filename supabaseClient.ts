import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = import.meta.env.VITE_APP_SUPABASE_URL as string;
const supabaseAnonKey: string = import.meta.env
  .VITE_APP_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
