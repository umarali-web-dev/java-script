

//  let browser = prompt("Which browser you use");

// switch (browser) {
//   case "edge":
//     console.log("You have got the Edge !!");
//     break;
//   case "chrome":
//     console.log("Ok we support these browsers too");
//     break;
//   case "firefox":
//     console.log("Ok we support these browsers too")
//     break;
//   case "safari":
//     console.log("Ok we support these browsers too");
//     break;
//   case "opera":
//     console.log("Ok we support these browsers too");
//     break;
//   default: console.log("We hope that this page looks ok");
// }


// let num = prompt("Son kiritng");

// if (num >= 1) {
//   console.log("Kiritilgan son 1 dan katta");
// }
// else if (num <= -1) {
//   console.log("kiritilgan son -1 ");
// } else {
//   console.log("kiritilgan son 0");
// }

const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}