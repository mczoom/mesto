class FormValidator {
    constructor(settings, form) {
      this.settings = validationElements;
      this.form = form;  
    }

    _setEventListeners (formElement, {inputSelector, submitButtonSelector, ...rest}) {
   
        const inputsList = formElement.querySelectorAll(inputSelector);
        const submitButton = formElement.querySelector(submitButtonSelector);
        inputsList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              checkInputValidity(formElement, inputElement);
      
              toggleSubmitButtonState (inputsList, submitButton);
          });
          toggleSubmitButtonState (inputsList, submitButton);
        });
      };
}