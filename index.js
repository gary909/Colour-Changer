let fruits = ['Apple', 'Banana', 'Peach', 'Kiwi', 'Lemon']

function getRandomInt(max) {
    var randNum = Math.floor(Math.random() * max);
    return fruits[randNum];
}

// function myFunction(){
//     alert("hey you clicked me!");
// }

console.log(getRandomInt(5));