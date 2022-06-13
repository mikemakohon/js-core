// ? Promises
const promise = new Promise((resolve, reject) => {
  const result = Math.ceil(Math.random() * 100);
  result < 50 ? resolve("Ok") : reject("Not Ok");
});

console.log(promise);

let data1, data2;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => (data1 = res.json()))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
  .then((res) => (data2 = res.json()))
  .finally(() => console.log(data1, data2));

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos/1"),
  fetch("https://jsonplaceholder.typicode.com/todos/2"),
]).then((values) => console.log(values[0].json(), values[1].json()));

Promise.race([
  fetch("https://jsonplaceholder.typicode.com/todos/1"),
  fetch("https://jsonplaceholder.typicode.com/todos/2"),
]).then((data) => console.log(data.json()));
