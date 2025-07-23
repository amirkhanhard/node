import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
      console.log('Please turn off the motor! Its a gentle reminder');
  }, 3000);
});

console.log("The script is running")
myEmitter.emit('WaterFull');
console.log("The script is still running")
myEmitter.emit('WaterFull');

// The script is running
// Please turn off the motor!
// The script is still running
// Please turn off the motor!
// Please turn off the motor! Its a gentle reminder
// Please turn off the motor! Its a gentle reminder