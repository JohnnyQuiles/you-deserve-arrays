const prompt = require('prompt-sync')({ signit : true });

const array = JSON.parse(prompt('Enter an array: '));

if (array[3] === Number(array[3])) {
    console.log(true);

}else {
    console.log(false); 
}
