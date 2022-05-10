const burger = document.querySelector('.burger');
const header = document.querySelector(".header");


burger.addEventListener("click", () => {
    header.classList.add("active");
})