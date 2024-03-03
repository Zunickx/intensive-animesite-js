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
        // console.log(elem);
        const src = elem.dataset.setbg
        elem.style.backgroundImage = `url(${src})`;

        // либо это можно записать вот так
        // elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    })


    // методы перебора массива и массива объектов
    // const array = [4, 2, 5, 3, 1];

    // const newArray = array.filter((item) => {
    //     return item >= 3;
    // }).sort();

    // const newArray2 = array.sort()

    // console.log(newArray);
    // console.log(newArray2);

    // const array3 = [
    //     {
    //         id: 0,
    //         value: 100
    //     },
    //     {
    //         id: 2,
    //         value: 300
    //     },
    //     {
    //         id: 1,
    //         value: 200
    //     }
    // ]

    // const objectArray = array3.sort((a, b) => {
    //     return a.value - b.value
    // });
    // console.log(objectArray);

}

bgElements();