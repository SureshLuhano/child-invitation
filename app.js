document.addEventListener('DOMContentLoaded', function() {
    // Select all input fields with the class 'required'
    let requiredInputs = document.querySelectorAll('.required');
    let submitButton = document.getElementById('submit-btn');
    let registrationForm = document.getElementById('registration-form'); // Select the form

    // Function to check if all required fields are filled
    function checkInputs() {
        let allFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');
        submitButton.disabled = !allFilled;
    }

    // Listen for input events on all required fields
    requiredInputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    // Initial check
    checkInputs();

    // Add event listener to show the modal and reset the form when the submit button is clicked
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show(); // Show the modal

        // Reset the form
        registrationForm.reset();
    });
});
