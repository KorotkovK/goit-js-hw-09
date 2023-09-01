import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const datetimePicker = document.getElementById(
  "datetime-picker"
);
const startButton = document.querySelector(
  '[data-start]'
);
const daysValue = document.querySelector(
  '[data-days]'
);
const hoursValue = document.querySelector(
  '[data-hours]'
);
const minutesValue = document.querySelector(
  '[data-minutes]'
);
const secondsValue = document.querySelector(
  '[data-seconds]'
);

let countdownIntervalId;

const flatpickrInstance = flatpickr(
  datetimePicker,
  {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate <= new Date()) {
        alert("Please choose a date in the future.");
        startButton.disabled = true;
        datetimePicker.disabled = false;
      } else {
        startButton.disabled = false;
        datetimePicker.disabled = true;
      }
    },
  }
);

const selectedDate = flatpickrInstance.selectedDates[0];
if (
  selectedDate &&
  selectedDate <= new Date()
) {
  startButton.disabled = true;
  datetimePicker.disabled = false;
} else {
  startButton.disabled = false;
  datetimePicker.disabled = true;
}

function updateTimerDisplay(ms) {
  const { days, hours, minutes, seconds } =
    convertMs(ms);
  daysValue.textContent = days
    .toString()
    .padStart(2, "0");
  hoursValue.textContent = hours
    .toString()
    .padStart(2, "0");
  minutesValue.textContent = minutes
    .toString()
    .padStart(2, "0");
  secondsValue.textContent = seconds
    .toString()
    .padStart(2, "0");
}

startButton.addEventListener("click", () => {
  const selectedDate =
    flatpickrInstance.selectedDates[0];
  const currentTime = new Date().getTime();
  const targetTime = selectedDate.getTime();
  const timeDifference = targetTime - currentTime;

  updateTimerDisplay(timeDifference);

  countdownIntervalId = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownIntervalId);
      updateTimerDisplay(0);
    } else {
      updateTimerDisplay(timeDifference);
    }
  }, 1000);
  startButton.disabled = true;
});
