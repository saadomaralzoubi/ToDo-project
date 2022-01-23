let name = prompt("Please enter your name");

let gender = prompt("Please enter your gender", "male or female");
if (gender != "male" && gender != "female") {
  alert("gender must be male or female");
}

let age = prompt("what is your age ?");

if (age <= "0") {
  alert("age must be bigger than 0");
}

let welcomMessage = confirm("Do like to skip welcoming message ?");
console.log(welcomMessage);

if (welcomMessage === false && gender.toLocaleLowerCase() === "male") {
  alert(`welcom Mr ${name}`);
}
if (welcomMessage === false && gender.toLocaleLowerCase() === "female") {
  alert(`welcom Ms ${name}`);
} else {
}

let note = prompt("do like to get notifications?");
if (note == "") {
  note = "invalid";
}
let web = prompt("do like our website?");
if (web == "") {
  web = "invalid";
}
let share = prompt("do like to share our website with your friends?");
if (share == "") {
  share = "invalid";
}

answersArray = [note, web, share];

for (let i = 0; i < answersArray.length; i++) {
  console.log(`the answer of question ${i + 1}=`, answersArray[i]);
}
