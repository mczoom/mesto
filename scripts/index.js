import {FormValidator} from './val.js'

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
const imagePopupPicture = imagePopup.querySelector('.image-popup__image');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');
const imagePopupCloseButton = document.querySelector('.image-popup__close-button')

const popupAddItemAddButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const popupAddItemContainer = popupAddItem.querySelector('.popup-add-item__container');
const popupAddItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');
const popupAddItemTitle = popupAddItemForm.querySelector('.popup__input_type_place');
const popupAddItemImage = popupAddItemForm.querySelector('.popup__input_type_link');
const popupAddItemInputs = popupAddItemForm.querySelectorAll('.popup__input');
const popupAddItemSubmitButton = popupAddItemForm.querySelector('.submit-button');

const userName = document.querySelector('.profile__user-name');
const userOccupation = document.querySelector('.profile__user-occupation');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__container');
const popupEditProfileUsernameInput = popupEditProfile.querySelector('.popup__input_type_name');
const popupEditProfileUserOccupationInput = popupEditProfile.querySelector('.popup__input_type_occupation');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEditProfileCloseButton = document.querySelector('.popup__close-button');

const popupAddItemFormValidation = new FormValidator(validationElements, popupAddItem);
popupAddItemFormValidation.enableValidation();



//Удалить карточку
function deleteItem(event) {
  const deleteCard = event.target.closest('.item');
  deleteCard.remove();
};


//Лайкнуть/анлайкнуть карточку
function switchLikeButton(event) {
  event.target.classList.toggle('item__like-button_active');
};


//Навесить обработчики
function setCardEventListeners(item) {
  item.querySelector('.item__image').addEventListener('click', showImagePopup);
  item.querySelector('.item__like-button').addEventListener('click', switchLikeButton);
  item.querySelector('.item__delete-button').addEventListener('click', deleteItem);  
};


//Создать карточку
function createItem(image, title) {
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);  
  const itemImage = elementsItem.querySelector('.item__image');
  const itemTitle = elementsItem.querySelector('.item__title');
 
  itemImage.src = image;
  itemImage.alt = title;
  itemTitle.textContent = title;
        
  setCardEventListeners(elementsItem);  
  return elementsItem;
};


//Добавить карточки из массива
function renderItems (array) {
  array.forEach((item) => {
    cardsContainer.append(createItem(item.link, item.name));
  });  
};

renderItems(initialItems);


function getImagePopupData() {
  const card = event.target.closest('.item');
  const cardPicture = card.querySelector('.item__image');
  const cardTitle = card.querySelector('.item__title');
  
  imagePopupPicture.src = cardPicture.src;
  imagePopupPicture.alt = cardTitle.textContent;
  imagePopupTitle.textContent = cardTitle.textContent;
};


//Отобразить попап с увеличенной картинкой
function showImagePopup() {
  openPopup(imagePopup);
  getImagePopupData();
  imagePopup.addEventListener('click', closeImagePopup);  
};



//Отобразить попап
function openPopup(popup) {    
  popup.classList.add('popup_opened');
  setСlosePopupByEscListener();
};


function openAddItemPopup() {
  openPopup(popupAddItem);  
};

popupAddItemAddButton.addEventListener('click', openAddItemPopup);



//Закрыть попап и снять слушатель Esc
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeСlosePopupByEscListener();
};


function closeImagePopup() {
  closePopup(imagePopup);  
};

imagePopupCloseButton.addEventListener('click', closeImagePopup);



//Закрыть попап по нажатию на Esc
const closePopupByEsc = (evt) => {
  
  if(evt.key === 'Escape') {
    const popupIsOpened = document.querySelector('.popup_opened');
    closePopup(popupIsOpened);
  };
  
};


function setСlosePopupByEscListener() {
  document.addEventListener('keydown', closePopupByEsc);
  };

function removeСlosePopupByEscListener() {
  document.removeEventListener('keydown', closePopupByEsc);
  };



function resetPopupFormInputs(form) {
  form.reset();
};


//Добавить новую карточку на страницу
function addNewItem(evt) {
  evt.preventDefault();
      
  cardsContainer.prepend(createItem(popupAddItemImage.value, popupAddItemTitle.value));
  
  resetPopupFormInputs(popupAddItemForm);
  toggleSubmitButtonState (popupAddItemInputs, popupAddItemSubmitButton);

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





