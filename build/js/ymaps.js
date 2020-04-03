//General

var coordinates = [59.830223, 30.349321];
var iconSize = [50, 55];

if (window.matchMedia("(max-width: 767px)").matches) {
  iconSize = [32, 30];
  iconOffset = [-27, -40];
}

ymaps.ready(function() {

  var myMap = new ymaps.Map("map", {
      center: coordinates,
      zoom: 16,
      behaviors: ["default", "scrollZoom"],
      controls: [],
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([59.830223, 30.349321],

      {

      },

      {
        iconLayout: "default#image",
        iconImageHref: "../img/map.svg",
        iconImageSize: iconSize
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");

});

//Autograd

ymaps.ready(function() {

  var myMap = new ymaps.Map("map-1", {
      center: coordinates,
      zoom: 16,
      behaviors: ["default", "scrollZoom"],
      controls: [],
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([59.830223, 30.349321],

      {

      },

      {
        iconLayout: "default#image",
        iconImageHref: "../img/map.svg",
        iconImageSize: [32, 30]
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");

});


//Atlantis

ymaps.ready(function() {

  var myMap = new ymaps.Map("map-2", {
      center: coordinates,
      zoom: 16,
      behaviors: ["default", "scrollZoom"],
      controls: [],
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([59.830223, 30.349321],

      {

      },

      {
        iconLayout: "default#image",
        iconImageHref: "../img/map.svg",
        iconImageSize: [32, 30]
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");

});
