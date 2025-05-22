<?php
//TODO Add session checking (_after_ you have inserted at least one user)
//TODO Include DB connection

$username_exists = false;
if (isset($_POST["username"]) && isset($_POST["password"])) {
  $username = ""; //TODO Get value from $_POST with some lightweight cleaning of the username
  $password = ""; //TODO Get value from $_POST and leave it unchanged
  $hashed_pass = ""; //TODO Generate the hashed password

  //TODO Complete this if statement (if time you may revise this to use exists())

  echo "<p>Inserted user '<strong>$username</strong>' with a hashed password of <strong>$hashed_pass</strong></p>";
  exit;
}

/** Optional improvement: Returns true if the given username is already in use. */
function exists($username)
{
  global $conn;
  //TODO If you get time then complete this function and call it above to avoid an SQL exception
  //Here or above you should also set $username_exists to control HTML content below

  return false;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="author" content="replace_with_your_name">
  <link rel="stylesheet" href="styles/style.css">
  <title>Admin: Create New User</title>
</head>
<body>
  <div id="container">
    <!-- Optional: You may choose to include common page components here -->
    <main>
      <h2>Create New User</h2>
      <?php
        //TODO Optional, if time: if $username_exists then output an error paragraph stating so
      ?>
      <form class="editForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label class="form-label" for="username">Username</label>
        <input class="form-control" type="text" name="username" id="username" placeholder="Enter the new username" maxlength="10" required>
        <span class="error-message unused"></span>

        <label class="form-label">Password</label>
        <input class="form-control" type="password" name="password" id="password" placeholder="Enter their password" minlength="8" required>
        <span class="error-message unused"></span>

        <p class="col-span">
          <button type="submit" class="btn main-action">Add User</button>
        </p>
      </form>
      <p>Return to the <a href="login.php">login</a> page.</p>
    </main>
    <!-- Optional: You may choose to include a common page component here -->
  </div>
</body>
</html>
