const quest1 = document.querySelectorAll('.quest')[0]
const quest2 = document.querySelectorAll('.quest')[1]
const quest3 = document.querySelectorAll(".quest")[2];

const answer1 = document.querySelectorAll(".answer")[0]
const answer2 = document.querySelectorAll(".answer")[1]
const answer3 = document.querySelectorAll(".answer")[2];

icon = document.querySelectorAll('.icon')[0]
icon2 = document.querySelectorAll('.icon')[1]
icon3 = document.querySelectorAll(".icon")[2]

quest1.addEventListener('click', () => {
  answer1.classList.toggle('active')
  icon.classList.toggle('active')
})
quest2.addEventListener("click", () => {
  answer2.classList.toggle("active");
  icon2.classList.toggle("active");

});
quest3.addEventListener("click", () => {
  answer3.classList.toggle("active");
  icon3.classList.toggle("active");
});




