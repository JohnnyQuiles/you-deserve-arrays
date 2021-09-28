const prompt = require('prompt-sync')({ signit : true });

const array = JSON.parse(prompt('Enter an array: '));

const islongList = array.length >= 10;

console.log('list is long : ', islongList);