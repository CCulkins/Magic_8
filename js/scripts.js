const answerBank = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];
const random = answerBank[Math.floor(answerBank.length * Math.random())];


document.getElementById("shake").addEventListener("click", function() {
  const random = answerBank[Math.floor(answerBank.length * Math.random())];
  alert(random);
});


// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(1);
//   max = Math.floor(20);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomIntInclusive());
