function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  // Usage
  var email = getUrlParameter('email');
  console.log('Email:', email);

document.getElementById('submit-btn').addEventListener('click', async function () {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const gender = document.querySelector('input[name="gender"]:checked').value;
    // const confirmPassword = document.getElementById('confirm-password').value;

    // Construct the request body
    const bodyObj = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        password: password,
        // confirmPassword: confirmPassword
    };
    console.log("🚀 ~ bodyObj:", bodyObj)

    // try {
    //     // Send the registration data to the backend using fetch API
    //     const response = await fetch('/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(bodyObj)
    //     });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log(data); // Log the response data
    //         // You can redirect or show a success message here
    //     } else {
    //         throw new Error('Failed to register user');
    //     }
    // } catch (error) {
    //     console.error('Error:', error.message);
    //     // Handle error, show error message, etc.
    // }
});