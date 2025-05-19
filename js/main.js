  function showSection(id) {
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // Show default tab when page loads
  document.addEventListener("DOMContentLoaded", function () {
    showSection("home"); // Change "home" to your actual default tab's ID
  });
