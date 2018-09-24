console.log('Starting App');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);

setTimeout(() => {
  console.log('Second Callback Function');
}, 0000);

console.log('Finishing app');
