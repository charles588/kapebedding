document.querySelectorAll(".contact-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Replace 2348165881012 with your full WhatsApp number (country code + number, no "+")
    window.open("https://wa.me/2348165881012", "_blank");
  });
});