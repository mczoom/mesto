export class FormValidator {
    constructor(config, form) {
      this._config = config;
      this._form = form;
      this._inputsList = this._form.querySelectorAll(this._config.inputSelector);
      this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }

    resetValidation() {
        this._toggleSubmitButtonState();  
        this._inputsList.forEach((inputElement) => {
        this._hideInputError(inputElement);
        });  
    }

    _toggleSubmitButtonState() {
        const hasInvalidInput = Array.from(this._inputsList).some((inputElement) => {
            return !inputElement.validity.valid;
        });
        
        if(hasInvalidInput) {
            this._submitButton.classList.add(this._config.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }


    _getErrorElement(inputElement) {
        return this._form.querySelector(`.${inputElement.id}-error`);
    }

    _showInputError(inputElement, errorMessage)  {
        const errorElement = this._getErrorElement(inputElement);    
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
        inputElement.classList.add(this._config.invalidInput);
    }    
    
    _hideInputError(inputElement) {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
        inputElement.classList.remove(this._config.invalidInput);
    }

    _checkInputValidity(inputElement) {
        const errorMessage = inputElement.validationMessage;
        if(!inputElement.validity.valid) {
            this._showInputError (inputElement, errorMessage); 
        } else {
            this._hideInputError (inputElement);
        }
    }

    _setEventListeners() {   
        this._inputsList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
      
              this._toggleSubmitButtonState();
          });
        });        
    }
    
    enableValidation() {        
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();          
        });
        this._setEventListeners();
    }
}