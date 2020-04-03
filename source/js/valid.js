(function () {
  var registrationSubmit = document.querySelector('#registration-submit');

  var validatePasswordOnSubmit = function () {
    var passwordInput = document.querySelector('#password');

    if (passwordInput.value.length < 8) {
      passwordInput.setCustomValidity('Пароль должен содержать минимум 8 символов');
    } else {
      passwordInput.style.boxShadow = '';
      passwordInput.setCustomValidity('');
    }
    return passwordInput.reportValidity();
  };

  registrationSubmit.addEventListener('click', validatePasswordOnSubmit);
})();
