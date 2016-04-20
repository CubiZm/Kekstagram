'use strict';
define(function() {
  return function formIsValid() {
    var isValid = true;
  // проверяем не пустые ли поля
    if (resizeFormX.value.length === 0 || resizeFormY.value.length === 0 || resizeFormSide.value.length === 0) {
      isValid = false;
      return isValid;
    }
    for (var i = 0; i < resizeForm.elements.length; i++) {
      isValid = resizeForm.elements[i].validity.valid;
      if (!isValid) {
        break;
      }
    }
    if (isValid) {
      resizeBtn.removeAttribute('disabled');
      return true;
    } else {
      resizeBtn.setAttribute('disabled', '');
    }
    return formIsValid();
  }
  formIsValid();
});
