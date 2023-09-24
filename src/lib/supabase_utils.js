import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cwemcactiqkwljywbpnh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3ZW1jYWN0aXFrd2xqeXdicG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzMjQ2NTUsImV4cCI6MjAwOTkwMDY1NX0.6d4NpXXLNiEa0BQkUhLVWZm3l5xWOgZAdM4BwsctEE4'
export const supabase = createClient(supabaseUrl, supabaseKey)
