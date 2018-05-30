let events = require("events");

let eventEmitter = new events.EventEmitter();

let connectionHandler = function () {
    console.log("Connection successfull !!!");
    eventEmitter.emit("data_received");
};

eventEmitter.on("connection_success", connectionHandler);

let dataRcvdHandler = function () {
    console.log("Data received !!!");
};

eventEmitter.on("data_received", dataRcvdHandler);

eventEmitter.emit("connection_success");

console.log("Program Ended.");