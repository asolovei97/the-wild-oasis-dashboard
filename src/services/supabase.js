import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://certhjzizbteqvnkclub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcnRoanppemJ0ZXF2bmtjbHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNjc4ODcsImV4cCI6MjA0OTk0Mzg4N30.jjvOXbfyt-qzsw91TIkc5BmCwyWDZAXZmr5j-cVQ9t0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
