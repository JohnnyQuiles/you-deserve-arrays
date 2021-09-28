const prompt = require('prompt-sync')({ signit : true });

const array = JSON.parse(prompt('Enter an array: '));

if (array[0] === Number(array[0])) {
    console.log(true);

}else {
    console.log(false); 
}

