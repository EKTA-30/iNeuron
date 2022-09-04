// c/5 = (f-32)/9
//c = 5/9*(f-32)
//f = 9/5 *c + 32

function fahrenheitToCelcius(fahrenheit){
    let celcius = (5/9) * (fahrenheit - 32);
    return celcius;
}

function celciusToFahrenheit(celcius){
    let fahrenheit = (9/5) * (celcius+ 32)
    return fahrenheit;
}

console.log(celciusToFahrenheit(60));
console.log(fahrenheitToCelcius(45));