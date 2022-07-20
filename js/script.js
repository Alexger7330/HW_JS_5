// // 1
// let func = (num1, num2, num3) => {
//     let res = (num1 - num2) / num3;
//     console.log(res)
// }
// func(8,5,12);

// // 2
// let pow = (number,step) => {
//     return (number ** step)
// }
// console.log(pow(3,2))
// console.log(pow(3,3))

// // 3
// let max = (a, b) => {
//     if (a > b) {
//         return (`Max = ${a}`)
//     } else {
//         return (`Max = ${b}`)
//     }
// }
// let min = (a, b) => {
//     if (a < b) {
//         return (`Min = ${a}`)
//     } else {
//         return (`Min = ${b}`)
//     }
// }
// console.log(max(12, 0));
// console.log(min(12, 0))

// // 4
// let arr = [];
// let firstN = +prompt("Введите число, с которого начинаеся массив");
// let secondN = +prompt(`Введите число, на которое заканчивается массив`);
// let retArr = (firstN, secondN) => {
//     for (let i = firstN; i <= secondN; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// retArr(firstN, secondN)
// let printArr = (arr) => {
//     console.log(arr)
// }
// printArr(arr)

// // 5
// let number = +prompt("Введите число для проверки");
// let isEven = (number) => {
//     if (number % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isEven(number))

// // 6
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let cheker = (arr) => {
//     let arrCh = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isEven(arr[i]) == true) {
//             arrCh.push(arr[i])
//         }
//     }
//     return (arrCh)
// }
// console.log(cheker(arr))

// // 7.1
// let count = +prompt("Введите количество рядов пирамидки");
// let piram = (count) => {

//     // for (let i = 1; i <= count; i++) {
//     //     console.log (String(i).repeat(i));
//     // }

//     for (let i = 1; i <= count; i++) {
//         for (let j = 1; j <= i; j++) {
//             document.write(i)
//         }
//         document.write(`<br>`)
//     }
// }
// piram(count)

// // 7.2
// let count = +prompt("Введите количество рядов пирамидки");
// let simbol = prompt("Введите симовол из которого будет состоять пирамидка");
// simbol = simbol || "*";
// let bool = false;
// while (bool == false) {
//     if (simbol == ' ') {
//         simbol = prompt("Введите симовол из которого будет состоять пирамидка");
//     } else {
//         bool = true;
//     }
// }
// let piram = (count, simbol) => {

//     for (let i = 1; i <= count; i++) {
//         for (let j = 1; j <= i; j++) {
//             document.write(simbol)
//         }
//         document.write(`<br>`)
//     }
// }
// piram(count, simbol)

// 8
let count = +prompt("Введите количество рядов пирамидки");
let treangle = (count) => {
    for (let i = 1; i <= count; i++) {                                         //////////////////////////////
        console.log('*'.repeat(i));
    }
}
treangle(count)


// // 9
// let arr = [0, 1];
// let fibonachi = (arr) => {
//     for (let i = 2; i <= 1000; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr;
// }
// console.log(fibonachi(arr));

// // 10
// let number = 55555;
// function sumCifr(number) {
//     number += '';
//     sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += +number[i];
//     }
//     if (sum > 9) {
//         sumCifr(sum);
//     }
//     return sum;
// }
// console.log(sumCifr(number))

// // 11
// let arr = [22,33,7,5,798,4687,4654,8,67,545,454,78,7];
// let i = 0;
// let length = arr.length;
// let printArr = (arr) =>{
//     if(i != length){
//         console.log(arr[i]);
//         i++;
//         printArr(arr);
//     }
// }
// printArr(arr)

// // 12
// let fname = prompt(`Введите имя`);
// let surname = prompt(`Введите фамилию`);
// let fatherName = prompt(`Введите отчество`);
// let group = prompt(`Введите вашу группу`);
// function ramka(surname, name, fatherName, group) {
//     let length = 0;
//     let zvezd = '*';
//     let firstStr = `* Домашняя работа: "Функции"`;
//     let secondStr = `* Выполнил: студент группы: ${group}`;
//     let thirdStr = `* ${surname} ${name} ${fatherName}`;
//     if (firstStr.length >= secondStr.length && firstStr.length >= thirdStr.length) {
//         length = firstStr.length;
//     } else if (secondStr.length >= firstStr.length && secondStr.length >= thirdStr.length) {
//         length = secondStr.length;
//     } else {
//         length = thirdStr.length;
//     }
//     length += 2;
//     firstStr = firstStr + ' '.repeat(length - (firstStr.length + 1)) + '*'
//     secondStr = secondStr + ' '.repeat(length - (secondStr.length + 1)) + '*'
//     thirdStr = thirdStr + ' '.repeat(length - (thirdStr.length + 1)) + '*'
//     console.log(zvezd.repeat(length));
//     console.log(firstStr);
//     console.log(secondStr);
//     console.log(thirdStr);
//     console.log(zvezd.repeat(length));
// }
// ramka(surname, fname, fatherName, group)

// 13
