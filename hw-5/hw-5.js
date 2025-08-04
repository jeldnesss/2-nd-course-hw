/*1*/
let array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i <= 5; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break;
    }
}


/*2 */
let array2 = [1, 5, 4, 10, 0, 3];
let count = 0;
for (let i = 0; i <= 5; i++) {
    count++;
    if (array1[i] === 4) {
        break;
    }
}
console.log(count - 1);

/*3*/
let array3 = [1, 3, 5, 10, 20];
let joinedArray3 = array3.join(" ");
console.log(joinedArray3);

/*4 */
let array4 = [];

for (i = 0; i < 3; i++){
    for (i = 0; i < 3; i++){
        array4.push(1);
    }
}
console.log(array4);

/*5*/
let array5 = [1, 1, 1];
for (i = 0; i < 3; i++){
    array5.push(2);
}
console.log(array5);

/*6*/
let array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
let result = array6.filter(item => item !== 'a');
console.log(result);

/*7*/
let array7 = [9, 8, 7, 6, 5];
let userNum = prompt('введите число');
userNum = Number(userNum);
if (array7.includes(userNum)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

/*8*/
let str = 'abcdef';
let array8 = str.split('');
array8.reverse();
console.log(array8);

/*9*/
let array9 = [[1, 2, 3],[4, 5, 6]];
let newArray = [].concat(...array9);
console.log(newArray);

/*10*/
let array10 = [];
for(i = 0; i < 7; i++){
    array10.push(Math.floor(Math.random() * 10) + 1);
}
console.log(array10)
for(i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
}
/*11*/
let array11 = [3, 7, 8, 9];
function square(array11){
    let newArray11 = array11.map(item => item ** 2);
    console.log(newArray11);
    return newArray11;
}
square(array11);

/*12*/
let array12 = ['dog', 'sorry', 'bedroom', 'no'];
function words(array12){
    let newArray12 = array12.map(item => item.length);
    console.log(newArray12);
    return newArray12;
}
words(array12);

/*13*/
let array13 = [2, 8, -5, 4, -1, -2];
function negative(array13){
    let newArray13 = array13.filter(item => item < 0);
    console.log(newArray13);
    return newArray13;
}
negative(array13);

/*14*/
let array14 = [];
for(i = 0; i < 10; i++){
    array14.push(Math.floor(Math.random() * 10));
}
console.log(array14);
let evenArray = array14.filter(item => (item % 2 == 0) && item !== 0);
console.log(evenArray);

/*15*/
let array15 = [];
let averageCount = 0;
for(i = 0; i < 6; i++){
    array15.push(Math.floor(Math.random() * 10) + 1);
    averageCount += array15[i];
}
console.log(array15);
console.log(averageCount / 6);