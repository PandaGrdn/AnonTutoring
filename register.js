document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.onsubmit = async function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value; // Consider using Supabase Auth instead

        // Use Supabase to insert the new user
        const { data, error } = await supabase
            .from('users') // Your table name
            .insert([
                { email, username, password } // Password should be hashed or use Supabase Auth
            ]);

        if (error) {
            alert(error.message);
        } else {
            alert('Registration successful!');
            // Redirect or handle post-registration flow
        }
    };
});