// let user = {};

// user.name = "Jhon";
// user.surname = "Smith",

//   user.name = "Pete"
// delete user.name,
//   console.log(user);

// let jhon = 300;
// let ann = 160;
// let peter = 130;
// let sum = jhon + ann + peter;


// if (jhon > ann && jhon > peter) {
//   console.log(`Jhonning ${jhon}`);
// } else if (ann > jhon && ann > peter) {
//   console.log(`Anna ${ann}`);
// } else {
//   console.log(`Peter ${peter}`);
// }
// console.log(`Jhon: ${jhon} `);
// console.log(`Peter: ${peter} `);
// console.log(`Anna: ${ann} `);
// console.log(`Jami oylik - ${sum} ga teng`);


// function isEmpty() {
//   let schedule = {
//     // name: "blablabla"
//   };
//   for (let i in schedule) {
//     if (!(i == true)) return false;

//   } return true;

// }

// console.log(isEmpty());

// let obj = {
//   x: 20,
//   y: 30,
//   z: 40,
// };
// const calc = (s, obj) => {
//   let res = 0;
//   for (let i in obj) {
//     if (i === false) {
//       // console.log(i);
//       res = s - obj[i];
//       console.log(res);
//     } else if (res > s - obj[i]) res = s - obj[i];
//   }
//   return res;
// };
// console.log(calc(50, obj));

let obj = {
  name: "Uumaroie",
  surname: "xoshimovaA",
  age: 2
};

let sum = 0
let sum1 = 0
let sumUndosh1 = 0
let sumUndosh2 = 0
for (i in obj.name) {
  if (obj.name[i] === "a" || obj.name[i] === "A") {
    sum++
  } else if (obj.name[i] === "u" || obj.name[i] === "U") {
    sum++
  } else if (obj.name[i] === "o" || obj.name[i] === "O") {
    sum++
  } else if (obj.name[i] === "e" || obj.name[i] === "E") {
    sum++
  } else if (obj.name[i] === "i" || obj.name[i] === "I") {
    sum++
  } else {
    sumUndosh1++
  }
}
console.log(`name:keyda ${sum}ta unli harf va ${sumUndosh1} ta undosh harf`);
console.log("----------");

for (v in obj.surname) {
  if (obj.surname[v] === "o" || obj.surname[v] === "O") {
    sum1++
  } else if (obj.surname[v] === "i" || obj.surname[v] === "I") {
    sum1++
  } else if (obj.surname[v] === "a" || obj.surname[v] === "A") {
    sum1++
  } else if (obj.surname[v] === "e" || obj.surname[v] === "E") {
    sum1++
  } else if (obj.surname[v] === "u" || obj.surname[v] === "U") {
    sum1++
  } else {
    sumUndosh2++
  }
}
console.log(`surname:keyda ${sum1} ta unli harf va ${sumUndosh2} ta undosh`);
