const mainNav = document.getElementById("main-nav");
const navbutton = document.getElementById("ham-btn");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    mainNav.classList.toggle("show");
})