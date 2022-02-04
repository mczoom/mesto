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




let likeButton = document.querySelectorAll('.element-info__like-button');

function useLikeButton() {
    likeButton.classList.toggle('element-info__like-button_active');
}

console.log(likeButton.classList);
likeButton.addEventListener('click', useLikeButton);
