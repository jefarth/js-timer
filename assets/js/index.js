var $timerDisplay = document.querySelector(".timerDisplay");
var $timer = document.querySelector("#start");
var $killTimer = document.querySelector("#stop");
var count = 0;
function setTimer() {
    timerInterval = setInterval(function() {
        count++;
        $timerDisplay.textContent = count;
    }, 1000);
};
function stopTimer() {
    clearInterval(timerInterval);
}
$timer.addEventListener("click", function() {
    setTimer();
});
$killTimer.addEventListener("click", function() {
    stopTimer();
});