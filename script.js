// Define the words to be displayed and the duration of the animation
const words = "Lonerr Projects";
const Animation_Duration = 2000;

// Function to create individual characters as div elements
function createElements(offset) {
    // Split the words into an array of characters
    const characters = words.split("");

    // Iterate through each character in the array
    characters.forEach((char, i) => {
        // Create a new div element for each character
        const div = document.createElement("div");
        
        // Set the text content of the div to the current character
        div.innerText = char;

        // Add the "character" class to the div for styling
        div.classList.add("character");

        // Set animation delay based on character index and offset
        div.style.animationDelay = `-${i * (Animation_Duration / 16) - offset}ms`;

        // Append the div to the appropriate container based on the offset
        if (offset >= 0) {
            document.getElementById("spiral").appendChild(div);
        } else {
            document.getElementById("spiral2").appendChild(div);
        }
    });
}

// Call the createElements function with different offsets to create characters for both spirals
createElements(0); // Create characters for the first spiral
createElements(-1 * (Animation_Duration / 2)); // Create characters for the second spiral with a time offset
