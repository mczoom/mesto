import {Card} from './Card.js';
import {Section} from './Section.js';
import {Popup} from './Popup.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {FormValidator} from './FormValidator.js';
//import {closePopup, openPopup, resetPopupFormInputs} from './utils.js';
import {imagePopup} from './constants.js';


const validationElements = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  invalidInput: 'popup__input_invalid',
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


const cardsContainer = document.querySelector('.elements');
const imagePopupContainer = imagePopup.querySelector('.image-popup__container');
const imagePopupPicture = imagePopupContainer.querySelector('.image-popup__image');
const imagePopupTitle = imagePopupContainer.querySelector('.image-popup__title');

const popups = document.querySelectorAll('.popup')

const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
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

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItemForm);
popupAddItemFormValidation.enableValidation();

const popupEditProfileFormValidation = new FormValidator(validationElements, popupEditProfileForm);
popupEditProfileFormValidation.enableValidation();







const popupAddItem2 = new PopupWithForm({
  popupSelector: popupAddItem,
  handleFormSubmit: (cardItem) => {
      const card = new Card(cardItem, '#item', handleCardClick); 
      const cardElement = card.createItem();
      section.addItem(cardElement);
      
  }  
});

popupAddItem2.setEventListeners();





const image = new PopupWithImage(imagePopup);


function handleCardClick(name, link) {

 imagePopupTitle.textContent = name;
 imagePopupPicture.src = link;
 imagePopupPicture.alt = name;
 
  image.open();
}





/*function setListenersForClosePopupByOverlayAndByCloseButton() {
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
        }
      if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
      });
  });
}
setListenersForClosePopupByOverlayAndByCloseButton();
*/

const section = new Section ({
  items: initialItems,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '#item', handleCardClick);
    const cardElement = card.createItem();

    section.addItem(cardElement);
  }

}, cardsContainer);

section.renderElements();


/*
//Сформировать карточку
function createCard(item) {
  const card = new Card(item, '#item', handleCardClick);
  const cardElement = card.createItem();    
  return cardElement;
}



//Добавить карточки из массива
function renderItems (array) {
  array.forEach((item) => {
    const itemElement = createCard(item);
    cardsContainer.append(itemElement);    
  });  
};

renderItems(initialItems);
*/


//Добавить новую карточку на страницу
/*function addNewItem(evt) {
  evt.preventDefault();
  const item = {};
  item.name = popupAddItemTitle.value;
  item.link = popupAddItemImage.value;
    
  cardsContainer.prepend(createCard(item));
  
  resetPopupFormInputs(popupAddItemForm);
  
  closeAddItemPopup();  
};*/





/*function openAddItemPopup() {
  resetPopupFormInputs(popupAddItemForm);
  openPopup(popupAddItem);
  popupAddItemFormValidation.resetValidation();  
};*/


popupAddItemAddButton.addEventListener('click', popupAddItem2.open);



/*function closeAddItemPopup() {  
  closePopup(popupAddItem);
};*/




//editProfile

function fillProfilePopupInputs() {
    popupEditProfileUsernameInput.value = userName.textContent;
    popupEditProfileUserOccupationInput.value = userOccupation.textContent;
};


//Отобразить попап редактирования профиля
function editProfile() {    
  fillProfilePopupInputs();
  openPopup(popupEditProfile);
  popupEditProfileFormValidation.resetValidation();
};

profileEditButton.addEventListener('click', editProfile);



//Редактировать профиль
function submitProfileEditForm (evt) {
    evt.preventDefault();
    userName.textContent = popupEditProfileUsernameInput.value;
    userOccupation.textContent = popupEditProfileUserOccupationInput.value;
    closePopup(popupEditProfile);
  };

popupEditProfileForm.addEventListener('submit', submitProfileEditForm);
