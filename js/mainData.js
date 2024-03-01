const mainData = () => {
    fetch('https://intensive-animesite-js-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json() // распаковываем данные с сервера
        })
        .then ((data) => {
            console.log(data) // передача распакованных данных
        })
}

mainData();