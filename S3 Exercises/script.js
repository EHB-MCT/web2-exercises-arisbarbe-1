window.onload = function () {
    console.log('loaded');


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let randomNumberOfPC = randomNumber(1, 20);
    console.log(`Random Number: ${randomNumberOfPC}`);


    document.getElementById("btn").addEventListener("click", function () {
        let valueUser = document.getElementById("fname").value
        console.log(`Value of User: ${valueUser}`);

        if (valueUser == randomNumberOfPC) {
            console.log("You have guessed the mystery number!");
        } else if (valueUser < randomNumberOfPC) {
            console.log("The mystery number is higher. Guess again!");
        } else if (valueUser > randomNumberOfPC) {
            console.log("The mystery number is lower. Guess again!");
        } else if (isNaN(valueUser)) {
            console.log("That is not a valid number (Error)");
        }
    });

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
      });
      
      // resolve runs the first function in .then
      promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
      );

}