
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
    document.getElementById("blockquote").style.visibility = "collapse";
    document.getElementById("one").style.visibility = "visible";
 }
var correctanswer = document.querySelector("1.3")
correctanswer.addEventListener("click", function () {
  window.alert = "you are correct"
 })
