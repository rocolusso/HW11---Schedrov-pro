'use strict';

let yearBirth = prompt('Введите год вашего рождения');
let userCity = prompt('Введите ваш город');
let biathlon = {
    name:'Биатлон',
    champion:'Уле-Эйнар Бьёрндален'
};
let swimming = {
    name:'Плавание',
    champion:'Майкл Фелпс'
};
let badminton = {
    name:'Бадминтон',
    champion:'Кенто Момото'
};



let userSport = prompt('Введите любимый вид спорта');

(yearBirth === null) ? yearBirth ='Жаль, что Вы не ввели год вашего рождения': yearBirth = +yearBirth;

if (userCity ==='Киев') {
   userCity ='Ты живешь в столице Украины';
}
if (userCity ==='минск') {
    userCity ='Ты живешь в столице беларуси';
}
if (userCity ==='москва') {
    userCity ='Ты живешь в столице россии';
}if (userCity === null) {
    userCity ='Жаль, что Вы не ввели свой город';
}

if (userSport === biathlon.name){
    userSport = `Круто! Хочешь стать ${biathlon.champion}`;
} if (userSport === swimming.name){
    userSport = `Круто! Хочешь стать ${swimming.champion}`;
} if (userSport === badminton.name){
    userSport = `Круто! Хочешь стать ${badminton.champion}`;
} if (userSport === null){
    userSport ='Жаль, что Вы не ввели свой любимый вид спорта';
}

alert (`Год рождения: ${yearBirth} \n Город: ${userCity} \n Любимый вид спорта: ${userSport} `);


