const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton');
    console.log(topBtn);

    topBtn.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
        // window.scrollTo({ // баговый вариант
        //     top: 0,
        //     behavior: 'smooth'
        // })
        // вариант с подключением библиотеки seamless-scroll-polyfill https://www.npmjs.com/package/seamless-scroll-polyfill
        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
} 

scrollToTop();