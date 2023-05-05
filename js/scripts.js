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

  let buttonSound = new Audio("snd/sound1.mp3");
  buttonSound.play();

  setTimeout(function () {
    if (
      (userName == null || userName == "") &&
      userQuestion !== null &&
      userQuestion !== ""
    ) {
      document.querySelector(
        ".response"
      ).innerHTML = `Hello! <br> You asked: ${userQuestion}? <br> The Magic Eight Ball says: <br> ${eightBall}`;
    } else if (
      userName !== null &&
      userName !== "" &&
      (userQuestion == null || userQuestion == "")
    ) {
      document.querySelector(
        ".response"
      ).innerHTML = `Hello, ${userName}! <br> You didn't even ask a question. WTF?`;
    } else if (
      (userName == null || userName == "") &&
      (userQuestion == null || userQuestion == "")
    ) {
      document.querySelector(
        ".response"
      ).innerHTML = `Hello! <br> You didn't even ask a question. WTF?`;
    } else {
      document.querySelector(
        ".response"
      ).innerHTML = `Hello, ${userName}! <br> You asked: ${userQuestion}? <br> The Magic Eight Ball says: <br> ${eightBall}`;
    }
  }, 2000);
});

// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// console.log(`You asked: ${userQuestion}?`);
// console.log(randomNumber);
// console.log(`The Magic Eight Ball says: ${eightBall}`);
