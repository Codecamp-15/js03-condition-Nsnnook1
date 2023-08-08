let score = prompt("Your Grade");
score = parseFloat(score);

let message = (score >= 0 && score <= 100) ?
  (score >= 80) ? "A" :
  (score >= 70) ? "B" :
  (score >= 60) ? "C" :
  (score >= 50) ? "D" :
  "F" :
  "Please enter a score between 0 and 100.";

alert(message);