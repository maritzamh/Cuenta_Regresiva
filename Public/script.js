document.addEventListener("DOMContentLoaded", function() {
  var countdownElement = document.getElementById('countdown');

  // Set the date we're counting down to
  var countDownDate = new Date("Feb 15, 2024 15:37:25").getTime();

  // Update the countdown every 1 second
  var countdownFunction = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    countdownElement.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdownFunction);
      countdownElement.innerHTML = "EXPIRED";
    }
  }, 1000);
});

  