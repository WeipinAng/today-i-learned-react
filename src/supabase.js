import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hahsrgaihmbnjabrjdci.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaHNyZ2FpaG1ibmphYnJqZGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMzMyODUsImV4cCI6MjAzOTgwOTI4NX0.5BgXiHf9pirGCC9ShR22735DWbaaCIEeZSkhtm50Tv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
