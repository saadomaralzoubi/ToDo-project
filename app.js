let name = prompt("Please enter your name");

let gender = prompt("Please enter your gender", "male or female");
if (gender != "male" || "female") {
  alert("gender must be male oe female");
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
