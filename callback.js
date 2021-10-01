// const simpleArray = [1, 2, 3];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// const sum = array => {
//     return array.reduce(reducer);
// }

// const average = (array, callback) => {
//     const sum = callback(array);
//     return sum / array.length;
// }

// console.log(sum(simpleArray));
// console.log(average(simpleArray, sum));

let answer = false; 
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        answer = true;
        resolve(answer);
    }, 5000);
})

myPromise
    .then(answer => console.log('Here it is', answer));


