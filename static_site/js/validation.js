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

const checks = [
    { element: first, errorId: "#first-err", message: "Please enter your first name" },
    { element: last, errorId: "#last-err", message: "Please enter your last name" },
    { element: race, errorId: "#race-err", message: "Please select a race" },
    { element: age, errorId: "#age-err", message: "Please select an age category" },
    { element: experience, errorId: "#exp-err", message: null },
    { element: email, errorId: "#email-err", message: "Please enter an email address", 
        check2: v => !v.includes("@") ? "Please enter a valid email address" : null },
    { element: password, errorId: "#password-err", message: "Please enter a password between 6-18 characters long", 
        check2: v => (v.length < 6 || v.length > 18) ? "Please enter a password between 6-18 characters long" : null },
    { element: password_confirm, errorId: "#password-confirm-err", message: "Passwords do not match", 
        check2: v => v !== password.value ? "Passwords do not match" : null }
]

function validateForm(event) {
    let errors = false;

    // loop through each element
    checks.forEach(({ element, errorId, message, check2 }) => {
        // Skip this element
        if (element == experience) {
            return;
        }
        let errorBox = form.querySelector(errorId)
        // check for current errors
        let errorMessage = element.value.length === 0 ? message : (check2 ? check2(element.value) : null);

        // apply error format if there is an error
        // else remove the format
        if (errorMessage) {
            errors = true;
            errorBox.innerHTML = errorMessage;
            element.classList.add("error-border");
        } else {
            errorBox.innerHTML = "";
            element.classList.remove("error-border");
        }
    });

    // prevent submission if form is incomplete
    // and update the form to include/disclude error messages
    if (errors == true) {
        checks.forEach(({ errorId }) => form.querySelector(errorId).classList.remove("hidden"));
        form.style.gridTemplateColumns = "auto 200px auto";
        document.querySelector(".col-span").style.gridColumnEnd = "3";
        event.preventDefault();
    } else {
        checks.forEach(({ errorId }) => form.querySelector(errorId).classList.add("hidden"));
        form.style.gridTemplateColumns = "auto 200px";
        document.querySelector(".col-span").style.gridColumnEnd = "2";
    }
}