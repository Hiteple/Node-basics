// We can use console.time to know the duration of processes and choose the best ones

let add = 0;
console.time("cycle");
for (let i = 0; i < 100000; i++) {
  add += i;
}
console.timeEnd("cycle");

module.exports = add;
