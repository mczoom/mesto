import './styles/index.css';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';



const validationElements = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  invalidInput: 'popup__input_invalid',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};


import redSea from './images/grid-photos/ocean.jpg';
import ladoga from './images/grid-photos/morning-ocean.jpg';
import pacificOcean from './images/grid-photos/coast.jpg';
import bosphorus from './images/grid-photos/ship.jpg';
import norwegianSea from './images/grid-photos/moonlight-ocean.jpg';
import schooner from './images/grid-photos/boats.jpg';

const initialItems = [
    {
      name: 'Красное море',
      link: redSea
    },
    {
      name: 'Ладожское озеро',
      link: ladoga
    },
    {
      name: 'Тихий океан',
      link: pacificOcean
    },
    {
      name: 'Пролив Босфор',
      link: bosphorus
    },
    {
      name: 'Норвежское море',
      link: norwegianSea
    },
    {
      name: 'Рыболовные шхуны в Англии',
      link: schooner
    }
  ]; 


const cardsContainer = document.querySelector('.elements');
const imagePopup = document.querySelector('.image-popup');
const imagePopupContainer = imagePopup.querySelector('.image-popup__container');
const imagePopupPicture = imagePopupContainer.querySelector('.image-popup__image');
const imagePopupTitle = imagePopupContainer.querySelector('.image-popup__title');

const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');

const userName = document.querySelector('.profile__user-name');
const userOccupation = document.querySelector('.profile__user-occupation');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__edit-button');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();





const popupEditProfileSubmitHandler = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: () => {
    const userInfo = new UserInfo ({
      userNameSelector: userName,
      userInfoSelector: userOccupation
    });
    userInfo.setUserInfo();      
  }  
});

popupEditProfileSubmitHandler.setEventListeners();




const popupAddItemSubmitHandler = new PopupWithForm({
  popupSelector: popupAddItem,
  handleFormSubmit: (cardItem) => {
      const card = new Card(cardItem, '#item', handleCardClick); 
      const cardElement = card.createItem();
      section.addItem(cardElement);
    }  
});

popupAddItemSubmitHandler.setEventListeners();

function openPopupAddItem() {
  popupAddItemSubmitHandler.open();
  popupAddItemFormValidation.resetValidation();
}

popupAddItemAddButton.addEventListener('click', openPopupAddItem);


function openPopupEditProfile() {
  popupEditProfileSubmitHandler.open();
  popupEditProfileFormValidation.resetValidation();
}

profileEditButton.addEventListener('click', openPopupEditProfile);





function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(imagePopup);
  imagePopupTitle.textContent = name;
  imagePopupPicture.src = link;
  imagePopupPicture.alt = name;
  
  popupWithImage.open();
}




const section = new Section ({
  items: initialItems,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '#item', handleCardClick);
    const cardElement = card.createItem();

    section.addItem(cardElement);
  }
}, cardsContainer);

section.renderElements();