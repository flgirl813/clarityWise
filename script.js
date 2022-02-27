let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");

let progress = document.getElementById("progress");

next1.onclick = function () {
  form1.style.left = "800px";
  form2.style.left = "200px";
  progress.style.width = "240px";
};

// back1.onclick = function () {
//   form1.style.left = "800px";
//   form2.style.left = "800px";
//   progress.style.width = "120px";
// };

next2.onclick = function () {
  form2.style.left = "800px";
  form3.style.left = "200px";
  progress.style.width = "360px";
};

// back2.onclick = function () {
//   form2.style.left = "-40px";
//   form3.style.left = "-450px";
//   progress.style.width = "240px";
// };

// submit.onclick = function () {
//   document.querySelector("#displaymessage").innerText = "test";
// };
let msg = "Submitted";
// document.getElementById("submit").addEventListener("click", info);
document.querySelector("#submit").addEventListener("click", info);
function info() {
  document.getElementById("submit").innerText = msg;
}
