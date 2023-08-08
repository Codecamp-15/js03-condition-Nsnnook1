let user = prompt("what is your name:");
if (user === " " || user === null) {
  user = "guest";
} else if (user === "codecamp") {
  let password = prompt("what is your password:");
  if (password === "123456") {
    user = "codecamp";
  } else {
    alert("Wrong password");
  }
} else {
  user = "guest";
}

alert("Welcome " + user);