document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = new FormData(this);

    // Send form data to the Google Form action URL
    fetch(this.action, {
        method: 'POST',
        body: form,
    })
    .then(() => {
        // Display success message and reset the form regardless of response
        document.getElementById("contact-form").reset();
        document.getElementById("successMessage").style.display = 'block';
    })
    .catch(error => {
        console.error('Submission error:', error);
        alert("Thanks for reaching out!. Your submission was successful. We'll get back to you soon.😃");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 15; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "-10px"; // Start from above the viewport
        star.style.animationDuration = (Math.random() * 2 + 2) + "s"; // 2s - 4s range
        star.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(star);
    }
});
