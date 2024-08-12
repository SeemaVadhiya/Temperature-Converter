document.addEventListener("DOMContentLoaded", function() {
    const textbox = document.getElementById("text-box");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCalsius");
    const result = document.getElementById("result");

    function convert() {
        if (toFahrenheit.checked) {
            let temp = (textbox.value * 9/5) + 32;
            result.textContent = `Temperature in Fahrenheit: ${temp}`;
        } else if (toCelsius.checked) {
            let temp = (textbox.value - 32) * 5/9;
            result.textContent = `Temperature in Celsius: ${temp}`;
        } else {
            result.textContent = "Select a unit!!";
        }
    }

 
    document.querySelector('button').addEventListener('click', convert);
});
