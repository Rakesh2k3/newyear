
function calculateTimeRemaining() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeRemaining = newYearDate - now;
  
    return timeRemaining;
  }
  
  function updateCountdown() {
    const timeRemaining = calculateTimeRemaining();
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `Time Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      setTimeout(updateCountdown, 1000);
  }
    updateCountdown();