const $timerDisplay = document.querySelector("#timerDisplay");
const $timer = document.querySelector("#start");
const $killTimer = document.querySelector("#stop");
const $clearTimer = document.querySelector("#clear")
let count = 0;

function setTimer() {
    const timerInterval = setInterval(function() {
        count++;
        $timerDisplay.textContent = count;
    }, 1000);

    function stopTimer() {
        clearInterval(timerInterval);
        if ($timer.disabled === true) {
            $timer.disabled = false;
        }
    }
    $killTimer.addEventListener("click", function() {
        stopTimer();
    });
    function clearTimer() {
        stopTimer();
        count = 0;
        $timerDisplay.textContent = count;
    }
    $clearTimer.addEventListener("click", function() {
        clearTimer();
    })
};
$timer.addEventListener("click", function() {
    setTimer();
    $timer.disabled = true;
});