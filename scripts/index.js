import {Card} from './card.js';
import {closeImagePopup, closePopup, openPopup, resetPopupFormInputs} from './utils.js';
import {FormValidator} from './formValidator.js'

const validationElements = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};

const initialItems = [
    {
      name: 'Красное море',
      link: './images/grid-photos/ocean.jpg'
    },
    {
      name: 'Ладожское озеро',
      link: './images/grid-photos/morning-ocean.jpg'
    },
    {
      name: 'Тихий океан',
      link: './images/grid-photos/coast.jpg'
    },
    {
      name: 'Пролив Босфор',
      link: './images/grid-photos/ship.jpg'
    },
    {
      name: 'Норвежское море',
      link: './images/grid-photos/moonlight-ocean.jpg'
    },
    {
      name: 'Рыболовные шхуны в Англии',
      link: './images/grid-photos/boats.jpg'
    }
  ]; 


const itemTemplate = document.querySelector('#item').content;

const cardsContainer = document.querySelector('.elements');
const imagePopup = document.querySelector('.image-popup');
const imagePopupContainer = imagePopup.querySelector('.image-popup__container');
const imagePopupCloseButton = document.querySelector('.image-popup__close-button')

const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const popupAddItemContainer = popupAddItem.querySelector('.popup-add-item__container');
const popupAddItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');
const popupAddItemTitle = popupAddItemForm.querySelector('.popup__input_type_place');
const popupAddItemImage = popupAddItemForm.querySelector('.popup__input_type_link');

const userName = document.querySelector('.profile__user-name');
const userOccupation = document.querySelector('.profile__user-occupation');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const popupEditProfileUsernameInput = popupEditProfile.querySelector('.popup__input_type_name');
const popupEditProfileUserOccupationInput = popupEditProfile.querySelector('.popup__input_type_occupation');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEditProfileCloseButton = document.querySelector('.popup__close-button');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();



//Добавить карточки из массива
function renderItems (array) {
  array.forEach((item) => {
    const card = new Card(item, '#item');
    const itemElement = card.createItem();
    cardsContainer.append(itemElement);
  });  
};

renderItems(initialItems);


function openAddItemPopup() {
  openPopup(popupAddItem);
  popupAddItemFormValidation.toggleSubmitButtonState();
};

popupAddItemAddButton.addEventListener('click', openAddItemPopup);

imagePopupCloseButton.addEventListener('click', closeImagePopup);



//Добавить новую карточку на страницу
function addNewItem(evt) {
  evt.preventDefault();
  item.name = popupAddItemTitle.value;
  item.link = popupAddItemImage.value;
  const card = new Card(item, '#item');  
  
  cardsContainer.prepend(card.createItem());
  
  resetPopupFormInputs(popupAddItemForm);
  
  closeAddItemPopup();  
};

popupAddItemForm.addEventListener('submit', addNewItem);




function closeAddItemPopup() {  
  closePopup(popupAddItem);
};

popupAddItemCloseButton.addEventListener('click', closeAddItemPopup);


//Закрывать попап по нажатию на оверлэй
function closePopupByOverlayClick(popupOverlay, popupContent) {
  popupOverlay.addEventListener('click', function () {
    closePopup(popupOverlay);
  });
  popupContent.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });
};

function setPopupsEventListenersForOverlayClose() {
  closePopupByOverlayClick(popupEditProfile, popupEditProfileForm);
  closePopupByOverlayClick(popupAddItem, popupAddItemContainer);
  closePopupByOverlayClick(imagePopup, imagePopupContainer);
}
setPopupsEventListenersForOverlayClose();



//ПР4

function fillProfilePopupInputs() {
    popupEditProfileUsernameInput.value = userName.textContent;
    popupEditProfileUserOccupationInput.value = userOccupation.textContent;
};


//Отобразить попап редактирования профиля
function editProfile() {    
  fillProfilePopupInputs();
  openPopup(popupEditProfile);
};

profileEditButton.addEventListener('click', editProfile);

popupEditProfileCloseButton.addEventListener('click', closePopup(popupEditProfile));


//Редактировать профиль
function SubmitProfileEditForm (evt) {
    evt.preventDefault();
    userName.textContent = popupEditProfileUsernameInput.value;
    userOccupation.textContent = popupEditProfileUserOccupationInput.value;
    closePopup(popupEditProfile);
  };

popupEditProfileForm.addEventListener('submit', SubmitProfileEditForm);





