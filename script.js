let userName = document.querySelector('.user-info__user-name');
let popupUserName = document.querySelector('.container__user-name')

function fillPopupUserName() {
    popupUserName.value = userName.textContent;
}

fillPopupUserName();



let userOccupation = document.querySelector('.user-info__user-occupation');
let popupUserOccupation = document.querySelector('.container__user-occupation');

function fillPopupUserOccupation() {
    popupUserOccupation.value = userOccupation.textContent;
}

fillPopupUserOccupation();



let editButton = document.querySelector('.user-info__edit-button');
let popup = document.querySelector('.popup');

function editProfile(evt) {
    evt.preventDefault();
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);




let popupCloseButton = document.querySelector('.container__close-button');

function popupCloseByButton(evt) {
    evt.preventDefault();
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupCloseByButton);




