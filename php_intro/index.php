<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="replace_with_your_name">
    <title>KIT202 Tutorial: Introducing PHP</title>
    <link rel="stylesheet" href="styles/demo_page.css">
  </head>
  <body>
    <?php
    // Activity 2 helper functions
    // (Can be placed anywhere before first use but if any debug output is produced
    // then it's better for them to be defined inside the body element)
    $mwoWinMessage = "<strong>Masked Owls</strong> win the trophy!";
    $bndWinMessage = "<strong>Bandicoots</strong> win the trophy!";
    $drawMessage = "<strong>It's a draw!</strong> Masked Owls and Bandicoots share the trophy.";

    function average($values) {
      $mean = 0;
      foreach ($values as $i => $value) {
        $mean += $value;
      }
      $mean /= count($values);
      return $mean;
    }

    function wins($scores1, $scores2) {
      $wins = 0;
      foreach ($scores1 as $i => $team1_score) {
        if ($scores1[$i] > $scores2[$i]) {
          $wins++;
        }
      }
      return $wins;
    }
    ?>

    <h1>KIT202 Tutorial: Introducing PHP</h1>
    <p>Edit this file by adding PHP code where needed to produce answers in the boxes below:</p>
    <section>
      <h2>Masked Owls v Bandicoots</h2>
      <ul>
        <li>
          Who won last year (highest average rule):
          <div class="answer">
            <?php
            $maskedOwls = [44, 111, 92, 89];
            $bandicoots = [72, 105, 99, 63];

            $mkoAvg = average($maskedOwls);
            $bndAvg = average($bandicoots);

            if ($mkoAvg > $bndAvg) {
              echo $mwoWinMessage;
            } elseif ($bndAvg > $mkoAvg) {
              echo $bndWinMessage;
            } else {
              echo $drawMessage;
            }
            ?>
          </div>
        </li>
        <li>
          Who won this year (most wins rule):
          <div class="answer">
            <?php
            $maskedOwls = [78, 61, 56, 73, 101];
            $bandicoots = [86, 45, 54, 73, 124];

            $mkoWins = wins($maskedOwls, $bandicoots);
            $bndWins = wins($bandicoots, $maskedOwls);
            
            if ($mkoWins > $bndWins) {
              echo $mwoWinMessage;
            } elseif ($bndWins > $mkoWins) {
              echo $bndWinMessage;
            } else {
              echo $drawMessage;
            }
            ?>
          </div>
        </li>
      </ul>
    </section>

    <?php
    // Activity 3 data and helper function
    // Note: large amounts of data would not normally be hard-coded in the page

    $clients = [
      "Max": 24601,
      "Ash": 55100,
      "Bailey": 147800,
    ];

    function calculate_tax(int $income) {
      switch (true) {
        case $income > 130000:
          return $income * 0.27;
        case $income > 90000:
          return $income * 0.21;
        case $income > 45000:
          return $income * 0.15;
        default:
          return $income * 0.10;
      }
    }
    ?>

    <section>
      <h2>Tax Calculator</h2>
      <ul>
        <li>
          Tax assessments:
          <div class="answer">
          <?php
            foreach ($clients as $i => $name) {
              $tax = Math.round(calculate_tax($name));
              $net = $name - $tax;
              echo "Given $name's taxable income of $$$name, they pay $tax in tax, so their after tax income is $net.";
            }
          ?>
        </div>
        </li>
      </ul>
    </section>
  </body>
</html>
