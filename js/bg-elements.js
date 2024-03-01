const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    // for (let i = 0; i < elements.length; i++) {
    //     // console.dir(elements[i]); // выводит элементы со страницы в виде объектов
    //     const src = elements[i].dataset.setbg // находим пути к картинкам через свойство объекта dataset

    //     // elements[i].style.backgroundImage = 'url(' + src + ')';
    //     // либо вот так:
    //     elements[i].style.backgroundImage = `url(${src})`;
    // }

    elements.forEach((elem) => {
        console.log(elem);
        const src = elem.dataset.setbg
        elem.style.backgroundImage = `url(${src})`;

        // либо это можно записать вот так
        // elem.style.backgroundImage = `url(${elem.dataset.setbg})`;

    })
}

bgElements();