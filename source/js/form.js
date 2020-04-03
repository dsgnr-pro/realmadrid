(function () {
  var avatarInput = document.querySelector('#avatar');
  avatarInput.removeAttribute('name');

  var checkInputHandler = function () {
    avatarInput.removeAttribute('name');
    avatarInput.setAttribute('name', 'photo');
  };

  avatarInput.addEventListener('change', checkInputHandler);
})();
