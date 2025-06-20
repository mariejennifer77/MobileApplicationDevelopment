document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("contactToggleBtn");
  const panel = document.getElementById("contactPanel");

  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", function () {
      panel.classList.toggle("active");
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted!");
      form.reset();
    });
  }
});
