// This is a comment.
// # This document contains Python code
// # for processing data and performing calculations. (interactivity)

document.addEventListener("DOMContentLoaded", () => {
  
  // Get references to elements
  const button = document.getElementById("greetButton");
  const message = document.getElementById("message");

  // Add a click event to the button
  button.addEventListener("click", () => {
    const date = new Date();
    message.textContent = `Hello! You clicked the button at ${date.toLocaleTimeString()}.`;
  });

});
