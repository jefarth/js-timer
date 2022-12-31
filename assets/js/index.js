const $timerDisplay = document.querySelector("#timerDisplay");
const $timer = document.querySelector("#start");
const $killTimer = document.querySelector("#stop");
let count = 0;

function setTimer() {
    const timerInterval = setInterval(function() {
        count++;
        $timerDisplay.textContent = count;
    }, 1000);
    function stopTimer() {
        clearInterval(timerInterval);
    }
    $killTimer.addEventListener("click", function() {
        stopTimer();
        if ($timer.disabled === true) {
            $timer.disabled = false;
        }
    });
};
$timer.addEventListener("click", function() {
    setTimer();
    $timer.disabled = true;
});