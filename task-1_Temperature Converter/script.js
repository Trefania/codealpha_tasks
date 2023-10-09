document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const temperatureInput = document.getElementById("temperature");
    const fromScaleSelect = document.getElementById("fromScale");
    const resultCelsiusText = document.getElementById("resultCelsius");
    const resultKelvinText = document.getElementById("resultKelvin");
    const resultFahrenheitText = document.getElementById("resultFahrenheit");
    
    convertButton.addEventListener("click", function () {
        const inputTemperature = parseFloat(temperatureInput.value);
        const fromScale = fromScaleSelect.value;
        let resultCelsius, resultKelvin, resultFahrenheit;

        if (fromScale === "celsius") {
            resultCelsius = inputTemperature;
            resultKelvin = convertCelsiusToKelvin(inputTemperature);
            resultFahrenheit = convertCelsiusToFahrenheit(inputTemperature);
        } else if (fromScale === "kelvin") {
            resultCelsius = convertKelvinToCelsius(inputTemperature);
            resultKelvin = inputTemperature;
            resultFahrenheit = convertKelvinToFahrenheit(inputTemperature);
        } else if (fromScale === "fahrenheit") {
            resultCelsius = convertFahrenheitToCelsius(inputTemperature);
            resultKelvin = convertFahrenheitToKelvin(inputTemperature);
            resultFahrenheit = inputTemperature;
        }

        resultCelsiusText.textContent = `${inputTemperature} ${fromScale} = ${resultCelsius.toFixed(2)}°C`;
        resultKelvinText.textContent = `${inputTemperature} ${fromScale} = ${resultKelvin.toFixed(2)}K`;
        resultFahrenheitText.textContent = `${inputTemperature} ${fromScale} = ${resultFahrenheit.toFixed(2)}°F`;
    });

    function convertCelsiusToKelvin(tempCelsius) {
        return tempCelsius + 273.15;
    }

    function convertCelsiusToFahrenheit(tempCelsius) {
        return (tempCelsius * 9/5) + 32;
    }

    function convertKelvinToCelsius(tempKelvin) {
        return tempKelvin - 273.15;
    }

    function convertKelvinToFahrenheit(tempKelvin) {
        return (tempKelvin * 9/5) - 459.67;
    }

    function convertFahrenheitToCelsius(tempFahrenheit) {
        return (tempFahrenheit - 32) * 5/9;
    }

    function convertFahrenheitToKelvin(tempFahrenheit) {
        return (tempFahrenheit + 459.67) * 5/9;
    }
});
