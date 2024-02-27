const elements = document.querySelectorAll('.set-bg');

console.log(elements);

for (let i = 0; i < elements.length; i++) {
    console.dir(elements[i]); // выводит элементы со страницы в виде объектов
    const src = elements[i].dataset.setbg // находим пути к картинкам через свойство объекта dataset
    console.log(src);

    // elements[i].style.backgroundImage = 'url(' + src + ')';
    // либо вот так:
    elements[i].style.backgroundImage = `url(${src})`;
}