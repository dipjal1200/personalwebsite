document.addEventListener("DOMContentLoaded", function () {
    const footerSpan = document.querySelector(".footerspan");

    if (footerSpan) {
        footerSpan.textContent = new Date().getFullYear();
    }
});



const bar = document.getElementById("bar");
const navLinks = document.getElementById("nav-links");

bar.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// LOADING SCREEN

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");

let progress = 0;

const startTime = Date.now();
const minimumLoadingTime = 1250;

// Progress Animation

function updateLoader() {

    if (progress < 90) {
        progress += Math.random() * 3 + 1;

        if (progress > 90) {
            progress = 100;
        }
    }

    progressBar.style.width = progress + "%";
    percentage.textContent = Math.floor(progress) + "%";

    if (progress < 90) {
        requestAnimationFrame(updateLoader);
    }
}

updateLoader();

// When Website Loads

window.addEventListener("load", function () {

    const elapsedTime = Date.now() - startTime;

    const remainingTime = Math.max(
        0,
        minimumLoadingTime - elapsedTime
    );

    setTimeout(function () {

        progress = 100;

        progressBar.style.width = "100%";
        percentage.textContent = "100%";

        setTimeout(function () {
            loader.classList.add("loader-hidden");
        }, 350);

    }, remainingTime);

});