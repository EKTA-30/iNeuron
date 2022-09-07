//1. Grades based on marks
function assignGrade(marks) {
  if (marks >= 90 && marks <= 100) return "S garde";
  else if (marks >= 80 && marks < 90) return "A garde";
  else if (marks >= 70 && marks < 80) return "B garde";
  else if (marks >= 60 && marks < 70) return "C garde";
  else if (marks >= 50 && marks < 60) return "D garde";
  else if (marks >= 40 && marks < 50) return "E garde";
  else if (marks < 40) return "Student has failed";
  else return "Invalid marks";
}

// let marks = 90;
// console.log(assignGrade(marks));
let marks = 900;
console.log(assignGrade(marks));

//2.Triangle

function typeOfTriangle(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) return "Equilateral";
  else if (sideA === sideB || sideB === sideC || sideA === sideC)
    return "Isosceles";
  else return "Scalene";
}

console.log(typeOfTriangle(1, 2, 3));

//3. Factorial of prime

function printFactorialOfPrime(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      printFactorial(i);
    }
  }
}
function isPrime(num) {
  if (num == 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
function printFactorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(num, fact);
}
printFactorialOfPrime(1, 100);

//4. Sum of multipes of 3 and 5

function multiplesSum() {
  //if we want to calculate the sum of multiples of (3 AND 5)
  //  we will start from 15 (their LCM) and increment the value by 15 every time
  let sum = 0,
    i = 15;
  while (i <= 1000) {
    sum = sum + i;
    i = i + 15;
  }
  console.log(sum);
}

multiplesSum();
