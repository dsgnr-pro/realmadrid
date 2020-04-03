(function () {
  var dialogsBlock = document.querySelector('.comments__dialogs-wrap');
  var dialogsPreview = document.querySelectorAll('.comments__dialog');
  var dialogsBody = document.querySelectorAll('.comments__dialog-body');
  var dialogBackButtons = document.querySelectorAll('.comments__back');

  var onDialogPreviewGetDialog = function (evt) {
    dialogsBlock.classList.add('visually-hidden');
    var index = Array.from(dialogsPreview).indexOf(evt.currentTarget);
    dialogsBody[index].classList.remove('visually-hidden');
  };

  dialogsPreview.forEach(function (e) {
    e.addEventListener('click', onDialogPreviewGetDialog);
  });

  var onBackButtonGetDialogs = function () {
    dialogsBlock.classList.remove('visually-hidden');
    dialogsBody.forEach(function (e) {
      e.classList.add('visually-hidden');
    });
  };

  dialogBackButtons.forEach(function (e) {
    e.addEventListener('click', onBackButtonGetDialogs);
  });
})();
