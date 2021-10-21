const container = document.querySelector(".conntainer");
//    arrays   //

const nums = [1, 5, 7, 8];
const res = nums.unshift("hey");

const res = nums.shift();

const html = [
  `<li>Hello World</li>`,
  `<li>Hello World</li>`,
  `<li>Hello World</li>`,
];

const res = html.join();

container.innerHTML = res;

console.log(res);

// const btn = document.querySelector(".btn");
// const container = document.querySelector(".container");

// const html = [];
// btn.addEventListener("click", () => {
//   const res = prompt("enter");
//   if (res.includes("muhim")) {
//     html.unshift(`<li>${res}</li>`);
//   } else {
//     html.push(`<li>${res}</li>`);
//   }
//   container.innerHTML = html.join("");
// });
// // indexOf = indexini bilib beradi
// // reverse arrini teskari qilib beradi
// const nums = [1, 2, 3, 7, "hi", 8];

// let hello = nums.reverse();
// console.log(hello);
