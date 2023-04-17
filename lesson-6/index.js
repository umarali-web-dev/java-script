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


function isEmpty() {
  let schedule = {
    // name: "blablabla"
  };
  for (let i in schedule) {
    if (!(i == true)) return false;

  } return true;

}

console.log(isEmpty());
