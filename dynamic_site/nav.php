<nav>
    <?php
        $pages = [
            "index.php" => "Home",
            "registration.php" => "Registration",
            "testimonials.php" => "Testimonials",
            "participants.php" => "Entries"
        ];
    ?>
    <ul>
        <?php
            foreach ($pages as $page => $title) {
            if (str_starts_with($_SERVER['REQUEST_URI'],"/$page")) { 
        ?>
        <li class="active">
        <?php 
            echo $title;
            } else { 
        ?> 
        <li>
        <a href=<?php echo $page; ?>>
            <?php echo $title; ?>
        </a> 
        <?php } ?>
        </li>
        <?php } ?>
        <li>Contact</li>
    </ul>
</nav>