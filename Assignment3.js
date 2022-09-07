// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printPattern() {
  let num = 1,
    output = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      output = output + `${num} `;
      num++;
    }
    output = output + `\n`;
  }
  console.log(output);
}

printPattern();

//2. Write a program to find whether a given number is armstrong number or not

function isArmstrong(num) {
  let copyNum = num,
    sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum = sum + Math.pow(rem, 3);
    num = parseInt(num / 10);
  }
  return sum == copyNum;
}

console.log(isArmstrong(153));

//Write a program to find whether a given number is special number or not

function isSpecial(num) {
  let copyNum = num,
    sum = 0;
  while (num > 0) {
    let rem = num % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }
    sum = sum + fact;
    num = parseInt(num / 10);
  }
  return sum == copyNum;
}
console.log(isSpecial(145));
