<?php
//TODO Start the session and include the DB connection

$invalid_login = false;
if (isset($_POST["username"]) && isset($_POST["password"])) {
  $username = ""; //TODO Get value from $_POST with some lightweight cleaning of the username
  $password = ""; //TODO Get value from $_POST but, well, do you really want to modify their password?
  
  //TODO Complete the rest of the if statement, using authenticate()
}

/**
 * Queries the DBMS with the supplied user details
 * Returns true on successful authentication and false otherwise.
 */
function authenticate($user, $pass)
{
  global $conn;

  //TODO Complete this function in Activity 3 (not earlier)

  return true; //A terrible _default_ value, which you will replace
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="author" content="replace_with_your_name">
  <link rel="stylesheet" href="styles/style.css">
  <title>Admin: Log in</title>
</head>
<body>
  <div id="container">
    <!-- Optional: You may choose to include common page components here -->
    <main>
      <h2>Log in</h2>
      <!-- $_SERVER["PHP_SELF"] represents the current page -->
      <form class="editForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label class="form-label" for="username">Username</label>
        <input class="form-control" type="text" name="username" id="username" placeholder="Enter your username" maxlength="10" required>
        <span class="error-message unused"></span>

        <label class="form-label">Password</label>
        <input class="form-control" type="password" name="password" id="password" placeholder="Enter your password" minlength="8" required>
        <span class="error-message unused"></span>

        <p class="col-span">
          <button type="submit" class="btn main-action">Log in</button>
        </p>
      </form>

      <?php

      // Add PHP code here to display an error message if the login attempt is invalid.

      ?>
      <p>Try accessing a protected page like <a href="participants.php">participants.php</a> when are/are not logged in.</p>

    </main>
    <!-- Optional: You may choose to include a common page component here -->
  </div>
</body>
</html>