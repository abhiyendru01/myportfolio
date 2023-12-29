const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.querySelector('textarea[name="message"]');
const submitBtn = document.getElementById("submit");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}\nEmail: ${email.value}\nSubject: ${subject.value}\nMessage: ${message.value}`;

    // Assuming Email.send() is correctly implemented for sending emails
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rahul.r0644@gmail.com",
        Password: "7672732E71B5958F422CC821E1D4E7F2D006",
        To: 'rahul.r0644@gmail.com',
        From: "rahul.r0644@gmail.com",
        Subject: subject.value,
        message: message.value,
        Body: bodyMessage
    }).then(message => {
        if (message === "OK") {
            // Adjust this part according to your requirements, as SweetAlert might need specific configurations
            alert("Email sent successfully!"); // Change to your preferred success notification method
        } else {
            // Handle error scenario if needed
            alert("Failed to send email. Please try again.");
        }
    });
}

function checkInputs() {
    const inputs = [fullName, email, subject, message];
    let hasErrors = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("error");
            hasErrors = true;
        } else {
            input.classList.remove("error");
        }
    });

    return !hasErrors;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkInputs()) {
        sendEmail();
    } else {
        // Handle errors, maybe show a message to the user
        alert("Please fill in all fields before sending.");
    }
});
