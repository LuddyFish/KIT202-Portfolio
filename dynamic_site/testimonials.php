<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Jack Luttrell">
        <title>Marathon 2025 Testimonials</title>
        <link rel="stylesheet" href="styles/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div id="container">
            <?php
                require "header.php";
                require "nav.php";
            ?>
            <main>
                <h2>Testimonials</h2>
                <p>Here's what past participants had to say about the event...</p>
                <?php
                    function BuildQuote($quote, $author) {
                        echo '<aside>
                                <div class="quote">';
                        echo $quote;
                        echo '</div>
                                <div class="author">';
                        echo $author;
                        echo '</div
                                </aside>';
                    }
                ?>
                <section id="testimonials">
                    <?php
                        $q = "Better than being stuck in dentention, I guess...";
                        $a = "Lee Ping";
                        BuildQuote($q, $a);

                        $q = "Yoshi! (Better than Mario Kart. No BS blue shell to stop my lead.)";
                        $a = "Yoshi";
                        BuildQuote($q, $a);

                        $q = "2F4U";
                        $a = "Wally West";
                        BuildQuote($q, $a);

                        $q = "It was a great race until Kronk pulled the wrong lever!";
                        $a = "Yzma (and Kronk)";
                        BuildQuote($q, $a);

                        $q = "Great sights but don't expect dragons to be allowed into the race";
                        $a = "Hiccup";
                        BuildQuote($q, $a);

                        $q = "Gyrururururuk. (I only entered to keep Dr Doofenshmirtz from cheating with his \"Super-Speed-Inator\". Good exercise otherwise)";
                        $a = "Perry the Platypus";
                        BuildQuote($q, $a);

                        $q = "She lost! How could she lose!? She was leading ahead by 3 minutes!";
                        $a = "Mushu";
                        BuildQuote($q, $a);

                        $q = "Great race. The race tracker devices need to be updated to track ghosts though...";
                        $a = "Danny Phantom";
                        BuildQuote($q, $a);

                        $q = "Hyah! Hah!";
                        $a = "Link";
                        BuildQuote($q, $a);

                        $q = "I'm not sure if using my Ginormica powers to win was within the rules but I do recommend competiting.";
                        $a = "Susan Murphy";
                        BuildQuote($q, $a);

                        $q = "It was such a scenic race that I forgot I was even racing. The officials had to come look for me after I wondered off track.";
                        $a = "Luna Lovegood";
                        BuildQuote($q, $a);

                        $q = "All I can say is that I bet the Easter Bunny!";
                        $a = "Jack Frost";
                        BuildQuote($q, $a);
                    ?>
                </section>
                <?php require "footer.php"; ?>
            </main>
        </div>
    </body>
</html>