const contactForm = document.getElementById("contact-form");
const responseMessage = document.getElementById("response");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    responseMessage.textContent = "Thank you for your message!";
    responseMessage.classList.remove("error-message");
    responseMessage.classList.add("success-message");

    contactForm.reset();

    setTimeout(() => {
        responseMessage.textContent = "";
    }, 5000);
});
