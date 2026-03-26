// Function to handle the answer check
const checkAnswer = (userInput) => {
    // Reset all button borders first
    document.getElementById("a").classList.remove('incorrect', 'correct');
    document.getElementById("b").classList.remove('incorrect', 'correct');
    document.getElementById("c").classList.remove('incorrect', 'correct');
    document.getElementById("d").classList.remove('incorrect', 'correct');

    // Handle the answer and update borders and explanation through an if/else statement
    if (userInput === 'A: Wendell Willkie') {
        document.getElementById("explanation").innerHTML = "Wendell Willkie ran for the Republicans against FDR in 1940.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("a").classList.add('incorrect');  // Add red border for incorrect answer
    } else if (userInput === 'B: Harry Truman') {
        document.getElementById("explanation").innerHTML = "Harry Truman would be selected as the V.P. candidate for Roosevelt in 1944.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("b").classList.add('incorrect');  // Add red border for incorrect answer
    } else if (userInput === 'C: Thomas Dewey') {
        document.getElementById("explanation").innerHTML = "Correct! Thomas E. Dewey ran against FDR for president in 1944.";
        document.getElementById("explanation").style.color = "green";
        document.getElementById("c").classList.add('correct');  // Add green border for correct answer (Thomas E. Dewey)
    } else if (userInput === 'D: Harry A. Wallace') {
        document.getElementById("explanation").innerHTML = "Henry A. Wallace was the Vice President for Roosevelt in his third term.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("d").classList.add('incorrect');  // Add red border for incorrect answer
    } else {
        document.getElementById("explanation").innerHTML = "Invalid selection.";
    }
};

// Add event listeners to buttons after the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('a').addEventListener('click', () => checkAnswer('A: Wendell Willkie'));
    document.getElementById('b').addEventListener('click', () => checkAnswer('B: Harry Truman'));
    document.getElementById('c').addEventListener('click', () => checkAnswer('C: Thomas Dewey'));
    document.getElementById('d').addEventListener('click', () => checkAnswer('D: Harry A. Wallace'));
});

