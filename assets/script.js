
var timerEl = document.getElementById('timer');
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '0';
        clearInterval(timeInterval);
        window.alert="Timer is done";
      }
    }, 1000);
  }

  //will move this into startquiz function
 countdown();

 var questions = [
     {question}
 ]
