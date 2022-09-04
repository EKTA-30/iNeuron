function leapYear(year) {
  if (year % 4 == 0) {
    if ((!year % 100 == 0)) {
        return "Leap-year";
    }
    else if(year % 400 == 0){
        return "Leap year"
    }
  }
  return "Not a leap-year";
}

console.log(leapYear(new Date().getFullYear()));
console.log(leapYear(2020));
