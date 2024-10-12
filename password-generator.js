const generator = require('generate-password');

// const password = generator.generate({
//     length: 15,
//     numbers: true
// });
// console.log(password);

const password =generator.generateMultiple(3, {
    length: 10,
    numbers: true
});
console.log(password);