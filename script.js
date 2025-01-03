document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav"); // Select the navigation bar
    const button = document.querySelector(".resume-download-btn");
    const navRect = nav.getBoundingClientRect();

    // Check if the top of the nav bar is within the viewport
    if (navRect.top <= 0) {
        nav.appendChild(button); // Move button into the nav
        button.classList.add("navbar"); // Add navbar-specific styles
    } else {
        document.body.appendChild(button); // Move button back to top-right
        button.classList.remove("navbar");
    }
});
