/*const elementsObject {};


enableValidation(elementsObject);*/

const formsList = document.querySelectorAll('.form');

formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    setEventListeners (formElement);
});






function setEventListeners (formElement) {
  const inputsList = formElement.querySelectorAll('.popup__input');
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
        console.log(evt.target.name, evt.target.value);
    })
});
};

function isValid(inputElement) {
    if(inputElement.validity.valid) {
        
    }
}