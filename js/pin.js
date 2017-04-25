'use strict';
window.contants = {
  ENTER_KEY_CODE: 13;
  ESC_KEY_CODE: 27;
};
window.pin = (function () {
  var PIN_CLASS = 'pin';
  var ACTIVE_PIN_CLASS = 'pin--active';
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
  var clickPinHandler = function (evt) {
    activatePinAndOpenDialog(evt.currentTarget);
  };
  var enterKeydownPinHandler = function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      activatePinAndOpenDialog(evt.currentTarget);
    }
  };
  function renderAuthor(author) {
    var div = document.createElement('div');
    div.classList.add(PIN_CLASS);
    div.style.left = (author.location.x + Math.round(PIN_WIDTH / 2)) + 'px';
    div.style.top = (author.location.y + PIN_HEIGHT) + 'px';
    div.tabIndex = 0;
    var img = document.createElement('img');
    img.src = author.author.avatar;
    img.classList.add('rounded');
    img.width = 40;
    img.height = 40;
    div.appendChild(img);
    return div;
  }
  document.querySelector('.tokyo__pin-map').appendChild(fragment);
  var deactivateCurrentPin = function () {
    var currentPin = document.querySelectorAll('.pin--active')[0];
    if (currentPin) {
      currentPin.classList.remove('pin--active');
    }
  };
  var activatePinAndOpenDialog = function (pin) {
    activatePin(pin);
    var avatar = pin.childNodes[0].src;
    var author = findAuthor(avatar);
    renderAuthorInDialogPanel(author);
  };
  function findAuthor(avatar) {
    for (var i = 0; i < authors.length; i++) {
      if (avatar.endsWith(authors[i].author.avatar)) {
        return authors[i];
      }
    }
    return null;
  }
  function activatePin(pin) {
    deactivateCurrentPin();
    pin.classList.add(ACTIVE_PIN_CLASS);
  }
  var pins = document.body.querySelectorAll('.pin');
  for (var i = 0; i < pins.length; i++) {
    pins[i].addEventListener('click', clickPinHandler);
    pins[i].addEventListener('keydown', enterKeydownPinHandler);
  }
}());
