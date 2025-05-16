<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Replace with your name">
  <link rel="stylesheet" href="styles/style.css"><!-- For later -->
  <title>Marathon 2025 Admin</title>
</head>
<body>
  <div id="container">
    <?php 
      require "components/header.php"; 
      require "components/nav.php";
    ?>
    <main>
      <h2>Registered Participants</h2>
      <?php
        require "dbconn.php";

        $sql = "SELECT particpantID, firstName, lastName, DOB, gender, experience FROM Participant;";
        
        if ($result = $conn->query($sql)) {
      ?>
      <p>
        <a href="add.html" class="main-action"><button class="btn" id="register_b" type="button">Add</button></a>
      </p>
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Experience</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
        <?php
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              echo "<tr>
                    <td>htmlspecialchars({$row['firstName']})</td>
                    <td>htmlspecialchars({$row['lastName']})</td>
                    <td>{$row['experience']}</td>
                    <td>{$row['DOB']}</td>
                    <td>{$row['gender']}</td>
                    <td><a href=\"edit.php?id={$row['particpantID']}\" class=\"main-action\">
                      <button class=\"btn\" id=\"register_b\" type=\"button\">
                        Edit
                      </button>
                    </a></td>
                    </tr>";
            }
          } else {
            ?>
              </table>
              <p>No registered participants.</p>
              <table>
            <?php
          }
        ?>
        </table>
      <?php
        } else {
          echo "<p>Unable to access data in '$sql'.</p>";
        }
      ?>
      <?php include "components/footer.php"; ?>
    </main>
  </div>
</body>
</html>
