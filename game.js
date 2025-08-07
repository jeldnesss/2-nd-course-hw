const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
const btnGame7 = document.getElementById('gameButtonColors');
const btnGameMobile7 = document.getElementById('gameButtonColorsMobile');
const body = document.querySelector('.main__container');
const colors = ['#222222', '#FFFFFF', '#555555', '#00000099', '#68C318', '#FF006E', '#00D5FF', '#4B0082', '#FFBE00', '#00FF80'];


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

function thirdGame(event){
    event.preventDefault();
    let userText = prompt('Введите строку для переворачивания');
    let arrayText = userText.split('');
    arrayText = arrayText.reverse();
    userText = arrayText.join('');
    alert(`Перевернутый текст: ${userText}`); 
}

function fifthGame(event, quiz){
    event.preventDefault();
    let counter = 0;
    for(let i = 0; i < quiz.length; i++){
        let userAnswer = prompt(quiz[i].question + '\n' + quiz[i].options[0] + '\n' + quiz[i].options[1] + '\n' + quiz[i].options[2]);
        if(userAnswer === null){
            alert('Игра прервана');
            return;
        }
        if(i === 0){
            if((userAnswer === '2') || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].toLowerCase().replace(/\s+/g, '')) || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].replace(/^\d+\.\s*/, '').toLowerCase().replace(/\s+/g, ''))){
                counter++;
            }
        }
        if(i === 1){
            if((userAnswer === '2') || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].toLowerCase().replace(/\s+/g, '')) || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].replace(/^\d+\.\s*/, '').toLowerCase().replace(/\s+/g, ''))){
                counter++;
            }
        }
        if(i === 2){
            if((userAnswer === '2') || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].toLowerCase().replace(/\s+/g, '')) || (userAnswer.toLowerCase().replace(/\s+/g, '') === quiz[i].options[1].replace(/^\d+\.\s*/, '').toLowerCase().replace(/\s+/g, ''))){
                counter++;
            }
        }
    }
    alert(`Количество отгаданных ${counter}`);
}

function sixthGame(event) {
    event.preventDefault();
    let userChoice = prompt('Выберите камень ножницы бумага').toLowerCase().trim();
    const gameArray = ["камень", "ножницы", "бумага"];

    let compChoice = gameArray[Math.floor(Math.random() * 3)].toLowerCase();

    if (((userChoice === 'камень') && (compChoice === 'ножницы')) || ((userChoice === 'ножницы') && (compChoice === 'бумага')) || ((userChoice === 'бумага') && (compChoice === 'камень'))){
        alert(`Вы победили \nваш выбор ${userChoice} \nвыбор компьютера ${compChoice}`);
    } else if (userChoice === compChoice) {
        alert(`Ничья \nваш выбор ${userChoice} \nвыбор компьютера ${compChoice}`);
    } else{
        alert(`Вы проиграли \nваш выбор ${userChoice} \выбор компьютера ${compChoice}`);
    }
}

function seventhGame(colors, body){
    let color = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = color;
}

btnGame7.addEventListener('click', function(event){
    event.preventDefault();
    seventhGame(colors, body);
});

btnGameMobile7.addEventListener('click', function(event){
    event.preventDefault();
    seventhGame(colors, body);
});


