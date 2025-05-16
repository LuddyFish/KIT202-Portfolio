<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Jack Luttrell">
        <title>Registration page of Marathon 2025</title>
        <link rel="stylesheet" href="styles/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/validation.js" defer></script>
    </head>

    <body>
        <div id="container">
            <?php
                require "components/header.php";
                require "components/nav.php";
            ?>
            <main>
                <p>Enter your details below to register: </p>
                <form id="registrationForm" class="form-label form-control col-span" novalidate action="registration.html" method="post">
                    <label for="first">First Name</label>
                    <input type="text" id="first" name="First Name" required/>
                    <span class="error hidden" id="first-err"></span>

                    <label fpr="last">Last Name</label>
                    <input type="text" id="last" name="Last Name" required/>
                    <span class="error hidden" id="last-err"></span>

                    <label for="race">Select an event</label>
                    <select id="race" name="Event" required>
                        <option value="" disabled selected hidden>Select your race</option>
                        <option value="42">Marathon</option>
                        <option value="21">Half marathon</option>
                        <option value="10">10 km</option>
                        <option value="5">5 km</option>
                        <option value="1">1 km fun run</option>
                    </select>
                    <span class="error hidden" id="race-err"></span>

                    <label for="age">Age group</label>
                    <select id="age" name="Age Category" required>
                        <option value="" disabled selected hidden>Select your age</option>
                        <option value="Junior">Under 21</option>
                        <option value="Open">21-39</option>
                        <option value="Master">40-49</option>
                        <option value="Senior Master">50+</option>
                    </select>
                    <span class="error hidden" id="age-err"></span>

                    <label>
                        <input type="checkbox" id="exp" name="Experience"/>
                        Prior experience
                    </label><br>
                    <span class="error hidden" id="exp-err"></span>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="Email" required/>
                    <span class="error hidden" id="email-err"></span>

                    <label for="password">Password</label>
                    <input type="password" id="password" name="Password" 
                    pattern=".{6,18}" title="Password must be 6-18 characters long" required/>
                    <span class="error hidden" id="password-err"></span>

                    <label for="password_confirm">Confirm password</label>
                    <input type="password" id="password_confirm" name="Confirm Password" 
                    pattern=".{6,18}" title="Password must be 6-18 characters long" required/>
                    <span class="error hidden" id="password-confirm-err"></span>
                    
                    <p>
                        <button class="btn" id="register_b" type="submit">Register</button>
                        <a href="index.html"><button class="btn" id="back_b" type="button">Cancel/Back</button></a>
                    </p>
                </form>
                <?php require "components/footer.php"; ?>
            </main>
        </div>
    </body>
</html>