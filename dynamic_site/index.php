<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Jack Luttrell">
        <title>Registration page of Marathon 2025</title>
        <link rel="stylesheet" href="styles/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div id="container">
            <?php
                require "components/header.php";
                require "components/nav.php";
            ?>
            <main>
                <h2>Event Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari-atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labo-rum.</p>
                <h2>Pricing</h2>
                <table class="">
                    <tr>
                        <th>Event</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Marathon</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td>Half marathon</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td>10 km</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td>5 km</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td>1 km fun run</td>
                        <td>$$</td>
                    </tr>
                </table>
                <p>Entry includes:</p>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                </ul>
                <a href="registration.html"><button class="btn" id="register_b" type="button">Register</button></a>
                <h2>Course Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com-modo consequat.</p>
                <?php require "components/footer.php"; ?>
            </main>
        </div>
    </body>
</html>