"use strict"

let cost = 0;

let deadlines = {
    day: 0,
    hour: 0,
};

deadlines.day = 1-1;
deadlines.hour = 1-1;

let name = prompt("Введите ваше имя, чтобы я знал, как к вам обращаться");

let type = prompt("Привет, "+ name + "!" + "\n" + "Какой Тип Сайта тебе нужен?"
                 + "\n" + "0 - Сайт-визитка ($300$);"
                 + "\n" + "1 - Интернет-магазин ($100$);"
                 + "\n" + "2 - Доска объявлений ($10$);");

switch (type) {
    case ("0") :
        type = "Сайт-визитка";
        cost += 300;
        deadlines.day += 2;
        deadlines.hour += 12;
        break;
    
    case ("1") :
        type = "Интернет-магазин";
        cost += 100;
        deadlines.day += 5;
        break;
    
    case ("2") :
        type = "Доска объявлений";
        cost += 10;
        deadlines.day += 3;
        deadlines.hour += 16;
        break;
}

let design = prompt("Теперь, "+ name + ", определим какой красоты сайт ты хочешь"
                 + "\n" + "0 - <Пушка-бомба> ($500$);"
                 + "\n" + "1 - <Радует глаз> ($400$);"
                 + "\n" + "2 - <На пойдет> ($300$);"
                 + "\n" + "3 - <Могло быть и хуже> ($200$);"
                 + "\n" + "4 - <Сделано за банку пива> (За такое лучше не платить);");

switch (design) {
    case ("0") :
        design = "Прекраснейшим";
        cost += 500;
        deadlines.hour += 15;
        break;
    
    case ("1") :
        design = "Отличным";
        cost += 400;
        deadlines.hour += 13;
        break;
    
    case ("2") :
        design = "Нормальным";
        cost += 300;
        deadlines.hour += 8;
        break;
        
    case ("3") :
        design = "Таким себе";
        cost += 200;
        deadlines.hour += 4;
        break;
        
    case ("4") :
        design = "Вырвеглазным";
        break;
}

let adapt = prompt(name + ", последний пункт!!!"
                 + "\n" + "<<АДАПТИВНОСТЬ>>"
                 + "\n" + "0 - <Mmm...Nice> ($30$);"
                 + "\n" + "1 - Good ($15$);"
                 + "\n" + "2 - <Wtf, man???> ($1$);");

switch (adapt) {
    case ("0") :
        adapt = "под все устройства.";
        cost += 30;
        deadlines.hour += 15;
        break;
    
    case ("1") :
        adapt = "на конкретном устройстве.";
        cost += 15;
        deadlines.hour += 6;
        break;
    
    case ("2") :
        adapt = "<больно глазкам>.";
        cost += 1;
        deadlines.hour += 2;
        break;
}

/*function calDeadlines(deadlines){
    let a = deadlines.hour / 24;
    
    deadlines.day += a;
    deadlines.hour = deadlines.hour % 24;
}

calDeadlines(deadlines);*/

deadlines.day += deadlines.hour / 24 - deadlines.hour % 24 / 24;
deadlines.hour = deadlines.hour % 24;

var part1, part2;
switch (deadlines.day) {
    case 1 :
        part1 = "день";
        break;
    
    case 2 :
    case 3 :
    case 4 :
        part1 = "дня";
        break;

    case 0 :
    case 5 :
    case 6 :
    case 7 :
        part1 = "дней";
        break;
}

if (deadlines.hour == 0 || deadlines.hour >= 5 && deadlines.hour <= 20){
    part2 = "часов";
} else if (deadlines.hour == 1 || deadlines.hour == 21){
    part2 = "час";
} else{
    part2 = "часа";
}

alert("И для уточнения, Вам нужно:" + "\n" + type + " с " + design + " дизайном и Адаптивностью " + adapt
     + "\n" + "Итоговая стоимость: " + cost + "$;"
     + "\n" + "Сроки (приблизительно): " + deadlines.day +" "+ part1 +" " + deadlines.hour + " " + part2 +" ");