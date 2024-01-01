//Events

const EventEmitter = require("events")

const event = new EventEmitter();


event.on("sayMyName", ()=>{
    console.log("Your name is Computer");
})
event.on("sayMyName", ()=>{
    console.log("Your model is Dell-inspiron");
})
event.on("sayMyName", ()=>{
    console.log("Your processor is intel-i3");
})

event.emit("sayMyName")

//with multiple parameters
event.on("checkPage", (sc, msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}.`);
})

event.emit("checkPage", 200, 'ok')