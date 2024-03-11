document.getElementById('submit-btn').addEventListener('click', async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirm-password').value;

    // Construct the request body
    const requestBody = {
        email: email,
        password: password,
        // confirmPassword: confirmPassword
    };

    try {
        // Send the registration data to the backend using fetch API
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Log the response data
            // You can redirect or show a success message here
        } else {
            throw new Error('Failed to register user');
        }
    } catch (error) {
        console.error('Error:', error.message);
        // Handle error, show error message, etc.
    }
});