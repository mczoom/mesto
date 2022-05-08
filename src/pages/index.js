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


const popupEditAvatarForm = document.querySelector('.popup-edit-avatar__form');
const editAvatarButton = document.querySelector('.profile__avatar-edit-button');
const avatarImage = document.querySelector('.profile__avatar');

const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const userNameInput = popupEditProfileForm.querySelector('.popup__input_type_name'); 
const userOccupationInput = popupEditProfileForm.querySelector('.popup__input_type_occupation');
const profileEditButton = document.querySelector('.profile__edit-button');

const userName = document.querySelector('.profile__user-name');
const userOccupation = document.querySelector('.profile__user-occupation');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();

const popupEditAvatarFormValidation = new FormValidator(validationElements, popupEditAvatarForm);
popupEditAvatarFormValidation.enableValidation();

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40/',
  headers: {
    authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
    'Content-Type': 'application/json'
  }
});

let userId;


api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userId = res._id;
    avatarImage.src = res.avatar;
  })
  .catch(err => console.log(err));


const popupConfirmDelete = new PopupWithConfirmation ('.popup-confirm');

popupConfirmDelete.setEventListeners();



const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup-edit-avatar',
  handleFormSubmit: (picUrl) => {
    popupEditAvatar.renderLoading(true);
    api.setNewAvatar (picUrl)
      .then((res) => {
        avatarImage.src = res.avatar;        
        popupEditAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupEditAvatar.renderLoading(false))
  }
});

popupEditAvatar.setEventListeners();


editAvatarButton.addEventListener('click', () => {
  popupEditAvatarFormValidation.resetValidation();
  popupEditAvatar.renderLoading(false);
  popupEditAvatar.open();
})



function createCard (item) {
  const card = new Card (item, '#item', handleCardClick, userId, {
  handleCardDelete: () => {
    popupConfirmDelete.open();
    popupConfirmDelete.setSubmitHandler(() => {
      api.deleteCard(item._id)
        .then(() => {
          card.deleteItem();
          popupConfirmDelete.close();
        })
        .catch(err => console.log(err))
    })
  },
  handleCardLike: () => {       
    if(!card.isCardLiked()) {
      api.likeCard(item._id)
      .then((res) => {  
        card.setLikeButton(res.likes);       
      })
      .catch(err => console.log(err))             
      } else {
        api.removeLikeCard(item._id)
          .then((res) => {
            card.setLikeButton(res.likes);
        })
        .catch(err => console.log(err))
      }      
    }  
});
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
    userInfoEdit.renderLoading(true);
    api.setUserInfo({name: userData.username, about: userData.useroccupation})
      .then((res) =>{
        userInfo.setUserInfo(res);
      })
      .catch(err => console.log(err))
      .finally(() => userInfoEdit.renderLoading(false))
  }
});

userInfoEdit.setEventListeners();

function openPopupEditProfile() {
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;

  userInfoEdit.renderLoading(false);
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
    newCardRenderer.renderLoading(true);
    api.addNewCard({name: cardItem.name, link: cardItem.link})
      .then (data => {
        section.addItem(createCard(data));
      })
      .catch(err => console.log(err))
      .finally(() => newCardRenderer.renderLoading(false))
    }  
});

newCardRenderer.setEventListeners();

function openPopupAddItem() {
  newCardRenderer.renderLoading(false);
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
})
.catch(err => console.log(err));