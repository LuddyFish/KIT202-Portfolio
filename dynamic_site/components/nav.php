<?php
if (session_status() !== 2) {
    session_start();
}

$pages = [
    "index.php" => "Home",
    "registration.php" => "Registration",
    "testimonials.php" => "Testimonials",
    "participants.php" => "Entries",
    "login.php" => "Login",
    "logout.php" => "Logout"
];
?>
<nav>
    <ul>
        <?php
        foreach ($pages as $page => $title) {
            if ($title === "Login") {
                if (!isset($_SESSION["username"])) {
                    echo "<a href=$page>$title</a>";
                }
            } else if ($title === "Logout") {
                if (isset($_SESSION["username"])) {
                    echo "<a href=$page>$title</a>";
                }
            } else {
                echo "<li>";
                if (str_starts_with($_SERVER['REQUEST_URI'],"/$page")) { 
                    echo $title;
                } else { 
                    echo "<a href=$page>$title</a>";
                }
                echo "</li>";  
            }
        } 
        ?>
        <li>Contact</li>
    </ul>
</nav>