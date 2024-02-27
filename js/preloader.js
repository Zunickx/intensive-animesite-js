const preloader = document.querySelector('.preloder');
console.log(preloader);

preloader.classList.add('active'); //добавляем класс active (preloader -  или кружочек загрузки)
setTimeout(() => {
    preloader.classList.remove('active'); // удаляем класс active
}, 500);