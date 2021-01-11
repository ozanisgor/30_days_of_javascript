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
  // for removing glitch that occurs at every 0th second
  if (seconds === 0) secondHand.classList.add('glitch');
  if (seconds === 1) secondHand.classList.remove('glitch');

  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // for removing glitch that occurs at every 0th minute
  if (minutes === 0) secondHand.classList.add('glitch');
  if (minutes === 1) secondHand.classList.remove('glitch');

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // for removing glitch that occurs at every 0th hour
  if (hours === 0) secondHand.classList.add('glitch');
  if (hours === 1) secondHand.classList.remove('glitch');
}

setInterval(setDate, 1000);