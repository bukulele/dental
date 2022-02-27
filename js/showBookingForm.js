const bookingForm = document.getElementById("booking-form");

function showBookingForm() {
  bookingForm.setAttribute("style", "visibility: visible; opacity: 1");
}

function hideBookingForm() {
  bookingForm.setAttribute("style", "visibility: hidden; opacity: 0");
}
