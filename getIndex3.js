const prompt = require('prompt-sync')({ signit : true });

const array = Json.parse(prompt('Enter a array :'));

let fourthOrlast;

if(array < 4){

fourthOrlast = array[array.length -1];
} else {
    fourtOrlast = array[3];
}




console.log(fourthOrlast); 