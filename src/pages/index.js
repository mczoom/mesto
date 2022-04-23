import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';



const validationElements = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  invalidInput: 'popup__input_invalid',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};


import redSea from '../images/grid-photos/ocean.jpg';
import ladoga from '../images/grid-photos/morning-ocean.jpg';
import pacificOcean from '../images/grid-photos/coast.jpg';
import bosphorus from '../images/grid-photos/ship.jpg';
import norwegianSea from '../images/grid-photos/moonlight-ocean.jpg';
import schooner from '../images/grid-photos/boats.jpg';

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


const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__edit-button');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();


function createCard(item) {
  const card = new Card(item, '#item', handleCardClick);
  const cardElement = card.createItem();    
  return cardElement;
}


const userInfo = new UserInfo ({
  userNameSelector: '.profile__user-name',
  userInfoSelector: '.profile__user-occupation'
});


const userInfoEdit = new PopupWithForm({
  popupSelector: '.popup-edit-profile',
  handleFormSubmit: (user) => {    
    userInfo.setUserInfo({user});
  }
});

userInfoEdit.setEventListeners();


function openPopupEditProfile() {
  userInfo.getUserInfo()  
  userInfoEdit.open();  
  popupEditProfileFormValidation.resetValidation();
}

profileEditButton.addEventListener('click', openPopupEditProfile);




const newCardRenderer = new PopupWithForm({
  popupSelector: '.popup-add-item',
  handleFormSubmit: (cardItem) => {
    createCard(cardItem);
    section.addItem(createCard(cardItem));
    }  
});

newCardRenderer.setEventListeners();

function openPopupAddItem() {
  newCardRenderer.open();
  popupAddItemFormValidation.resetValidation();
}

popupAddItemAddButton.addEventListener('click', openPopupAddItem);





const popupWithImage = new PopupWithImage('.image-popup');


function handleCardClick(name, link) {  
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
}



const section = new Section ({
  items: initialItems,
  renderer: (cardItem) => {
    createCard(cardItem);
    cardsContainer.append(createCard(cardItem));
  }
}, '.elements');


section.renderElements();
