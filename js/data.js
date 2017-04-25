'use strict';
var TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var CHECKIN_OUT_TIME = ['12:00', '13:00', '14:00'];
var TYPES = ['flat', 'house', 'bungalo'];
function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function generateRandomFeatures(features) {
  var result = [];
  var count = generateRandomNumber(1, features.length);
  var index = 0;
  for (var i = 0; i < count; i++) {
    index = ((features.length - 1) * Math.random()).toFixed(0);
    if (result.indexOf(features[index]) === -1) {
      result.push(features[index]);
    }
  }
  return result;
}
function generateAuthors() {
  var authorsCount = 8;
  var results = [];
  for (var i = 0; i < authorsCount; i++) {
    var x = generateRandomNumber(300, 900);
    var y = generateRandomNumber(100, 500);
    var rooms = generateRandomNumber(1, 5);
    results.push({
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png',
      },
      offer: {
        title: TITLE[Math.floor(Math.random() * TITLE.length)],
        address: x + ',' + y,
        price: generateRandomNumber(1000, 1000000),
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        rooms: rooms,
        guests: generateRandomNumber(rooms, rooms * 2),
        checkin: CHECKIN_OUT_TIME[Math.floor(Math.random() * CHECKIN_OUT_TIME.length)],
        checkout: CHECKIN_OUT_TIME[Math.floor(Math.random() * CHECKIN_OUT_TIME.length)],
        features: generateRandomFeatures(FEATURES),
        description: '',
        photos: []
      },
      location: {
        x: x,
        y: y
      }
    });
  }
  return results;
}
var authors = generateAuthors();
