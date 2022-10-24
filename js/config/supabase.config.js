import { createClient } from "@supabase/supabase-js";

const url = "https://ejgoucbruoquylikvzsi.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ291Y2JydW9xdXlsaWt2enNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NDQ1OTgsImV4cCI6MTk4MjEyMDU5OH0.9nHhs8bV_JaiUik_7rKOXgH8ixwL0MueMhavV060ZAM";

export const supabase = createClient(url, key);
