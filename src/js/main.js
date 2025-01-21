var color = document.querySelector(".change-color");
var second = document.querySelector(".toggle-color");
var third = document.querySelector(".trigger");
var fourth = document.querySelector(".target");
var fifth = document.querySelector(".trigger-all");
var sixth = document.querySelector(".trigger-all-self");

//first//

function colorChange() {
  color.classList.add("trigger-all-self");
}

color.addEventListener("click", colorChange);

//second//
console.log(second.innerHTML);
console.log(second.clientHeight);

function SecondColorChange() {
  second.classList.toggle("target");
}

second.addEventListener("click", SecondColorChange);

//third and fourth//

function ThirdColorChange() {
  fourth.classList.toggle("is-hidden");
}

third.addEventListener("click", ThirdColorChange);

//fifth//

function FifthColorChange() {
  color.classList.add("trigger-all-self");
  second.classList.add("target");
}

fifth.addEventListener("click", FifthColorChange);

//sixth//

function SixthColorChange() {
  color.classList.add("trigger-all-self");
  second.classList.add("target");
  sixth.classList.add("trigger-all");
  sixth.classList.remove("trigger-all-self");
}

sixth.addEventListener("click", SixthColorChange);
