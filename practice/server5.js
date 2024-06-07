// var http=require('http');
// http.createServer(function(req,res){
//     res.write("Hello All how are you");
//     res.end();

// })
// .listen(8009)


const events=require('events');


let emitterEvents = new events.EventEmitter();
emitterEvents.on('message passed',(a,b)=> {
     let result=a+b;
    console.log (`hai event triggered',${a}+${b}=${result}`);
});

emitterEvents.emit('message passed',10,20);
emitterEvents.emit('message passed',100,200);


//------------------------------------------------------

// const events=require('events');

// let emitterEvents = new events.EventEmitter();

// emitterEvents.on('passing',()=>{
//     console.log('hello all ');
// });
// emitterEvents.emit('passing');
//-------------------------------------------------------------------
// const events=require('events');
// let emitter = new events.EventEmitter();
// emitter.on('passing',()=>{
//     console.log('hello all');
// });

// emitter.emit('passing');

