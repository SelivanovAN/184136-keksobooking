'use strict';
var PIN_CLASS = 'pin';
var ACTIVE_PIN_CLASS = 'pin--active';
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;
var offerDialog = document.body.querySelector('#offer-dialog');
var keydownEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closeOfferDialog();
  }
};
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
var clickPinHandler = function (evt) {
  activatePinAndOpenDialog(evt.currentTarget);
};
var enterKeydownPinHandler = function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    activatePinAndOpenDialog(evt.currentTarget);
  }
};

function findAuthor(avatar) {
  for (var i = 0; i < authors.length; i++) {
    if (avatar.endsWith(authors[i].author.avatar)) {
      return authors[i];
    }
  }
  return null;
}
function closeOfferDialog() {
  document.removeEventListener('keydown', keydownEscHandler);

  offerDialog.style.display = 'none';
  deactivateCurrentPin();
}
function activatePin(pin) {
  deactivateCurrentPin();
  pin.classList.add(ACTIVE_PIN_CLASS);
}

var enterKeydownCloseButtonHandler = function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closeOfferDialog();
  }
};

var clickCloseButtonHandler = function () {
  closeOfferDialog();
};
var pins = document.body.querySelectorAll('.pin');
for (var i = 0; i < pins.length; i++) {
  pins[i].addEventListener('click', clickPinHandler);
  pins[i].addEventListener('keydown', enterKeydownPinHandler);
}
var closeButton = document.body.querySelector('.dialog__close');
closeButton.addEventListener('click', clickCloseButtonHandler);
closeButton.addEventListener('keydown', enterKeydownCloseButtonHandler);
