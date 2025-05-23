<?php
//TODO Start the session and include the DB connection
require "dbconn.php";
session_start();

$invalid_login = false;
if (isset($_POST["username"]) && isset($_POST["password"])) {
  $username = trim($_POST["username"]); //TODO Get value from $_POST with some lightweight cleaning of the username
  $password = $_POST["password"]; //TODO Get value from $_POST but, well, do you really want to modify their password?
  
  //TODO Complete the rest of the if statement, using authenticate()
  if (authenticate($username, $password)) {
    $_SESSION["username"] = $username;
    header("Location: participants.php");
    exit;
  } else {
    $invalid_login = true;
  }
}

/**
 * Queries the DBMS with the supplied user details
 * Returns true on successful authentication and false otherwise.
 */
function authenticate($user, $pass)
{
  global $conn;
  $verity = false;

  //TODO Complete this function in Activity 3 (not earlier)
  if ($result = $conn->query("SELECT * FROM User")) {
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        if ($user === $row['username']) {
          $verity = password_verify($pass, $row['password']);
        }
      }
    }
  }

  return $verity;
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
    <?php
    include "components/header.php";
    include "components/nav.php";
    ?>
    <main>
      <h2>Log in</h2>
      <!-- $_SERVER["PHP_SELF"] represents the current page -->
      <form class="editForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label class="form-label" for="username">Username</label>
        <input class="form-control" type="text" name="username" id="username" placeholder="Enter your username" maxlength="10" required>

        <label class="form-label">Password</label>
        <input class="form-control" type="password" name="password" id="password" placeholder="Enter your password" minlength="8" required>

        <p class="col-span">
          <button type="submit" class="btn main-action">Log in</button>
        </p>
      </form>

      <?php

      // Add PHP code here to display an error message if the login attempt is invalid.
      if ($invalid_login) {
        echo "<span class=\"error\">ERROR: Username or Password is incorrect.</span>";
      }

      ?>
      <p>Try accessing a protected page like <a href="participants.php">participants.php</a> when are/are not logged in.</p>

    </main>
    <?php
    include "components/footer.php";
    ?>
  </div>
</body>
</html>