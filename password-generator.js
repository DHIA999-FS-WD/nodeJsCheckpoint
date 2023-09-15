var generator = require("generate-password");

//i use this is function to genrate 1 random password
var password = generator.generate({
  length: 10,
  numbers: false,
  uppercase: false,
});

//i use this is function to genrate 6 random passwords in the same time
var multiPasswords = generator.generateMultiple(6, {
  length: 8,
  numbers: true,
});

console.log(password);
console.log(multiPasswords);
