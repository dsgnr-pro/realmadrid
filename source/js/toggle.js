// Toggle

(function () {
  var toggleComments = document.querySelector('.toggle__element--comments');
  var toggleMessages = document.querySelector('.toggle__element--messages');
  var toggleWatch = document.querySelector('.toggle__element--watch');

  var profileComments = document.querySelector('.profile__comments');
  var profileMessages = document.querySelector('.profile__messages');
  var profileWatch = document.querySelector('.profile__watch');

  var toggleClassesChange = function (evt) {
    var toggleActive = document.querySelector('.toggle__element--active');
    console.log(toggleActive);
    toggleActive.classList.remove('toggle__element--active');
    evt.target.classList.add('toggle__element--active');
  };

  var onToggleMessageClick = function (evt) {
    toggleClassesChange(evt);
    profileComments.classList.add('visually-hidden');
    profileMessages.classList.remove('visually-hidden');
    profileWatch.classList.add('visually-hidden');
  };

  var onToggleCommentsClick = function (evt) {
    toggleClassesChange(evt);
    profileComments.classList.remove('visually-hidden');
    profileMessages.classList.add('visually-hidden');
    profileWatch.classList.add('visually-hidden');
  };

  var onToggleWatchsClick = function (evt) {
    toggleClassesChange(evt);
    profileComments.classList.add('visually-hidden');
    profileMessages.classList.add('visually-hidden');
    profileWatch.classList.remove('visually-hidden');
    //Calendar-Dialog
    var watchCancelBtns = document.querySelectorAll('.calendar__discuss');

    var onWatchCancelBtnClick = function (evt) {
      evt.preventDefault();

      var watchItem = evt.target.closest('.calendar__item');

      var dialogWindow = evt.target.closest('.calendar__item').querySelector('.calendar__dialog');
      dialogWindow.classList.remove('calendar__dialog--hidden');

      var dialogCloseBtn = evt.target.closest('.calendar__item').querySelector('.calendar__dialog-btn--close');

      var dialogCancelBtn = evt.target.closest('.calendar__item').querySelector('.calendar__dialog-btn--cancel');

      var onDialogCloseBtnClick = function (evt) {
        evt.preventDefault();
        dialogWindow.classList.add('calendar__dialog--hidden');
      };

      var onDialogCancelBtnClick = function (evt) {
        evt.preventDefault();
        watchItem.remove();
      };

      dialogCloseBtn.addEventListener('click', onDialogCloseBtnClick);
      dialogCancelBtn.addEventListener('click', onDialogCancelBtnClick);
    };

    watchCancelBtns.forEach(function (el) {
      el.addEventListener('click', onWatchCancelBtnClick);
    });

  };

  toggleComments.addEventListener('click', onToggleCommentsClick);
  toggleMessages.addEventListener('click', onToggleMessageClick);
  toggleWatch.addEventListener('click', onToggleWatchsClick);
})();
