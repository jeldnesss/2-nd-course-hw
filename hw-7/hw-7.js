/*1*/
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

/*2*/
function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, rule) {
    let output = [];
    for(let i = 0; i < arr.length; i++){
        if(rule(arr[i])){
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people1, isMale));


/*3*/
const timer = () => {
    const interval = setInterval((time) => {
        console.log(new Date().toLocaleTimeString());
    }, 3 * 1000);
    setTimeout((interval) => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30 * 1000);
}
timer();

/*4*/

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1 * 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

/*5*/
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));