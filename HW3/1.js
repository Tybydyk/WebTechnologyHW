const degreesС = Number.parseFloat(prompt("Enter the temperature value in degrees Celsius :"));

function convertCtoF(degreesC) {
    let degreesF = (9 / 5) * degreesС + 32;
    return degreesF.toFixed(2);
}

alert(`${degreesС} degree Celsius is equal to ${convertCtoF(degreesС)} degree Fahrenheit }`);