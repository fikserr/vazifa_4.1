// let son1 = prompt("Birinchi raqamni kiritng");

// let son2 = prompt("Ikkinchi raqamni kiritng");

// let son3 = prompt("Uchinchi raqamni kiritng");



// if(son1 < son2 && son1 > son3 ){
//     console.log("Sizning kiritgan o`rta soningiz" + son1);
// }else if(son1 < son3 && son1 > son2){
//     console.log("Sizning kiritgan o`rta soningiz" + son1);
// }else if (son2 < son1 && son2 > son3) {
//     console.log("Sizning kiritgan o`rta soningiz" + son2);
// }else if (son2 < son3 && son2 > son1) {
//     console.log("Sizning kiritgan o`rta soningiz" + son2);
// }else if (son3 < son2 && son3 > son1) {
//     console.log("Sizning kiritgan o`rta soningiz" + son3);
// }else if (son3 < son1 && son3 > son2) {
//     console.log("Sizning kiritgan o`rta soningiz" + son3);
// }else{
//     console.log("Notugri son kiritdingiz");
// }


// let son1 = prompt("Birinchi raqamni kiritng");
// let son2 = prompt("Ikkinchi raqamni kiritng");
// let son3 = prompt("Uchinchi raqamni kiritng");

// function getMiddleNumber(a, b, c) {
//   if ((a <= b && a >= c) || (a <= c && a >= b)) {
//     return a;
//   } else if ((b <= a && b >= c) || (b <= c && b >= a)) {
//     return b;
//   } else if ((c <= a && c >= b) || (c <= b && c >= a)) {
//     return c;
//   } else {
//     return "Notugri son kiritdingiz";
//   }
// }

// let middleNumber = getMiddleNumber(Number(son1), Number(son2), Number(son3));
// console.log("Sizning kiritgan o`rta soningiz: " + middleNumber);


let son1 = prompt("Birinchi raqamni kiritng");
let son2 = prompt("Ikkinchi raqamni kiritng");
let son3 = prompt("Uchinchi raqamni kiritng");

son1 = Number(son1);
son2 = Number(son2);
son3 = Number(son3);

if ((son1 <= son2 && son1 >= son3) || (son1 <= son3 && son1 >= son2)) {
  console.log("Sizning kiritgan o`rta soningiz: " + son1);
} else if ((son2 <= son1 && son2 >= son3) || (son2 <= son3 && son2 >= son1)) {
  console.log("Sizning kiritgan o`rta soningiz: " + son2);
} else if ((son3 <= son1 && son3 >= son2) || (son3 <= son2 && son3 >= son1)) {
  console.log("Sizning kiritgan o`rta soningiz: " + son3);
} else {
  console.log("Notugri son kiritdingiz");
}
