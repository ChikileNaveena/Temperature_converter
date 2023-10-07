// script.js

document.getElementById("celsiusBtn").addEventListener("click", convertToCelsius);
document.getElementById("fahrenheitBtn").addEventListener("click", convertToFahrenheit);

function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " Celsius = " + fahrenheit + " Fahrenheit";
}

function convertToFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result2").innerHTML = fahrenheit + " Fahrenheit = " + celsius + " Celsius";
}
