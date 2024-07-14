import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Greet', name);
}

function goodByeHandler(name){
    console.log('GoodBye', name);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodBye', goodByeHandler);

myEmitter.emit('greet', 'Zubair');
myEmitter.emit('goodBye', 'Zubair')

myEmitter.on('error', (err) => {
    console.log('As Error Occured: ', err)
})

myEmitter.emit('error', new Error("Something went Wrong"))