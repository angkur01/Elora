let data = JSON.parse(localStorage.getItem("birthdayData")) || {
  images:[]
};

function addImage(){
  const url = document.getElementById("imageUrl").value;
  data.images.push(url);
  alert("Image Added");
}

function save(){
  data.name = document.getElementById("name").value;
  data.nickname = document.getElementById("nickname").value;
  data.birthday = document.getElementById("birthday").value;
  data.message = document.getElementById("message").value;
  data.surprise = document.getElementById("surprise").value;

  localStorage.setItem("birthdayData", JSON.stringify(data));
  alert("Saved Successfully 🎉");
}