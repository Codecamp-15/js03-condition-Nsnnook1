let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username == "" || username == null) {
  alert("Username is required");
} else if (password == "" || password == null) {
  alert("Password is required");
} else if (
  (username === "admin" && password === "1234") ||
  (username === "john" && password === "qwerty")
) {
  alert("Hello", username);
} else {
  alert("Invalid username or password");
}
