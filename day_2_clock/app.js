const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (seconds === 0) secondHand.classList.add('fast');
  if (seconds === 1) secondHand.classList.remove('fast');
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  if (minutes === 0) secondHand.classList.add('fast');
  if (minutes === 1) secondHand.classList.remove('fast');
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  if (hours === 0) secondHand.classList.add('fast');
  if (hours === 1) secondHand.classList.remove('fast');
}

setInterval(setDate, 1000);