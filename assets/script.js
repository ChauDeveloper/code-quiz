
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

  //will move this into startquiz function


 var start = document.querySelector("button")
 start.onclick = function ()
 {  countdown();
    document.getElementById("intro").style.visibility = "collapse";
    document.getElementById("quiz-container").style.visibility = "visible";
 }

var question1 = document.createElement("h2")
question1.textContent = ""
question1.className = "question";


