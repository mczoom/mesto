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

//Добавить на страницу 6 карточек по умолчанию
const itemTemplate = document.querySelector('#item').content;
const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
const elements = document.querySelector('.elements');


//Удалить карточку
function deleteItem(event) {
  const deleteCard = event.target.closest('.item');
  deleteCard.remove();
};

//Лайкнуть/анлайкнуть карточку
function switchLikeButton(event) {
  event.target.classList.toggle('item__like-button_active');
};

//Отобразить попап с увеличенной картинкой
function showImagePopup(event) {
  event.target.nextElementSibling.classList.add('popup_opened');
};

//Закрыть попап добавленной карточки
function closeImagePopup(event) {
  event.target.closest('.image-popup').classList.remove('popup_opened');  
};

//Навесить обработчики
function setEventListeners(item) {
  item.querySelector('.item__image').addEventListener('click', showImagePopup);
  item.querySelector('.item__like-button').addEventListener('click', switchLikeButton);
  item.querySelector('.item__delete-button').addEventListener('click', deleteItem);
  item.querySelector('.image-popup__close-button').addEventListener('click', closeImagePopup);
};

//Создать карточку
function renderItem(card) {
  const itemTemplate = document.querySelector('#item').content;
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
  
  elementsItem.querySelector('.item__image').src = card.link;
  elementsItem.querySelector('.item__title').textContent = card.name;
  elementsItem.querySelector('.image-popup__image').src = card.link;
  elementsItem.querySelector('.image-popup__title').textContent = card.name;
    
  setEventListeners(elementsItem);  

  elements.append(elementsItem);
};


//Создать несколько карточек из массива
function renderItems (items) {
  items.forEach(renderItem);  
};

renderItems(initialItems);




//Отобразить попап добавления новой карточки
const addButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');

function showNewItemPopup() {    
    popupAddItem.classList.add('popup_opened');
}

addButton.addEventListener('click', showNewItemPopup);



//Закрыть попап добавления новой карточки
const addItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');

function closeNewItemPopup() {
  
  popupAddItem.classList.remove('popup_opened');
};

addItemCloseButton.addEventListener('click', closeNewItemPopup);






//Создать новую карточку
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__container');
const newItemTitle = popupAddItem.querySelector('.popup-add-item__input_type_place');
const newItemImage = popupAddItem.querySelector('.popup-add-item__input_type_link');

function renderNewItem() {
  const itemTemplate = document.querySelector('#item').content;
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
  
  elementsItem.querySelector('.item__image').src = newItemImage.value;
  elementsItem.querySelector('.item__title').textContent = newItemTitle.value;
  elementsItem.querySelector('.image-popup__image').src = newItemImage.value;
  elementsItem.querySelector('.image-popup__title').textContent = newItemTitle.value;
    
  setEventListeners(elementsItem);

  elements.prepend(elementsItem);
};




//Добавить новую карточку
function addNewItem(evt) {
  evt.preventDefault();

  renderNewItem();
  closeNewItemPopup();
};

popupAddItemForm.addEventListener('submit', addNewItem);








//ПР4

const userName = document.querySelector('.profile__user-name');
const popupUserName = document.querySelector('.popup__input_type_name')

function fillPopupUserName() {
    popupUserName.value = userName.textContent;
};

const userOccupation = document.querySelector('.profile__user-occupation');
const popupUserOccupation = document.querySelector('.popup__input_type_occupation');

function fillPopupUserOccupation() {
    popupUserOccupation.value = userOccupation.textContent;
}

//Отобразить попап редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup-edit-profile');

function editProfile() {    
    fillPopupUserName();
    fillPopupUserOccupation();
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);




const popupCloseButton = document.querySelector('.popup__close-button');

function closeProfilePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closeProfilePopup);


//Редактировать профиль
const popupForm = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = popupUserName.value;
    userOccupation.textContent = popupUserOccupation.value; 
    closeProfilePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);