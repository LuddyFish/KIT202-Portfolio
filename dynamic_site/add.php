<?php
require "components/session.php";

include "dbconn.php";

$new = "INSERT 
        INTO Participant (firstName, lastName, DOB, gender, experience)
        VALUES (?, ?, ?, ?, ?)";

$statement = $conn->prepare($new);
$statement->bind_param('sssss', $_POST['fname'], $_POST['lname'], $_POST['dob'], $_POST['gender'], $_POST['experienced']);

if ($statement->execute()) {
    header("Location: participants.php");
}

$conn->close();