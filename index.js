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
const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
const elements = document.querySelector('.elements');
const imagePopup = document.querySelector('.image-popup');
const imagePopupPicture = imagePopup.querySelector('.image-popup__image');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');

const addButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');
const addItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');

const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__container');
const newItemTitle = popupAddItemForm.querySelector('.popup__input_type_place');
const newItemImage = popupAddItemForm.querySelector('.popup__input_type_link');

const userName = document.querySelector('.profile__user-name');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__container');

const popupUserName = popupEditProfile.querySelector('.popup__input_type_name')
const userOccupation = document.querySelector('.profile__user-occupation');
const popupUserOccupation = popupEditProfile.querySelector('.popup__input_type_occupation');
const editButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');



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
function setEventListeners(item) {
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
        
  setEventListeners(elementsItem);  
  return elementsItem;
};



//Добавить карточки из массива
function renderItems (array) {
  array.forEach((item) => {
    elements.append(createItem(item.link, item.name));
  });  
};

renderItems(initialItems);



//Отобразить попап с увеличенной картинкой
function showImagePopup(event) {
  openPopup(imagePopup)
  imagePopupPicture.src = event.target.src;
  imagePopupPicture.alt = event.target.nextElementSibling.textContent;
  imagePopupTitle.textContent = event.target.nextElementSibling.textContent;
};


//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

document.querySelector('.image-popup__close-button').addEventListener('click', closePopup(imagePopup));
addItemCloseButton.addEventListener('click', closePopup(popupAddItem));


//Отобразить попап
function openPopup(popup) {    
    popup.classList.add('popup_opened');
}

addButton.addEventListener('click', openPopup(popupAddItem));



function clearPopupInput(image, title) {
  image.value = '';
  title.value = '';
};



//Добавить новую карточку на страницу
function addNewItem(evt) {
  evt.preventDefault();
    
  elements.prepend(createItem(newItemImage.value, newItemTitle.value));
  clearPopupInput(newItemImage, newItemTitle);
  closePopup(popupAddItem);
};

popupAddItemForm.addEventListener('submit', addNewItem);




//ПР4

function fillProfilePopupInput() {
    popupUserName.value = userName.textContent;
    popupUserOccupation.value = userOccupation.textContent;
};


//Отобразить попап редактирования профиля
function editProfile() {    
  fillProfilePopupInput()
  openPopup(popupEditProfile)    
};

editButton.addEventListener('click', editProfile);




popupCloseButton.addEventListener('click', closePopup(popupEditProfile));


//Редактировать профиль
function SubmitProfileEditFormHandler (evt) {
    evt.preventDefault();
    userName.textContent = popupUserName.value;
    userOccupation.textContent = popupUserOccupation.value; 
    closePopup(popupEditProfile);
};

popupEditProfileForm.addEventListener('submit', SubmitProfileEditFormHandler);