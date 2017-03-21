var name = "Amy";

function checkUser (username) {
  if (username == "Amy") {
    console.log("Welcome, Authenticated User.");
  }
  else {
    console.log("Warning, unauthorized attempt.");
  }
}

checkUser(name);
