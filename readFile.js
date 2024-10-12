const fs = require('fs');

//read a file
fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        console.log(err);
        return};
    console.log(data.toString());
});

console.log('program End');