function firstGame() {
    let correctNumber = Math.floor(Math.random() * 100) + 1;
    console.log(correctNumber);
    let flag = true;
    while (flag){
        let userNumber = prompt('Угадайте число от 1 до 100');
        if (correctNumber == userNumber) {
            alert('число угадано верно');
            flag = false;
        } else if(userNumber < correctNumber){
            alert('загаданное число больше');
        }else{
            alert('загаданное число меньше');
        }
    }
}