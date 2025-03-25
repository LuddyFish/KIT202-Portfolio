/* Demonstration playground for Tutorial 4 */

console.log("playground.js is running");


/* Activity 2: Football Trophy */

let maskedOwlsWin = `Team Masked Owls wins the trophy!`;
let quollsWin = `Team Quolls wins the trophy!`;
let draw = `It's a draw! Both teams share the trophy`;

function winner(maskedOwlsResults, quollsResults) {
    if (maskedOwlsResults > quollsResults) {
        return maskedOwlsWin;
    } else if (maskedOwlsResults < quollsResults) {
        return quollsWin;
    } else {
        return draw;
    }
}

// Activity 2, Rule 1
let maskedOwls = [72, 63, 99, 105];
let quolls = [44, 89, 92, 111];

function average(values) {
    let mean = 0;
    for (let i = 0; i < values.length; i++) {
        mean += values[i];
    }
    mean /= values.length;

    return mean;
}

function determineRule1Winner() {
    let owl_avg = average(maskedOwls);
    let quoll_avg = average(quolls);

    return winner(owl_avg, quoll_avg);
}

// Activity 2, Rule 2
let newMaskedOwls = [86, 45, 54, 73, 124];
let newQuolls = [78, 61, 56, 77, 101];

function wins(scores1, scores2) {
    let wins = 0;
    for (let i in scores1) {
        if (scores1[i] > scores2[i]) {
            wins++;
        }
    }

    return wins;
}

function determineRule2Winner() {
    let owl_wins = wins(newMaskedOwls, newQuolls);
    let quoll_wins = wins(newQuolls, newMaskedOwls);

    return winner(owl_wins, quoll_wins);
}

document.getElementById("activity2-highest-avg").innerHTML = determineRule1Winner();
document.getElementById("activity2-most-wins").innerHTML =determineRule2Winner();

/* Activity 3: Tax */


let clients = { //TODO Record client incomes here

};

//TODO Write your other functions for Activity 3 here



/* Activity 4: Arbitrary HTML */

//TODO Write your function for Activity 4 here



// And call that function here
