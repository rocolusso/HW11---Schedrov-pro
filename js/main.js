'use strict';


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


let yearBirth = prompt('Введите год вашего рождения');
let userCity = null;
let userSport = null;
let userAge = 2022 - yearBirth;

if (yearBirth === null) {
    yearBirth ='Жаль, что Вы не ввели год вашего рождения'
    alert(yearBirth);
} else if (yearBirth ==='') {
    yearBirth ='Жаль, что Вы не ввели год вашего рождения'
    alert(yearBirth);
} else {
    yearBirth = +yearBirth;

    userCity = prompt('Введите ваш город');

    if (userCity === null) {
        userCity ='Жаль, что Вы не ввели свой город'
        alert(userCity);
    } else if (userCity ==='') {
        userCity ='Жаль, что Вы не ввели свой город'
        alert(userCity);
    } else {

        if (userCity ==='Киев') {
            userCity ='Ты живешь в столице Украины';
        } else  if (userCity ==='минск') {
            userCity ='Ты живешь в столице беларуси';
        } else if (userCity ==='москва') {
            userCity ='Ты живешь в столице россии';
        } else {
            userCity =`Ты живешь в ${userCity}`
        }


        userSport = prompt('Введите любимый вид спорта');

        if (userSport === null) {
            userSport ='Жаль, что Вы не ввели свой любимый вид спорта'
            alert(userSport);
        } else if (userSport ==='') {
            userSport ='Жаль, что Вы не ввели свой любимый вид спорта'
            alert(userSport);
        } else {

            if (userSport === biathlon.name){
                userSport = `Круто! Хочешь стать ${biathlon.champion}`;
            } if (userSport === swimming.name){
                userSport = `Круто! Хочешь стать ${swimming.champion}`;
            } if (userSport === badminton.name){
                userSport = `Круто! Хочешь стать ${badminton.champion}`;
            }

            alert (`Возраст: ${userAge} \n Город: ${userCity} \n Любимый вид спорта: ${userSport} `);

        }

    }

}














