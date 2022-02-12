const userName = document.querySelector('.profile__user-name');
const popupUserName = document.querySelector('.popup__input_type_name')

function fillPopupUserName() {
    popupUserName.value = userName.textContent;
}




const userOccupation = document.querySelector('.user-info__user-occupation');
const popupUserOccupation = document.querySelector('.popup__input_type_occupation');

function fillPopupUserOccupation() {
    popupUserOccupation.value = userOccupation.textContent;
}




const editButton = document.querySelector('.user-info__edit-button');
const popup = document.querySelector('.popup');

function editProfile(evt) {
    evt.preventDefault();
    fillPopupUserName();
    fillPopupUserOccupation();
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);




const popupCloseButton = document.querySelector('.popup__close-button');

function closeProfilePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closeProfilePopup);




const popupForm = document.querySelector('.popup__popup-container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = popupUserName.value;
    userOccupation.textContent = popupUserOccupation.value; 
    closeProfilePopup();   
}

popupForm.addEventListener('submit', formSubmitHandler);