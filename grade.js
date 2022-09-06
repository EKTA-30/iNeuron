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
