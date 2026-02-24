const data = JSON.parse(localStorage.getItem("birthdayData")) || {
  name: "Elora Jannat",
  nickname: "Mashkura",
  birthday: "2009-03-09",
  message: "You are not just my bestie. You are my safe place.",
  surprise: "You will always be my Mashkura 🖤",
  images: []
};

document.getElementById("mainTitle").innerHTML =
  `Happy Birthday<br>${data.name}<br>— ${data.nickname} —`;

const birthDate = new Date(data.birthday);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
document.getElementById("ageText").innerText = `You are ${age} years old 🎉`;

document.getElementById("mainMessage").innerText = data.message;
document.getElementById("surpriseText").innerText = data.surprise;

const gallery = document.getElementById("images");
data.images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

function showSurprise(){
  document.getElementById("surprise").classList.remove("hidden");
}