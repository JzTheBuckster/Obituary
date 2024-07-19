document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Get form fields
        const name = document.getElementById('name');
        const dateOfBirth = document.getElementById('date_of_birth');
        const dateOfDeath = document.getElementById('date_of_death');
        const content = document.getElementById('content');
        const author = document.getElementById('author');

        // Check if fields are empty
        if (!name.value.trim()) {
            isValid = false;
            alert('Name is required.');
        }

        if (!dateOfBirth.value.trim()) {
            isValid = false;
            alert('Date of Birth is required.');
        }

        if (!dateOfDeath.value.trim()) {
            isValid = false;
            alert('Date of Death is required.');
        }

        if (!content.value.trim()) {
            isValid = false;
            alert('Content is required.');
        }

        if (!author.value.trim()) {
            isValid = false;
            alert('Author is required.');
        }

        // Validate date format (YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!dateRegex.test(dateOfBirth.value)) {
            isValid = false;
            alert('Date of Birth must be in the format YYYY-MM-DD.');
        }

        if (!dateRegex.test(dateOfDeath.value)) {
            isValid = false;
            alert('Date of Death must be in the format YYYY-MM-DD.');
        }

        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
