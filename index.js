// Array of different colours
let background = ['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#dfe6e9', '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#b2bec3'];

//Random number generator
function getRandomInt(max) {
    var randNum = Math.floor(Math.random() * max);
    document.body.style.backgroundColor = background[randNum];
}

// When the button is clicked we do this;
function myFunction(){
    // alert("hey you clicked me!");
    document.body.style.backgroundColor = getRandomInt(9);
}

document.getElementById("clickMe").addEventListener("click", myFunction);

// console.log(getRandomInt(5));