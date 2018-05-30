var fs = require("fs");

fs.readFile('/Users/GoudarN/Naveen/LearnNode/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");