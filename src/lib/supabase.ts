
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zcolxdekvjljfeneoitk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjb2x4ZGVrdmpsamZlbmVvaXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzM2MDAsImV4cCI6MjA0NjMwOTYwMH0.dummy';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);