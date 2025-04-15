document.addEventListener("DOMContentLoaded", function () {
  function convertToUpperAndAlert() {
    const input = document.querySelector("#fname").value;
    alert(input.toUpperCase());
  }

  document.querySelector("#convertBtn").addEventListener("click", convertToUpperAndAlert);
});

