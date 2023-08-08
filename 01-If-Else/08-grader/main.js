let score = prompt("Your Grade ");
if (score >= 0 && score <= 100) {
 if (score >= 80) {
  alert("A");
} else if (score >= 70 && score < 80) {
  alert("B");
} else if (score >= 60 && score < 70) {
  alert("C");
} else if (score >= 50 && score < 60) {
  alert("D");
} else 
{
  alert("F");
} 
}
else {
    alert("Please enter a score between 0 and 100.");
}
