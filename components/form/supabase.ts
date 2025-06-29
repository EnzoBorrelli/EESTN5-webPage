import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "supabaseURL";
const supabaseKey = "supabaseAnonKey";
export const supabase = createClient(supabaseUrl, supabaseKey);