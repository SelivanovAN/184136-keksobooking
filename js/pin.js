'use strict';
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;
var keydownEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closeOfferDialog();
  }
};
