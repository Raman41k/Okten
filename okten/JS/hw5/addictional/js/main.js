// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min = (firstNum, secondNum, thirdNum) => {
//     if (firstNum < secondNum && firstNum < thirdNum) {
//         console.log(`${firstNum} is the lowest number!`);
//     } else if (secondNum < firstNum && secondNum < thirdNum) {
//         console.log(`${secondNum} is the lowest number!`);
//     } else if (thirdNum < firstNum && thirdNum < firstNum) {
//         console.log(`${thirdNum} is the lowest number!`);
//     } else {
//         console.log("Error");
//     }
// }
// min(0,1,-7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (firstNum, secondNum, thirdNum) => {
//     if (firstNum > secondNum && firstNum > thirdNum) {
//         console.log(`${firstNum} is the largest number!`);
//     } else if (secondNum > firstNum && secondNum > thirdNum) {
//         console.log(`${secondNum} is the largest number!`);
//     } else if (thirdNum > firstNum && thirdNum > firstNum) {
//         console.log(`${thirdNum} is the largest number!`);
//     } else {
//         console.log("Error");
//     }
// }
// max(7,1,5);

// - створити функцію яка повертає найбільше число з масиву

// let array = [-200, 13, -222, -500, 999, -21, -70, 700, 3333];
//
// let maxInArray = (array) => {
//     let max = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maxInArray(array));

// - створити функцію яка повертає найменьше число з масиву

// let array = [200, 13, 222, 500, 999, 0, 70, 700, -1];
//
// let minInArray = (array) => {
//     let min = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     console.log(min);
// }
// minInArray(array);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [];
// let fillRandom = (array, size) => {
//     for (let i = 0; i < size; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//     console.log(array);
//     return array;
// }
//
// let sumElements = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
// }
// sumElements(fillRandom(array, 5));

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let showNum = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// showNum(97);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let showMore = (a, b) => {
//
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     } else if (a === b) {
//         console.log(`a = ${a} b = ${b}`)
//     } else {
//         console.log("Error");
//     }
//
// }
//
// showMore(100, 0);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE: ?????????????????????????????????????????????????????????????????????????????????????
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let change = (array, i) => {
//
//     let wait = array[i]; //9
//     array[i] = array[i+1];
//     array[i+1] = wait;
//
//     console.log(array);
// }
// change([9,8,0,4], 0);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// let zeroEnd = (array) => {
//     let zeroCount = 0;
//     let newArray = [];
//     let index = 0;
//     for (let i = 0; i  < array.length; i++) {
//         if (array[i] === 0) {
//             zeroCount++;
//         } else {
//             newArray[index++] = array[i];
//         }
//     }
//     for (let i = 0; i < zeroCount; i++) {
//         newArray[newArray.length] = 0;
//     }
//     return newArray;
// }
//
// zeroEnd([0,0,1,0]);

// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]