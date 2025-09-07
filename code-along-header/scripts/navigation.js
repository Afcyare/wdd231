const navbutton = document.querySelector("#ham-btn");
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle("show");
})

const daysUntil = `There are daycount days until ${targetEvent}!`;