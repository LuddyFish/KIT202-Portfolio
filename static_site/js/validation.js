const form = document.forms.registrationForm;
const first = form.first,
    last = form.last,
    race = form.race,
    age = form.age,
    experience = form.exp,
    email = form.email,
    password = form.password,
    password_confirm = form.password_confirm;
if (form) {
    form.addEventListener('submit', validateForm);
} else {
    console.error('Unable to find the registration form. No validation will be performed.');
}

function validateForm(event) {
    let errors = "";

    if (first.value.length <= 0) {
        errors += "Please enter your first name\n";
    }
    if (last.value.length <= 0) {
        errors += "Please enter your last name\n";
    }
    if (race.value == "") {
        errors += "Please select a race\n";
    }
    if (age.value == "") {
        errors += "Please select an age category\n";
    }
    if (email.value.length <= 0) {
        errors += "Please enter an email address\n";
    } else if (!email.value.includes("@")) {
        errors += "Please enter a valid email address\n";
    }
    if (password.value.length < 6 && password.value.length > 18) {
        errors += "Please enter a password between 6-18 characters long\n";
    } else if (password_confirm.value != password.value) {
        errors += "Passwords do not match";
    }

    if (errors != "") {
        event.preventDefault()
    }
    return errors;
}