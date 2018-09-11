//Домашнее задание к уроку 2

/* 3) Объявить две целочисленные переменные a и b и задать им произвольные 
// начальные значения. Затем написать скрипт, который работает 
// по следующему принципу:
* если a и b положительные, вывести их разность;
* если а и b отрицательные, вывести их произведение;
* если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.*/
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  var a = randomInteger(-10,10);
  var b = randomInteger(-10,10);
  if(a>0 && b>0){
      console.log(a-b);
  }
  else if(a<=0 && b<=0){
        console.log(a*b);
  }
  else{
      console.log(a+b);
  }
  
/*4) Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.*/
a = randomInteger(0,15);

switch(a){
    case 0:        
        console.log("0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 1:        
        console.log("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 2:        
        console.log("2,3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 3:        
        console.log("3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;    
    case 4:        
        console.log("4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 5:        
        console.log("5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 6:        
        console.log("6,7,8,9,10,11,12,13,14,15");
        break;
    case 7:        
        console.log("7,8,9,10,11,12,13,14,15");
        break;
    case 8:        
        console.log("8,9,10,11,12,13,14,15");
        break;
    case 9:        
        console.log("10,11,12,13,14,15");
        break;
    case 10:        
        console.log("10,11,12,13,14,15");
        break;
    case 11:        
        console.log("11,12,13,14,15");
        break;
    case 12:        
        console.log("12,13,14,15");
        break;
    case 13:        
        console.log("13,14,15");
        break;
    case 14:        
        console.log("14,15");
        break;
    case 15:        
        console.log("15");

}
//5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//   Обязательно использовать оператор return. 
function sum(a,b){
    var a=a+b;
    return a;
}

function minus(a,b){
    var a=a-b;
    return a;
}

function multiply(a,b){
    var a=a*b;
    return a;
}

function divide(a,b){
    var a=a/b;
    return a;
}

//6) Реализовать функцию с тремя параметрами: 
//function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции.
//  В зависимости от переданного значения операции выполнить одну из арифметических 
//  операций (использовать функции из пункта 3) и вернуть полученное значение 
//  (использовать switch).
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case sum:
            console.log(sum(arg1,arg2));
            break;
        case minus:
            console.log(minus(arg1,arg2));
            break;
        case multiply:
            console.log(multiply(arg1,arg2));
            break;
        case divide:
            console.log(divide(arg1,arg2));
    }
}

  
  
  

