//1. Given year is leap year or not.
function leapYear(year) {
  if (year % 4 == 0) {
    if (!year % 100 == 0) {
      return "Leap-year";
    } else if (year % 400 == 0) {
      return "Leap year";
    }
  }
  return "Not a leap-year";
}

console.log(leapYear(new Date().getFullYear()));
console.log(leapYear(2020));

//2. Temperature converter
// c/5 = (f-32)/9
//c = 5/9*(f-32)
//f = 9/5 *c + 32

function fahrenheitToCelcius(fahrenheit) {
  let celcius = (5 / 9) * (fahrenheit - 32);
  return celcius;
}

function celciusToFahrenheit(celcius) {
  let fahrenheit = (9 / 5) * (celcius + 32);
  return fahrenheit;
}

console.log(celciusToFahrenheit(60));
console.log(fahrenheitToCelcius(45));

//3.Factorial of a number
function factorialOfNum(num) {
  if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;

  return fact;
}

console.log(factorialOfNum(5));
