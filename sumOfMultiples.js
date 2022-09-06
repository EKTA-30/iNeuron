function multiplesSum() {
  //if we want to calculate the sum of multiples of (3 AND 5) we will start from 15 (their LCM) and increment the value by 15 every time
  let sum = 0,
    i = 15;
  while (i <= 1000) {
    sum = sum + i;
    i = i + 15;
  }
  console.log(sum);
}

multiplesSum();
