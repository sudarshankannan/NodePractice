
var fs = require("fs");

//blocking example
//program blocks until it reads the file and then only it proceeds to end the program
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");

//non blocking example (uses asynch functions)
//does NOT wait for file reading & proceeds to print "Program Ended" while reading file
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");