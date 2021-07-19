
// let map;
// let marker;

// function initMap () {
//     map = new ymaps.Map("yandexmap", {
//         center: [56.204544, 42.682094],
//         // 56.201700, 42.691203
//         zoom: 17,
//         controls: [],
//         behaviors: ["drag"],
//     });
//     marker = new ymaps.Placemark([56.204544, 42.682094], {
//         hintContent: 'Нёрдс',
//         balloonContent: 'Это наша организация'
//     }, {
//         iconLayout: 'default#imageWithContent',
//         iconImageHref: './images/home/map-marker.png',
//         iconImageSize: [231, 190],
//         iconImageOffset: [-50, -190]
//     });
//     console.log(map.geoObjects.add(marker)); 
// }
// ymaps.ready(initMap);



ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("yandexmap", {
            center: [56.204544, 42.682094],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            ''
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './images/home/map-marker.png',
            // Размеры метки.
            iconImageSize: [120, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

      

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
};








