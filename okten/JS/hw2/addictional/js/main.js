// Створюєш масив в якому 4 об‘єкти
// В кожному об‘єктіпо 2 значення
// 1: team - назва футбольної команди
// 2: players - масив в якому 3 об‘єкти, в кожному обєкті по 2 значення:
//     1: ім‘я футболіста
// 2: кількість голів яку він забив в сезоні
// Після того в консолі повинно вивестись:
//     Команда - сумарна кількість голів усіх футболістів цієї команди

let array = [
    {team1: 'team1', players: [{playerName: 'Cristiano Ronaldo', scores: 813}, {playerName: 'Lionel Messi', scores: 794}, {playerName: 'Pele', scores: 762}]},
    {team2: 'team2', players: [{playerName: 'Romário', scores: 755}, {playerName: 'Ferenc Puskás', scores: 729}, {playerName: 'Josef Bican', scores: 720}]},
    {team3: 'team3', players: [{playerName: 'Jimmy Jones', scores: 647}, {playerName: 'Gerd Müller', scores: 634}, {playerName: 'Eusébio', scores: 619}]},
    {team4: 'team4', players: [{playerName: 'Joe Bambrick', scores: 616}, {playerName: 'Robert Lewandowski', scores: 563}, {playerName: 'Glenn Ferguson', scores: 561}]},
];

let team1 = array[0].players[0].scores + array[0].players[1].scores + array[0].players[2].scores;
let team2 = array[1].players[0].scores + array[0].players[1].scores + array[0].players[2].scores;
let team3 = array[2].players[0].scores + array[0].players[1].scores + array[0].players[2].scores;
let team4 = array[3].players[0].scores + array[0].players[1].scores + array[0].players[2].scores;

console.log("The ", array[0].team1, "scores", team1);
console.log("The ", array[1].team2, "scores", team2);
console.log("The ", array[2].team3, "scores", team3);
console.log("The ", array[3].team4, "scores", team4);