//---------------------------------- OLD JAVASCRIPT  ---------------------------
// console.log('start');

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log('get the data from database...');
//     callback({ data: data });
//   }, 1200);
// }

// getData(['apple', 'pear', 'coffee'], function(data) {
//   console.log(data);
// });

// console.log('end');

//----------------------------------  ES6 JAVASCRIPT  ---------------------------
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('wait for 1 second...');
    // reject(new Error('we got errors'));
  }, 1000);
});

promise
  .then(data => console.log(data))
  // .then(console.log('end'))
  .then(
    setTimeout(() => {
      console.log('end');
    }, 1500)
  )
  .catch(err => console.log(err));
