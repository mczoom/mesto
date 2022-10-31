import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import {validationElements, popupEditAvatarForm, editAvatarButton, popupAddItemAddButton, 
        popupAddItemForm, popupEditProfileForm, userNameInput, userOccupationInput, profileEditButton, userName, userOccupation
       } from '../utils/constants.js';


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

const userInfo = new UserInfo ({
  userNameSelector: '.profile__user-name',
  userInfoSelector: '.profile__user-occupation',
  userAvatarSelector: '.profile__avatar',
});

const popupConfirmDelete = new PopupWithConfirmation ('.popup-confirm');
popupConfirmDelete.setEventListeners();


const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup-edit-avatar',
  handleFormSubmit: (picUrl) => {
    popupEditAvatar.renderLoading(true);
    api.setNewAvatar (picUrl)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupEditAvatar.renderLoading(false))
  }
});

popupEditAvatar.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  popupEditAvatarFormValidation.resetValidation();
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


const userInfoEdit = new PopupWithForm({
  popupSelector: '.popup-edit-profile',
  handleFormSubmit: (userData) => {
    userInfoEdit.renderLoading(true);
    api.setUserInfo({name: userData.username, about: userData.useroccupation, avatar: userData.avatar})
      .then((res) =>{
        userInfo.setUserInfo(res);
        userInfoEdit.close();
      })
      .catch(err => console.log(err))
      .finally(() => userInfoEdit.renderLoading(false))
  }
});

userInfoEdit.setEventListeners();

function openPopupEditProfile() {
  userNameInput.value = userName.textContent;
  userOccupationInput.value = userOccupation.textContent;

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
        section.addItem(createCard(data))
        newCardRenderer.close();
      })
      .catch(err => console.log(err))
      .finally(() => newCardRenderer.renderLoading(false))
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
}

popupWithImage.setEventListeners();


api.getMainData()
  .then(([userData, items]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    section.renderElements(items);
  })
  .catch(err => console.log(err));