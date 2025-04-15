document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#fname");

  // Add an event listener for the 'blur' event (when the input loses focus)
  input.addEventListener("blur", function () {
    // Convert the text to uppercase when the input loses focus
    input.value = input.value.toUpperCase();
  });
});
