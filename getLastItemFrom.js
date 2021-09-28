const prompt = require('prompt-sync')({ signit : true });

const array = Json.parse(prompt('Enter a array :'));

const lastItem = array[array.length - 1];

console.log(lastItem); 