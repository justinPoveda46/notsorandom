function random(number){
    console.log(Math.floor(Math.random()*number));
}

random(5);

function randomLetter(alpha){
    console.log(alpha.charAt(Math.floor(Math.random()*alpha)));
}
randomLetter("abcdefg");