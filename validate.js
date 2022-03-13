/*const elementsObject {};


enableValidation(elementsObject);*/

function enableValidation() {

const formsList = document.querySelectorAll('.form');

formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    setEventListeners (formElement);
});
};
enableValidation();





function setEventListeners (formElement) {
  const inputsList = formElement.querySelectorAll('.popup__input');
  const submitButton = formElement.querySelector('.submit-button');
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);

        toggleSubmitButtonState (inputsList, submitButton);
    });
    toggleSubmitButtonState (inputsList, submitButton);
  });
};


function getErrorElement(formElement, inputElement) {
    return formElement.querySelector(`.${inputElement.id}-error`);
};


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = getErrorElement(formElement, inputElement);    
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
    inputElement.classList.add('popup__input_invalid');
};


const hideInputError = (formElement, inputElement) => {
    const errorElement = getErrorElement(formElement, inputElement);
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
    inputElement.classList.remove('popup__input_invalid');
};


function checkInputValidity(formElement, inputElement) {
    const errorMessage = inputElement.validationMessage;
    if(!inputElement.validity.valid) {
        showInputError (formElement, inputElement, errorMessage); 
    } else {
        hideInputError (formElement, inputElement);
    }
};

function toggleSubmitButtonState (inputsList, submitButton) {
    const hasInvalidInput = Array.from(inputsList).some((inputElement) => {
        return !inputElement.validity.valid;
    });
    
    if(hasInvalidInput) {
        submitButton.classList.add('submit-button_disabled');
        submitButton.setAttribute('disabled', true);
    } else {
        submitButton.classList.remove('submit-button_disabled');
        submitButton.removeAttribute('disabled');
    };
};