import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://txsxagqsqkctnmwfzbbe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4c3hhZ3FzcWtjdG5td2Z6YmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTEzMTUsImV4cCI6MjAxMDM2NzMxNX0.75Ws41gYiDr98wOqAvo9cHsUxo8OfcSmcogk7j-ueT8'
export const supabase = createClient(supabaseUrl, supabaseKey)