const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_SERVICE_ROLE_KEY'; // Use the service role key for server-side operations

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };