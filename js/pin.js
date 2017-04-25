'use strict';
window.contants = {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;
};
window.pin = (function () {
  var PIN_CLASS = 'pin';
  var ACTIVE_PIN_CLASS = 'pin--active';
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
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
})
