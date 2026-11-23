
/* ==========================================
   DARK SENTINEL - PORTFOLIO JAVASCRIPT
   ========================================== */


/* 1. SELECT HTML ELEMENTS */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const currentYear = document.getElementById("currentYear");


/* 2. MOBILE NAVIGATION */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* CLOSE MENU AFTER CLICKING A LINK */

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });


    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);

        const clickedMenuButton = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        }

    });


    /* CLOSE MENU USING ESCAPE KEY */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        }

    });


    /* RESET MENU ON DESKTOP */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 760) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        }

    });

}


/* 3. AUTOMATIC COPYRIGHT YEAR */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* 4. SMOOTH SECTION NAVIGATION */

const sectionLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

sectionLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});
