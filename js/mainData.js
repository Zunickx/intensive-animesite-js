const mainData = () => {
    fetch('https://intensive-animesite-js-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json() // распаковываем данные с сервера
        })
        .then ((data) => {
            // console.log(data);// передача распакованных данных
            // const filterDate = data.sort((a, b) => {
            //     return b.rating - a.rating;
            // }).filter((item) => item.rating >= 9.0); // отсортировали массив по рейтингу аниме
            const filterViews = data.sort((a, b) => {
                return b.views - a.views;
            })
            // console.log(filterDate);
            console.log(filterViews);
        })
}

mainData();