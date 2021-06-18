let setAlarm = document.getElementById("setAlarm");
setAlarm.addEventListener("click", Alarming);

let audio = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
);

function Alarming(e) {
  e.preventDefault();
  let input = document.getElementById("alarmTime");
  inputDate = new Date(input.value);
  let now = new Date();
  let timeToAlarm = inputDate - now;
  if (inputDate >= 0) {
    setTimeout(() => {
      console.log("Playing Alarm");
      ringAlarm();
    }, timeToAlarm);
  } else {
    console.log("Enter a valid date");
  }
}

function ringAlarm() {
  audio.play();
}
