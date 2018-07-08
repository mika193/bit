$(document).ready(function () {
    window.jQuery || document.write('<script src="js/libs/jquery-3.2.1.min.js"><\/script>');
});

var navToggle = document.querySelector(".main-nav__toggle");
var navClose = document.querySelector(".main-nav__close");
var navMain = document.querySelector(".main-nav");
var formSubmit = document.querySelectorAll(".form__submit");
var orderPopup = document.querySelector(".order-call__link");
var formCall = document.querySelector(".form--call");

//открытие закрытие мобильного меню
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.blur();
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.blur();
  }
});

//открытие закрытие попапов на формах
for(var i = 0; i < formSubmit.length; i++) {
  formSubmit[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    var popup = this.parentElement.querySelector(".form__popup");
    console.log(this.parentElement);
    popup.classList.add("form__popup--show");
    var closeButton = popup.querySelector(".form__popup-close");
    closeButton.addEventListener('click', function() {
      popup.classList.remove("form__popup--show");
    });
  });
}

//открытие закрытие попапа на кнопке "заказать звонок"
orderPopup.addEventListener('click', function() {
  formCall.classList.add("form--show");
  var closeButton = formCall.querySelector(".form__popup-close");
  closeButton.addEventListener('click', function() {
    formCall.classList.remove("form--show");
  });
});
