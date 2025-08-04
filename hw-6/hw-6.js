/*1*/
let str1 = 'js';
console.log(str1.toUpperCase());

/*2*/
const array2 = ['Степан привет', 'хлеб', 'усадьба', 'степан', 'привет Степан'];
const str = 'Степан'; 

function newArray(array2, str){
    let newArray2 = [];
    for(let i = 0; i < array2.length; i++){
        if (array2[i].toLowerCase().startsWith(str.toLowerCase())){
            newArray2.push(array2[i]);
        }
    }
    return newArray2;
}

/*3*/
let number3 = 32.58884;
console.log(Math.floor(number3));
console.log(Math.ceil(number3));
console.log(Math.round(number3));

/*4*/
const minVal = Math.min(52, 53, 49, 77, 21, 32);
const maxVal = Math.max(52, 53, 49, 77, 21, 32);

console.log(minVal);
console.log(maxVal);

/*5*/
function randomNumber(){
    let number5 = Math.floor(Math.random() * 10) + 1;
    console.log(number5);
}

/*6*/
const number6 = 8;
function randomArray(number6){
    let array6 = [];
    for(let i = 0; i < Math.round(number6 / 2); i++){
        array6.push(Math.floor(Math.random() * (number6 + 1)));
    }
    return array6;
}


/*7*/
const numberFirst7 = 2;
const numberSecond7 = 10;

function randomNum(numberFirst7, numberSecond7) {
    let number7 = Math.floor(Math.random() * numberSecond7) + numberFirst7;
    return number7;
}
console.log(randomNum(numberFirst7, numberSecond7));


/*8*/
let todayDate = new Date();
console.log(todayDate);


/*9*/
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let daysLater = currentDate.getTime() + days73;
let searchDate = new Date(daysLater);
console.log(searchDate);


/*10*/
let myDate = new Date();
function writeDate(myDate) {
    let date = myDate.getDate();
    let month = myDate.getMonth();
    let year = myDate.getFullYear();
    let day = myDate.getDay();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    let monthsInRussian = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    let daysInRussian = [
        'Понелельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
    ]

    let russianMonth = monthsInRussian[month];
    let russianDay = daysInRussian[day];

    return `Дата: ${date} ${russianMonth} ${year} - это ${russianDay}. \nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(writeDate(myDate));