
/* =================================
   JOEL KAYZ — PORTFOLIO WEBSITE
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Joel Kayz Portfolio website loaded successfully.");

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        // Open and close the menu
        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close the menu after selecting a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }

        // PROJECT IMAGE LIGHTBOX

    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            const caption = image.nextElementSibling;
            lightboxCaption.textContent = caption
                ? caption.textContent
                : image.alt;

            lightbox.classList.add("active");
        });
    });

    lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });

});
