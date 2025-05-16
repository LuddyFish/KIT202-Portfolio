<?php
//TODO Include/Require dbconn
require "dbconn.php";
//Check if appropriate GET (and POST) data has been received.
//If not then redirect the browser, which can only happen before ordinary content is generated.
if (!isset($_GET["id"])) {
  redirect("participants.php");
}
$id = $_GET["id"];

if (empty($_POST)) {
  // No POST data. Retrieve record for editing.
  $row = retrieve();
  // print_r($row); // Useful for debugging
} else {
  // POST data available. Update the database table.
  update();
  $conn->close();
  redirect("participants.php");
}

/** Redirect the user to another URL.  */
function redirect($url)
{
  header("location: $url");
  exit;
}

/** Queries the database for the record matching the global id and returns the result set. */
function retrieve()
{
  global $conn;
  global $id;

  $query = "SELECT *
            FROM Participant
            WHERE particpantID = $id;";
  $statement = $conn->prepare($query);
  if ($statement->execute()) {
    $row = $statement->get_result()->fetch_assoc();
  }
  return $row;
}

/** Updates the database with parsed values from the POST data. */
function update()
{
  global $conn;
  global $id;

  $query = "UPDATE Participant
  SET firstName = ?,
      lastName = ?,
      DOB = ?,
      gender = ?,
      experience = ?
  WHERE particpantID = ?;";
  $statement = $conn->prepare($query);
  $statement->bind_param('sssssi', $_POST['fname'], $_POST['lname'], $_POST['dob'], $_POST['gender'], $_POST['experienced'], $id);
  if ($statement->execute()) {
    if (empty($_POST)) {
      $row = retrieve();
    }
    // TODO: Ask about the end of Wk11 tutorial because it doesn't make sense
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="author" content="replace_with_your_name">
  <link rel="stylesheet" href="styles/style.css">
  <title>Admin: Edit Participant</title>
</head>
<body>
  <div id="container">
    <?php
    include "components/header.php";
    include "components/nav.php";
    ?>
    <main>
      <h2>Edit Participant</h2>
      <!-- $_SERVER["PHP_SELF"] represents the current page -->
      <form class="editForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"] . "?id=$id"); ?>">
        <label class="form-label" for="fname">First name</label>
        <input class="form-control" type="text" name="fname" id="fname" value="<?php echo $row['firstName']; ?>">
        <span class="error-message unused"></span>

        <label class="form-label">Last name</label>
        <input class="form-control" type="text" name="lname" id="lname" value="<?php echo $row['lastName']; ?>">
        <span class="error-message unused"></span>

        <fieldset class="col-span">
          <?php
            function exp_check($entity, $value) {
              if ($entity === $value) {
                echo "checked";
              } else {
                echo "";
              }
            }
          ?>
          <legend class="form-label">Prior race experience?</legend>
          <label class="form-label"><input type="radio" name="experienced" value="yes" <?php exp_check($row['experience'], "Yes"); ?> required> Yes</label>
          <label class="form-label"><input type="radio" name="experienced" value="no" <?php exp_check($row['experience'], "No"); ?> required> No</label>
        </fieldset>

        <label class="form-label">Date of birth</label>
        <input class="form-control" type="date" name="dob" id="dob" value="<?php echo $row['DOB']; ?>">
        <span class="error-message unused"></span>

        <label class="form-label">Gender</label>
        <select class="form-control" id="gender" name="gender">
          <?php
            function gender_check($entity, $value) {
              if ($entity === $value) {
                echo "selected";
              } else {
                echo "";
              }
            }
          ?>
          <option value="undisclosed" <?php gender_check($row['gender'], "Undisclosed"); ?>>Prefer not to disclose</option>
          <option value="male" <?php gender_check($row['gender'], "Male"); ?>>Male</option>
          <option value="female" <?php gender_check($row['gender'], "Female"); ?>>Female</option>
          <option value="neither" <?php gender_check($row['gender'], "Neither"); ?>>Non-Binary, Gender Fluid, Gender non-conforming, or Gender queer</option>
        </select>

        <p class="col-span">
          <button type="submit" class="btn main-action">Update</button>
          <a href="participants.php" class="btn cancel">Cancel</a>
        </p>
      </form>
    </main>
    <?php
    include "components/footer.php";
    ?>
  </div>
</body>
</html>
