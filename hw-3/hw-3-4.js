let obj = {'Коля' : '200', 'Вася' : '300', 'Петя' : '400'};

for(let prop in obj){
    console.log('"' + prop + '"' + ' зарплата - ' + obj[prop] + ' долларов');
}