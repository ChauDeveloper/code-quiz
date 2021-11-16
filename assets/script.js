
var timerEl = document.getElementById('timer');
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      if (timeLeft >= 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
        document.getElementById("final").style.visibility = "visible";
      }
    }, 1000);
  }



 var start = document.querySelector("button")
 start.onclick = function ()
 {  countdown();
    document.getElementById("intro").style.visibility = "collapse";
    document.getElementById("quiz-container").style.visibility = "visible";
}

var questions = [
  "Commonly used data types DO Not Include:",
  "The condition in an if/else statement is enclosed with _______.",
  "Arrays in Javascript can be used to store."
]


