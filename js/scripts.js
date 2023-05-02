let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

document.querySelector(".btn").addEventListener("click", function () {
  let userName = document.querySelector("#inputName").value;
  let userQuestion = document.querySelector("#inputQuestion").value;

  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      break;
    case 1:
      eightBall = "It is decidedly so";
      break;
    case 2:
      eightBall = "Reply hazy try again";
      break;
    case 3:
      eightBall = "Cannot predict now";
      break;
    case 4:
      eightBall = "Do not count on it";
      break;
    case 5:
      eightBall = "My sources say no";
      break;
    case 6:
      eightBall = "Outlook not so good";
      break;
    case 7:
      eightBall = "Signs point to yes";
      break;
    default:
      eightBall = "Error!";
      break;
  }

  document.querySelector(
    ".response"
  ).innerHTML = `Hello, ${userName}! <br> You asked: ${userQuestion}? <br> The Magic Eight Ball says: <br> ${eightBall}`;
});

// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// console.log(`You asked: ${userQuestion}?`);
// console.log(randomNumber);
// console.log(`The Magic Eight Ball says: ${eightBall}`);
