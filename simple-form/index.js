document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a success message
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Thank you, ${name}! Your message has been received.`;
    resultDiv.classList.remove("hidden");

    // Optionally, clear the form fields
    document.getElementById("contactForm").reset();
  });
