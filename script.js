const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');

// Replace with your Supabase project URL and anon key
const SUPABASE_URL = 'https://bddwcstwuliivbhwueni.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZHdjc3R3dWxpaXZiaHd1ZW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMTIwMzIsImV4cCI6MjA1Mjg4ODAzMn0.CbEtR82Boqt0yhIkH6iOLVOOkjPRfvESYQon64NsMsY';


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (!email) return;
    

    const { error } = await supabase
        .from('emails')
        .insert([{ email }]);

    if (error) {
        console.error('Error:', error);
        alert('There was an error submitting your email.');
    } else {
        alert('Email submitted successfully!');
        emailInput.value = ''; // Clear the input after submission
    }
});
