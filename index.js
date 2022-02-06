const userName = document.querySelector('.user-info__user-name');
const popupUserName = document.querySelector('.popup-container__user-name')

function fillPopupUserName() {
    popupUserName.value = userName.textContent;
}

fillPopupUserName();



const userOccupation = document.querySelector('.user-info__user-occupation');
const popupUserOccupation = document.querySelector('.popup-container__user-occupation');

function fillPopupUserOccupation() {
    popupUserOccupation.value = userOccupation.textContent;
}

fillPopupUserOccupation();



const editButton = document.querySelector('.user-info__edit-button');
const popup = document.querySelector('.popup');

function editProfile(evt) {
    evt.preventDefault();
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);




const popupCloseButton = document.querySelector('.popup-container__close-button');

function popupDismissByCloseButton() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupDismissByCloseButton);




const popupForm = document.querySelector('.popup-container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = popupUserName.value;
    userOccupation.textContent = popupUserOccupation.value; 
    popupDismissByCloseButton();   
}

popupForm.addEventListener('submit', formSubmitHandler);