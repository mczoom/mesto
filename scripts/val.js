class FormValidator {
    constructor(config, form) {
      this._config = validationElements;
      this._form = form;  
    }

    _getErrorElement(inputElement) {
        return this._form.querySelector(`.${inputElement.id}-error`);
    };

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = getErrorElement(inputElement);    
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
        inputElement.classList.add('popup__input_invalid');
    };
    
    
    _hideInputError = (inputElement) => {
        const errorElement = getErrorElement(inputElement);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
        inputElement.classList.remove('popup__input_invalid');
    };

    _checkInputValidity(inputElement) {
        const errorMessage = inputElement.validationMessage;
        if(!inputElement.validity.valid) {
            showInputError (inputElement, errorMessage); 
        } else {
            hideInputError (inputElement);
        }
    };

    _setEventListeners() {   
        const inputsList = this._form.querySelectorAll(this._config.inputSelector);
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);
        inputsList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              this._checkInputValidity(formElement, inputElement);
      
              toggleSubmitButtonState (inputsList, submitButton);
          });
          toggleSubmitButtonState (inputsList, submitButton);
        });
      }
    
    enableValidation() {        
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();        
            
            this._setEventListeners ();    
        });
        }


    
}





const validationElements = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.submit-button',
    inactiveButtonClass: 'submit-button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
  };