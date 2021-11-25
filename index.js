let background = ['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#dfe6e9'];

//Random number generator
function getRandomInt(max) {
    var randNum = Math.floor(Math.random() * max);
    document.body.style.backgroundColor = background[randNum];
}

// When the button is clicked we do this;
function myFunction(){
    // alert("hey you clicked me!");
    document.body.style.backgroundColor = getRandomInt(5);
}

document.getElementById("clickMe").addEventListener("click", myFunction);

// console.log(getRandomInt(5));