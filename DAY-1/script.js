function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period;


  if (hours >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }


  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  } else {
    hours = hours;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const time = hours + ":" + minutes + ":" + seconds + " " + period;

  document.getElementById("time").textContent = time;
}


setInterval(updateClock, 1000);

updateClock();