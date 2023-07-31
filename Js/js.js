let timer;
let timeRemaining;
let isPaused = false;

function startTimer() {
  const inputTime = document.getElementById("timeInput").value;
  const timeArray = inputTime.split(":");
  const hours = parseInt(timeArray[0]);
  const minutes = parseInt(timeArray[1]);
  const seconds = parseInt(timeArray[2]);
  timeRemaining = hours * 3600 + minutes * 60 + seconds;

  if (isNaN(timeRemaining)) {
    alert("Пожалуйста, введите время в правильном формате (ЧЧ:ММ:СС)");
    return;
  }

  timer = setInterval(updateTimer, 1000);
  updateTimer();
}

function updateTimer() {
  if (!isPaused) {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const displayHours = String(hours).padStart(2, "0");
    const displayMinutes = String(minutes).padStart(2, "0");
    const displaySeconds = String(seconds).padStart(2, "0");

    document.getElementById(
      "timerDisplay"
    ).textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.getElementById("timerDisplay").textContent = "Время вышло!";
    } else {
      timeRemaining--;
    }
  }
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
}
