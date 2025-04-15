document.addEventListener("DOMContentLoaded", function () {
  function convertToUpperAndAlert() {
    const input = document.querySelector("#fname").value;
    
    // Log the input to see what is being captured
    console.log("Captured input:", input);

    // Convert the input to uppercase and show in an alert
    alert(input.toUpperCase());
  }

  document.querySelector("#convertBtn").addEventListener("click", convertToUpperAndAlert);
});
srgkgr