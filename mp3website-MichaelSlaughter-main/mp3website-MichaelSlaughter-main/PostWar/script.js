// This function checks the selected answer and updates the page accordingly
const checkAnswer = (userInput) => {
    // Reset all button borders first
    document.getElementById("a").classList.remove('incorrect', 'correct');
    document.getElementById("b").classList.remove('incorrect', 'correct');
    document.getElementById("c").classList.remove('incorrect', 'correct');
    document.getElementById("d").classList.remove('incorrect', 'correct');

    // Handle the answer and update borders and explanation through an if/else statement
    if (userInput === 'A: Dwight D. Eisenhower') {
        document.getElementById("explanation").innerHTML = "Correct! Famous WWII General and hero Dwight D. Eisenhower would win the Presidential Election of 1952.";
        document.getElementById("explanation").style.color = "green";
        document.getElementById("a").classList.add('correct');  // Add green border for correct answer (Dwight D. Eisenhower)
    } else if (userInput === 'B: Franklin Delano Roosevelt') {
        document.getElementById("explanation").innerHTML = "Even if FDR was still alive, he wouldn't be eligible to run again because the 22nd amendment passed which limit presidential terms to 2 terms or 10 years.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("b").classList.add('incorrect');  // Add red border for incorrect answer 
    } else if (userInput === 'C: Richard Nixon') {
        document.getElementById("explanation").innerHTML = "Nixon would become the Vice President in 1952. He also wouldn't even run for president until 1960.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("c").classList.add('incorrect');  // Add red border for incorrect answer  
    } else if (userInput === 'D: Adali Stevenson') {
        document.getElementById("explanation").innerHTML = "Adali Stevenson ran for president in 1952 but as the Democrat candidate.";
        document.getElementById("explanation").style.color = "red";
        document.getElementById("d").classList.add('incorrect');  // Add red border for incorrect answer
    } else {
        document.getElementById("explanation").innerHTML = "Invalid selection.";
    }

};

// Add event listeners to buttons after the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('a').addEventListener('click', () => checkAnswer('A: Dwight D. Eisenhower'));
    document.getElementById('b').addEventListener('click', () => checkAnswer('B: Franklin Delano Roosevelt'));
    document.getElementById('c').addEventListener('click', () => checkAnswer('C: Richard Nixon'));
    document.getElementById('d').addEventListener('click', () => checkAnswer('D: Adali Stevenson'));
});