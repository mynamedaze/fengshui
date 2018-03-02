'use strict';
$(document).ready(function () {
  /*Плавный скролл*/
  $(function () {
    $('a[href^="#"]').on('click', function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $('html, body').animate({
        scrollTop: dn
      }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
  /* */
  var overlay = document.getElementsByClassName('overlay');
  /*открываем главный попап на обратный звонок*/
  var popupMain = document.getElementsByClassName('popup-main');
  var popupMainCloseBtn = document.getElementsByClassName('popup-main__close-btn');

  var popupMainInputName = document.getElementById('popup-main-input-name');
  var popupMainInputPhone = document.getElementById('popup-main-input-phone');

  var pageHeaderCallbackBtn = document.getElementsByClassName('page-header__callback-btn');
  var pageFooterCallbackLink = document.getElementsByClassName('page-footer__callback-link');

  $(pageHeaderCallbackBtn).click(function () {
    var popupMasterTop = window.pageYOffset + 30 + 'px';
    $(popupMain).css('top', popupMasterTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupMain).fadeIn(300);
    }, 300);
  });

  $(pageFooterCallbackLink).click(function (ev) {
    ev.preventDefault();
    var popupMasterTop = window.pageYOffset + 30 + 'px';
    $(popupMain).css('top', popupMasterTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupMain).fadeIn(300);
    }, 300);
  });

  $(popupMainCloseBtn).click(function () {
    $(popupMain).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /* открываем попап на личную консультацию */
  var popupConsult = document.getElementsByClassName('popup-consult');
  var popupConsultCloseBtn = document.getElementsByClassName('popup-consult__close-btn');

  var consultCatalogBtn = document.getElementsByClassName('consult__catalog-btn');

  var popupConsultInputName = document.getElementsByClassName('popup-consult-input-name');
  var popupConsultInputPhone = document.getElementsByClassName('popup-consult-input-phone');
  var popupConsultInputMail = document.getElementsByClassName('popup-consult-input-mail');
  var popupConsultInputDate = document.getElementsByClassName('popup-consult-input-date');

  $(consultCatalogBtn).click(function () {
    var popupMasterTop = window.pageYOffset + 30 + 'px';
    $(popupConsult).css('top', popupMasterTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupConsult).fadeIn(300);
    }, 300);
  });

  $(popupConsultCloseBtn).click(function () {
    $(popupConsult).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /*открываем попап мастер-классов по нажатию на посмотреть расписание на сайте */
  var masterCatalogBtn = document.getElementsByClassName('master__catalog-btn');
  var popupMaster = document.getElementsByClassName('popup-master');
  var popupMasterCloseBtn = document.getElementsByClassName('popup-master__close-btn');

  var popupMasterItem = document.getElementsByClassName('popup-master__item');
  popupMasterItem = Array.prototype.slice.call(popupMasterItem);

  var masterItemNextMaster = document.getElementsByClassName('master-p__item-next--master');
  masterItemNextMaster = Array.prototype.slice.call(masterItemNextMaster);

  var popupMasterWrapper = document.getElementsByClassName('popup-master__wrapper');
  var popupMasterList = document.getElementsByClassName('popup-master__list');
  var popupMasterForm = document.getElementsByClassName('popup-master__form');
  var popupMasterBackField = document.getElementsByClassName('popup-master__back-field');
  var popupMasterBackLink = document.getElementsByClassName('popup-master__back-link');

  var popupMasterTitleStep1 = document.getElementsByClassName('popup-master__title--step1');
  var popupMasterTitleStep2 = document.getElementsByClassName('popup-master__title--step2');

  var popupMasterInputMaster = document.getElementById('popup-master-input-master');
  var popupMasterInputName = document.getElementById('popup-master-input-name');
  var popupMasterInputPhone = document.getElementById('popup-master-input-phone');
  var popupMasterInputMail = document.getElementById('popup-master-input-mail');

  $(masterCatalogBtn).click(function () {
    var popupMasterTop = window.pageYOffset + 30 + 'px';
    $(popupMaster).css('top', popupMasterTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupMaster).fadeIn(300);
    }, 300);
  });
  $(popupMasterCloseBtn).click(function () {

    $(popupMaster).fadeOut(300);
    setTimeout(function () {
      $(popupMasterItem).removeClass('disable');
      $(popupMasterWrapper).removeClass('popup-master__wrapper--active');
      $(popupMasterList).removeClass('popup-master__list--active');
      $(popupMasterForm).addClass('popup-master__form--inactive');
      $(popupMasterBackField).addClass('disable');
      $(popupMasterInputName).val('');
      $(popupMasterInputPhone).val('');
      $(popupMasterInputMail).val('');
      $(popupMasterInputMaster).val('');
      $(popupMasterTitleStep1).show();
      $(popupMasterTitleStep2).hide();
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /* отрабатываем выбор мастер-классов */
  masterItemNextMaster.forEach(function (element, i) {
    $(element).click(function () {
      $(popupMasterItem).addClass('disable');
      $(popupMasterItem[i]).removeClass('disable');
      $(popupMasterWrapper).addClass('popup-master__wrapper--active');
      $(popupMasterList).addClass('popup-master__list--active');
      $(popupMasterForm).removeClass('popup-master__form--inactive');
      $(popupMasterBackField).removeClass('disable');
      $(popupMasterInputMaster).val($(element).val());
      $(popupMasterTitleStep1).hide();
      $(popupMasterTitleStep2).show();
    });
  });

  $(popupMasterBackLink).click(function (ev) {
    ev.preventDefault();
    $(popupMasterItem).removeClass('disable');
    $(popupMasterWrapper).removeClass('popup-master__wrapper--active');
    $(popupMasterList).removeClass('popup-master__list--active');
    $(popupMasterForm).addClass('popup-master__form--inactive');
    $(popupMasterBackField).addClass('disable');
    $(popupMasterInputMaster).val('');
    $(popupMasterTitleStep1).show();
    $(popupMasterTitleStep2).hide();
  });
  /* */
  /*открываем попап семинаров по нажатию на посмотреть расписание на сайте */
  var seminarCatalogBtn = document.getElementsByClassName('seminar__catalog-btn');
  var popupSeminar = document.getElementsByClassName('popup-seminar');
  var popupSeminarCloseBtn = document.getElementsByClassName('popup-seminar__close-btn');

  var popupSeminarItem = document.getElementsByClassName('popup-seminar__item');
  popupSeminarItem = Array.prototype.slice.call(popupSeminarItem);

  var masterItemNextSeminar = document.getElementsByClassName('master-p__item-next--seminar');
  masterItemNextSeminar = Array.prototype.slice.call(masterItemNextSeminar);

  var popupSeminarWrapper = document.getElementsByClassName('popup-seminar__wrapper');
  var popupSeminarList = document.getElementsByClassName('popup-seminar__list');
  var popupSeminarForm = document.getElementsByClassName('popup-seminar__form');
  var popupSeminarBackField = document.getElementsByClassName('popup-seminar__back-field');
  var popupSeminarBackLink = document.getElementsByClassName('popup-seminar__back-link');

  var popupSeminarTitleStep1 = document.getElementsByClassName('popup-seminar__title--step1');
  var popupSeminarTitleStep2 = document.getElementsByClassName('popup-seminar__title--step2');

  var popupSeminarInputMaster = document.getElementById('popup-seminar-input-master');
  var popupSeminarInputName = document.getElementById('popup-seminar-input-name');
  var popupSeminarInputPhone = document.getElementById('popup-seminar-input-phone');
  var popupSeminarInputMail = document.getElementById('popup-seminar-input-mail');

  $(seminarCatalogBtn).click(function () {
    var popupSeminarTop = window.pageYOffset + 30 + 'px';
    $(popupSeminar).css('top', popupSeminarTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupSeminar).fadeIn(300);
    }, 300);
  });
  $(popupSeminarCloseBtn).click(function () {

    $(popupSeminar).fadeOut(300);
    setTimeout(function () {
      $(popupSeminarItem).removeClass('disable');
      $(popupSeminarWrapper).removeClass('popup-seminar__wrapper--active');
      $(popupSeminarList).removeClass('popup-seminar__list--active');
      $(popupSeminarForm).addClass('popup-seminar__form--inactive');
      $(popupSeminarBackField).addClass('disable');
      $(popupSeminarInputName).val('');
      $(popupSeminarInputPhone).val('');
      $(popupSeminarInputMail).val('');
      $(popupSeminarInputMaster).val('');
      $(popupSeminarTitleStep1).show();
      $(popupSeminarTitleStep2).hide();
      $(overlay).fadeOut(300);
    }, 300);
  });
  /* */
  /* отрабатываем выбор семинаров */
  masterItemNextSeminar.forEach(function (element, i) {
    $(element).click(function () {
      $(popupSeminarItem).addClass('disable');
      $(popupSeminarItem[i]).removeClass('disable');
      $(popupSeminarWrapper).addClass('popup-seminar__wrapper--active');
      $(popupSeminarList).addClass('popup-seminar__list--active');
      $(popupSeminarForm).removeClass('popup-seminar__form--inactive');
      $(popupSeminarBackField).removeClass('disable');
      $(popupSeminarInputMaster).val($(element).val());
      $(popupSeminarTitleStep1).hide();
      $(popupSeminarTitleStep2).show();
    });
  });

  $(popupSeminarBackLink).click(function (ev) {
    ev.preventDefault();
    $(popupSeminarItem).removeClass('disable');
    $(popupSeminarWrapper).removeClass('popup-seminar__wrapper--active');
    $(popupSeminarList).removeClass('popup-seminar__list--active');
    $(popupSeminarForm).addClass('popup-seminar__form--inactive');
    $(popupSeminarBackField).addClass('disable');
    $(popupSeminarInputMaster).val('');
    $(popupSeminarTitleStep1).show();
    $(popupSeminarTitleStep2).hide();
  });
  /* */
  /* открываем попап магазинов по нажатию на кнопку посмотреть каталог */
  var storeCatalogBtn = document.getElementsByClassName('store__catalog-btn');
  var popupStore = document.getElementsByClassName('popup-store');
  var popupStoreCloseBtn = document.getElementsByClassName('popup-store__close-btn');
  var popupStoreTrigger = false;

  var popupStoreWrapper = document.getElementsByClassName('popup-store__wrapper');
  var popupStoreList = document.getElementsByClassName('popup-store__list');
  var popupStoreForm = document.getElementsByClassName('popup-store__form');
  var popupStoreMoreBtn = document.getElementsByClassName('popup-store__more-btn');
  var popupStoreListWrapper = document.getElementsByClassName('popup-store__list-wrapper');

  var popupStoreBackField = document.getElementsByClassName('popup-store__back-field');
  var popupStoreBackLink = document.getElementsByClassName('popup-store__back-link');

  var lotTitleLand = document.getElementsByClassName('lot__title--land');
  lotTitleLand = Array.prototype.slice.call(lotTitleLand);
  var lotButtonLand = document.getElementsByClassName('lot__button--land');
  lotButtonLand = Array.prototype.slice.call(lotButtonLand);

  var lotTitlePopup = document.getElementsByClassName('lot__title--popup');
  lotTitlePopup = Array.prototype.slice.call(lotTitlePopup);
  var lotButtonPopup = document.getElementsByClassName('lot__button--popup');
  lotButtonPopup = Array.prototype.slice.call(lotButtonPopup);

  var popupStoreItem = document.getElementsByClassName('popup-store__item');
  popupStoreItem = Array.prototype.slice.call(popupStoreItem);

  var popupStoreInputStore = document.getElementById('popup-store-input-store');
  
  function popupStoreShowStep2(i) {
    $(popupStoreItem).removeClass('popup-store__item--mobile');
    $(popupStoreMoreBtn).addClass('popup-store__more-btn--inactive');
    $(popupStoreItem).addClass('disable');
    $(popupStoreItem[i]).removeClass('disable');
    $(popupStore).addClass('popup-store--active');
    $(popupStoreWrapper).addClass('popup-store__wrapper--active');
    $(popupStoreList).addClass('popup-store__list--active');
    $(popupStoreForm).removeClass('popup-store__form--inactive');
    $(popupStoreBackField).removeClass('disable');
    $(popupStoreInputStore).val($(lotButtonPopup[i]).val());
  };

  function popupStoreReset() {
    $(popupStoreItem).removeClass('disable');
    $(popupStore).removeClass('popup-store--active');
    $(popupStoreWrapper).removeClass('popup-store__wrapper--active');
    $(popupStoreList).removeClass('popup-store__list--active');
    $(popupStoreForm).addClass('popup-store__form--inactive');
    $(popupStoreBackField).addClass('disable');
  };

  $(storeCatalogBtn).click(function () {
    var popupStoreTop = window.pageYOffset + 30 + 'px';
    $(popupStore).css('top', popupStoreTop);
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupStore).fadeIn(300);
    }, 300);
  });

  $(popupStoreCloseBtn).click(function () {
    $(popupStore).fadeOut(300);
    setTimeout(function () {
      popupStoreReset();
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(popupStoreBackLink).click(function () {
    popupStoreReset();
  });
  /* */
  /* отрабатываем выбор товара и переход в состояние покупки*/
  lotButtonPopup.forEach(function (element, i) {
    $(element).click(function () {
      popupStoreShowStep2(i);
    });
  });

  lotButtonLand.forEach(function (element, i) {
    $(element).click(function () {
      var popupStoreTop = window.pageYOffset + 30 + 'px';
      $(popupStore).css('top', popupStoreTop);
      $(overlay).fadeIn(300);
      setTimeout(function () {
        $(popupStore).fadeIn(300);
        popupStoreShowStep2(i);
      }, 300);
    });
  });

  lotTitleLand.forEach(function (element, i) {
    $(element).click(function (ev) {
      ev.preventDefault();
      var popupStoreTop = window.pageYOffset + 30 + 'px';
      $(popupStore).css('top', popupStoreTop);
      $(overlay).fadeIn(300);
      setTimeout(function () {
        $(popupStore).fadeIn(300);
        popupStoreShowStep2(i);
      }, 300);
    });
  });

  lotTitlePopup.forEach(function (element, i) {
    $(element).click(function (ev) {
      ev.preventDefault();
      var popupStoreTop = window.pageYOffset + 30 + 'px';
      $(popupStore).css('top', popupStoreTop);
      $(overlay).fadeIn(300);
      setTimeout(function () {
        $(popupStore).fadeIn(300);
        popupStoreShowStep2(i);
      }, 300);
    });
  });

  $(popupStoreMoreBtn).click(function () {
    $(popupStoreItem).removeClass('popup-store__item--mobile');
    $(popupStoreMoreBtn).addClass('popup-store__more-btn--inactive');
  });
  /* */
});