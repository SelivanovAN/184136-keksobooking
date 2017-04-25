'use strict';
window.card = (function()) {
  var TYPE_HOUSE = {flat: 'Квартира', house: 'Дом', bungalo: 'Бунгало'};
  var offerDialog = document.body.querySelector('#offer-dialog');
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
    offerDialog.style.display = 'block';
    document.addEventListener('keydown', keydownEscHandler);
  };
}
