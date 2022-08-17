var $timerDisplay = document.querySelector(".timerDisplay");
var timer = document.querySelector("#start");
var killTimer = document.querySelector("#stop");
var count = 0;
timer.addEventListener("click", function() {
    setInterval(function() {
        count++;
        $timerDisplay.textContent = count;
    }, 1000);
});

