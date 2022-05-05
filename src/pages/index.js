import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';


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
const userNameInput = popupEditProfileForm.querySelector('.popup__input_type_name'); 
const userOccupationInput = popupEditProfileForm.querySelector('.popup__input_type_occupation');
const profileEditButton = document.querySelector('.profile__edit-button');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40/',
  headers: {
    authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
    'Content-Type': 'application/json'
  }
});


    



const confirmPopup = new PopupWithConfirmation ('.popup-confirm');




let userId;
  console.log(userId);


  api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userId = res._id;
  })



function createCard(item) {
  const card = new Card(item, '#item', handleCardClick, userId);
  const cardElement = card.createItem();    
  return cardElement;
}


const userInfo = new UserInfo ({
  userNameSelector: '.profile__user-name',
  userInfoSelector: '.profile__user-occupation'
});

  




const userInfoEdit = new PopupWithForm({
  popupSelector: '.popup-edit-profile',
  handleFormSubmit: (userData) => {  
    api.setUserInfo({name: userData.username, about: userData.useroccupation})
      .then((res) =>{
        userInfo.setUserInfo(res);
      })    
  }
});

userInfoEdit.setEventListeners();


function openPopupEditProfile() {
    
  //userNameInput.value = userInfoInputsData.name;    !!!!!!!!!!!
  //userOccupationInput.value = userInfoInputsData.about;   !!!!!!!!!!
    
  popupEditProfileFormValidation.resetValidation();
  userInfoEdit.open();
}

profileEditButton.addEventListener('click', openPopupEditProfile);



const section = new Section ({
  items: [], 
  renderer: (cardItem) => {
    section.addItem(createCard(cardItem));    
  } 
}, '.elements');





const newCardRenderer = new PopupWithForm({
  popupSelector: '.popup-add-item',
  handleFormSubmit: (cardItem) => {
    api.addNewCard({name: cardItem.name, link: cardItem.link})
      .then (data => {
        section.addItem(createCard(data));
      })
    }  
});



newCardRenderer.setEventListeners();

function openPopupAddItem() {  
  popupAddItemFormValidation.resetValidation();
  newCardRenderer.open();
}

popupAddItemAddButton.addEventListener('click', openPopupAddItem);




const popupWithImage = new PopupWithImage('.image-popup');

function handleCardClick(name, link) {  
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
}






api.getInitialCards()
  .then((items) => {
    const section = new Section ({items, 
      renderer: (cardItem) => {
        section.addItem(createCard(cardItem));
      } 
  }, '.elements');
  section.renderElements();
});

  

fetch('https://mesto.nomoreparties.co/v1/cohort-40/cards', {
  headers: {
    authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
    
  }); 


  fetch('https://mesto.nomoreparties.co/v1/cohort-40/users/me', {
    headers: {
      authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      
    }); 




  