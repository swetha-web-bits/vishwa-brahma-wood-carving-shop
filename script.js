
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get customer details

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;

    // Shop WhatsApp number

    let shopNumber = "919042361152";

    // Create enquiry message

    let whatsappMessage =
        "Hello Vishwa Brahma Wood Carving Shop!" +
        "\n\nCustomer Name: " + name +
        "\nCustomer Phone: " + phone +
        "\nMessage: " + message;

    // Open WhatsApp

    let whatsappURL =
        "https://wa.me/" + shopNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
