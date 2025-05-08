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
    <!-- For final activity you can add some things here -->
    <main>
      <h2>Registered Participants</h2>
      <?php
        require "dbconn.php";

        $sql = "SELECT firstName, lastName, DOB, gender, experience FROM Participant;";
        
        if ($result = $conn->query($sql)) {
      ?>
        <table>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Experience</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        <?php
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              echo "<tr>
                    <td>{$row['firstName']}</td>
                    <td>{$row['lastName']}</td>
                    <td>{$row['experience']}</td>
                    <td>{$row['DOB']}</td>
                    <td>{$row['gender']}</td>
                    </tr>";
            }
          }
        ?>
        </table>
      <?php
        }
        
      ?>
    </main>
    <!-- For final activity you can add something here -->
  </div>
</body>
</html>
