// const preloader = document.querySelector('.preloder');
// const swiper = 1; // вызовет критическую ошибку, так как переменная уже зарезервирована, но можно инкапсулировать

// preloader.classList.add('active'); //добавляем класс active (preloader -  или кружочек загрузки)
// setTimeout(() => {
//     preloader.classList.remove('active'); // удаляем класс active
// }, 500);

// инкапсуляция выглядит как обертка в функцию:

const preloader = () => {
    const preloader = document.querySelector('.preloder');
    const swiper = 1;

    preloader.classList.add('active'); //добавляем класс active (preloader -  или кружочек загрузки)
    setTimeout(() => {
        preloader.classList.remove('active'); // удаляем класс active
    }, 500);
}

preloader();
