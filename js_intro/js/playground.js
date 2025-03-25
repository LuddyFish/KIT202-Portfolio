/* Demonstration playground for Tutorial 4 */

console.log("playground.js is running");


/* Activity 2: Football Trophy */

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
    //TODO Write your code for determining the winner of the two teams and updating the page here
    owl_avg = average(maskedOwls);
    quoll_avg = average(quolls);

    if (owl_avg > quoll_avg) {
        console.log(`Team Masked Owls wins the trophy!`)
    } else if (quoll_avg > owl_avg) {
        console.log(`Team Quolls wins the trophy!`)
    } else {
        console.log(`It's a draw! Both teams share the trophy`)
    }
}

// Activity 2, Rule 2

function wins(scores1, scores2) {
    //TODO Implement this function
}

function determineRule2Winner() {
    //TODO Write your code for determining the winner of the two teams under the new conditions and updating the page here
}

//TODO Call the top-level functions determineRule1Winner and determinRule2Winner when they're ready




/* Activity 3: Tax */


let clients = { //TODO Record client incomes here

};

//TODO Write your other functions for Activity 3 here



/* Activity 4: Arbitrary HTML */

//TODO Write your function for Activity 4 here



// And call that function here
