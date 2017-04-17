'use strict';
var TITLE = [
  'Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'
];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var CHECKIN_OUT_TIME = ['12:00', '13:00', '14:00'];
var TYPES = ['flat', 'house', 'bungalo'];
var TYPE_HOUSE = {
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало'
};
function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generateAuthors() {
  var authorsCount = 8;
  var uniqueTitles = TITLE.slice(0);// ??????
  var results = [];
  for (var i = 0; i < authorsCount; i++) {
    var x = generateRandomNumber(300, 900);
    var y = generateRandomNumber(100, 500);
    var rooms = generateRandomNumber(1, 5);

    results.push({
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png', //?????????
      },
      offer: {
        title: TITLE[Math.floor(Math.random()*TITLE.length)],
        address: x + ',' + y,
        price: generateRandomNumber(1000, 1000000),
        type: TYPES[Math.floor(Math.random()*TYPES.length)],
        rooms: rooms,
        guests: generateRandomNumber(rooms, rooms * 2),
        checkin: CHECKIN_OUT_TIME[Math.floor(Math.random()*CHECKIN_OUT_TIME.length)],
        checkout: CHECKIN_OUT_TIME[Math.floor(Math.random()*CHECKIN_OUT_TIME.length)],
        features: FEATURES[Math.floor(Math.random()*FEATURES.length)],
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
function renderAuthor(author) {
  var pinWidth = 56;
  var pinHeight = 75;

  var div = document.createElement('div');
  div.classList.add('pin');
  div.style.left = (author.location.x + Math.round(pinWidth / 2)) + 'px';
  div.style.top = (author.location.y + pinHeight) + 'px';
  var img = document.createElement('img');
  img.src = author.author.avatar;
  img.classList.add('rounded');
  img.width = 40;
  img.height = 40;
  div.appendChild(img);
  return div;
}

function renderAuthors(authors) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < authors.length; i++) {
    fragment.appendChild(renderAuthor(authors[i]));
  }
  document.querySelector('.tokyo__pin-map').appendChild(fragment);
}

function renderAuthorInDialogPanel(author) {
  var newSectionPanel = document.body.querySelector('#lodge-template').content.cloneNode(true);
  newSectionPanel.querySelector('.lodge__title').textContent = author.offer.title;
  newSectionPanel.querySelector('.lodge__address').textContent = author.offer.address;
  newSectionPanel.querySelector('.lodge__price').innerHTML = author.offer.price + '&#x20bd;/ночь';
  newSectionPanel.querySelector('.lodge__type').textContent = TYPE_HOUSE[author.offer.type];
  newSectionPanel.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + author.offer.guests + ' гостей в ' + author.offer.rooms + ' комнатах';
  newSectionPanel.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + author.offer.checkin + ', выезд до ' + author.offer.checkout;
  newSectionPanel.querySelector('.lodge__description').textContent = author.offer.description;

  var featuresBlock = newSectionPanel.querySelector('.lodge__features');
  for (var i = 0; i < author.offer.features.length; i++) {
    var span = document.createElement('span');
    span.classList.add('feature__image');
    span.classList.add('feature__image--' + author.offer.features[i]);
    featuresBlock.appendChild(span);
  }

  var dialog = document.body.querySelector('#offer-dialog');
  dialog.querySelector('.dialog__title > img').src = author.author.avatar;

  var panelToReplace = dialog.querySelector('.dialog__panel');
  dialog.replaceChild(newSectionPanel, panelToReplace);
}

var authors = generateAuthors();
renderAuthors(authors);
renderAuthorInDialogPanel(authors[0]);
