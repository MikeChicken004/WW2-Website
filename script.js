// This function checks the selected answer and updates the page accordingly
const checkAnswer = (userInput) => {
    // Reset all button borders first
    document.getElementById("a").classList.remove('incorrect', 'correct');
    document.getElementById("b").classList.remove('incorrect', 'correct');
    document.getElementById("c").classList.remove('incorrect', 'correct');
    document.getElementById("d").classList.remove('incorrect', 'correct');

    // Handle the answer and update borders and explanation through an if/else statement
    if (userInput === 'A: Michelangelo') {
        document.getElementById("explanation").innerHTML = "Michelangelo was a famous artist from centuries ago. ";
        document.getElementById("a").classList.add('incorrect');  // Add red border for incorrect answer
        document.getElementById("explanation").style.color = "red";
    } else if (userInput === 'B: Norman Rockwell') {
        document.getElementById("explanation").innerHTML = "Correct! Norman Rockwell painted Roosevelt's Four Freedoms.";
        document.getElementById("b").classList.add('correct');  // Add green border for correct answer (Norman Rockwell)
        document.getElementById("explanation").style.color = "green";
    } else if (userInput === 'C: Rosie the Riveter') {
        document.getElementById("explanation").innerHTML = "Rosie the Riveter was a shipyard and factory worker during WWII.";
        document.getElementById("c").classList.add('incorrect');  // Add red border for incorrect answer
        document.getElementById("explanation").style.color = "red";
    } else if (userInput === 'D: Benny the Bungler') {
        document.getElementById("explanation").innerHTML = "Benny the Bungler was a character featured in WWII propoganda posters.";
        document.getElementById("d").classList.add('incorrect');  // Add red border for incorrect answer
        document.getElementById("explanation").style.color = "red";
    } else {
        document.getElementById("explanation").innerHTML = "Invalid selection.";
    }
};

// Add event listeners to buttons after the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('a').addEventListener('click', () => checkAnswer('A: Michelangelo'));
    document.getElementById('b').addEventListener('click', () => checkAnswer('B: Norman Rockwell'));
    document.getElementById('c').addEventListener('click', () => checkAnswer('C: Rosie the Riveter'));
    document.getElementById('d').addEventListener('click', () => checkAnswer('D: Benny the Bungler'));
});
