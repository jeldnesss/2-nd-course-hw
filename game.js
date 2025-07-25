function firstGame(event) {
    event.preventDefault();
    let correctNumber = Math.floor(Math.random() * 100) + 1;
    console.log(correctNumber);
    let flag = true;
    while (flag){
        let userNumber = prompt('Угадайте число от 1 до 100');
        if (userNumber === null){
            alert('игра прерванна');
            flag = false;
            return;
        }
        userNumber = Number(userNumber);
        if (correctNumber === userNumber) {
            alert('число угадано верно');
            flag = false;
        } else if(userNumber < correctNumber){
            alert('загаданное число больше');
        }
        else{
            alert('загаданное число меньше');
        }
    }
}

function secondGame(event) {
    event.preventDefault();
    let result;
    let firstNum = Math.floor(Math.random() * 100) + 1;
    let secondNum = Math.floor(Math.random() * 100) + 1;

    let array = ['+', '-', '*', '/'];
    let operation = array[Math.floor(Math.random() * 4)];

    if (operation === '+'){
        result = firstNum + secondNum;
    } else if(operation === '-') {
        if (firstNum < secondNum){
            [firstNum, secondNum] = [secondNum, firstNum];
        }
        result = firstNum - secondNum;
    } else if (operation === '*'){
        result = firstNum * secondNum;
    } else{
        result = Math.round(firstNum / secondNum);
    }

    let flag = true;

    while(flag){
        let userResult = prompt(`Решите пример ${firstNum} ${operation} ${secondNum}`);
        
        if (userResult === null){
            alert('игра прерванна');
            flag = false;
            return;
        }
        userResult = Number(userResult);
        if (userResult === result) {
            alert('всё верно!');
            flag = false;
        } 
    } 
}