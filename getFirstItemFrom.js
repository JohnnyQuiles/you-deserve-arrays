const prompt = require('prompt-sync')({ signit : true });

const array = Json.parse(prompt('Enter a array :'));

const firstItem = array[0];

console.log(firstItem); 