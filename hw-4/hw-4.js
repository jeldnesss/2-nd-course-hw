let a = Number(prompt('введите число'));

/*1*/ 
function compare() {
    let firstNum = Number(prompt('введите первое число'));
    let secondNum = Number(prompt('введите второе число'));
    if (firstNum > secondNum){
        return secondNum;
    } else{
        return firstNum;
    }
}

/*2 */
function parity(){
    let userNum = Number(prompt('введите число'));
    if (userNum % 2 === 0) {
        return "Число четное";
    }else {
        return "Число нечетное";
    }
}

/*3*/
function square(a) {
    console.log(a ** 2);
}
function square1(a) {
    return a ** 2;
}

/*4*/
function age(){
    let age = Number(prompt('введите ваш возраст'));
    if (age < 0){
        alert('Вы ввели неправильное значение');
    }
    else if (age >= 0 && age <= 12){
        alert('Привет, друг!');
    }
    else{
        alert('Добро пожаловать!');
    }
}
/*5*/
function number(){
    let num1 = Number(prompt('введите число'));
    let num2 = Number(prompt('введите число'));
    if (isNaN(num1) || isNaN(num2)){
        return "Одно или оба значения не являются числом";
    } else {
        return num1 * num2;
    }
}

/*6*/
function numberCheck(){
    let n = Number(prompt('введите число'));
    if (isNaN(n)){
        return "Переданный параметр не является числом";
    } else {
        return `n в кубе равняется ${n ** 3}`;
    }
}

/*7*/
const circle1 = {
    radius: 10,
    getArea(Pi) {
        return this.radius ** 2 * Math.PI ;
    },
    getPerimeter(Pi) {
        return this.radius * 2 * Math.PI;
    }
}
const circle2 = {
    radius: 6,
    getArea(Pi) {
        return this.radius ** 2 * Math.PI ;
    },
    getPerimeter(Pi) {
        return this.radius * 2 * Math.PI;
    }
}