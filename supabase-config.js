const SUPABASE_URL = 'https://unmqtbaudkqxyyvnafqm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wdcSayCVLUrfHuUgxuZqfw_FF4gz...';

if (typeof supabase !== 'undefined') {
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('تم الاتصال بـ Supabase بنجاح!');
