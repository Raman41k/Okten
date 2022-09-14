// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = [];

// function findAllClass(element) {
//
//     let allElements = document.querySelectorAll('*');
//
//     for (let i = 0; i < allElements.length; i++) {
//
//         let classes = allElements[i].className.toString().split(/\s+/);
//
//         for (let j = 0; j < classes.length; j++) {
//
//             let cls = classes[j];
//             if (cls && arr.indexOf(cls) === -1)
//                 arr.push(cls);
//         }
//
//     }
//
// }
//
// findAllClass(document.body);