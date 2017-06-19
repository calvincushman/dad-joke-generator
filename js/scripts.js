
var jokes = ["Joke1", "Joke2", "Joke3", "Joke4"];
var id = ["1.1", "2.2", "3.3", "4"];

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max-min)) + min
}

var spotInArray = getRandomArbitrary(0, 3);


for (var i = 0; i < jokes.length; i++) {
}
alert(jokes[spotInArray]);
