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
const likeButton = elementsItem.querySelector('.item__like-button');
const imagePopup = elementsItem.querySelector('.image-popup');
const itemImage = elementsItem.querySelector('.item__image');
const imagePopupCloseButton = elementsItem.querySelector('.image-popup__close-button');

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

function setEventListeners(item) {
  item.querySelector('.item__image').addEventListener('click', showImagePopup);
  item.querySelector('.item__like-button').addEventListener('click', switchLikeButton);
  item.querySelector('.item__delete-button').addEventListener('click', deleteItem);
  item.querySelector('.image-popup__close-button').addEventListener('click', closeImagePopup);
};


function renderItem (card) {
  const itemTemplate = document.querySelector('#item').content;
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
  
  elementsItem.querySelector('.item__image').src = card.link;
  elementsItem.querySelector('.item__title').textContent = card.name;
  elementsItem.querySelector('.image-popup__image').src = card.link;
  elementsItem.querySelector('.image-popup__title').textContent = card.name;

    
  setEventListeners(elementsItem);
  

  elements.append(elementsItem);
};



function renderItems (items) {
  items.forEach(renderItem);
  
};





renderItems(initialItems);











/*function renderInitialItems(items) {
    items.forEach(function(card) {        
        const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
        const deleteButton = elementsItem.querySelector('.item__delete-button');
        const likeButton = elementsItem.querySelector('.item__like-button');
        const imagePopup = elementsItem.querySelector('.image-popup');
        const itemImage = elementsItem.querySelector('.item__image');
        const imagePopupCloseButton = elementsItem.querySelector('.image-popup__close-button');
        
        elementsItem.querySelector('.item__image').src = card.link;
        elementsItem.querySelector('.item__title').textContent = card.name;
        elementsItem.querySelector('.image-popup__image').src = card.link;
        elementsItem.querySelector('.image-popup__title').textContent = card.name;

        
        function showImagePopup() {
          imagePopup.classList.add('popup_opened');
        };
               
        function closeImagePopup() {          
          imagePopup.classList.remove('popup_opened');
        };

        itemImage.addEventListener('click', showImagePopup);
        likeButton.addEventListener('click', switchLikeButton);
        deleteButton.addEventListener('click', deleteItem);
        imagePopupCloseButton.addEventListener('click', closeImagePopup);
        elements.append(elementsItem);
    });    
};
renderInitialItems(initialItems);*/



//Отобразить попап добавления новой карточки
const addButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');

function showNewItemPopup() {    
    popupAddItem.classList.add('popup_opened');
}

addButton.addEventListener('click', showNewItemPopup);



//Закрыть попап добавления новой карточки
const addItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');

function closeNewItemPopup(evt) {
  evt.preventDefault();
  popupAddItem.classList.remove('popup_opened');
};

addItemCloseButton.addEventListener('click', closeNewItemPopup);









//Добавить новую карточку
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__container');
const newItemTitle = popupAddItem.querySelector('.popup-add-item__input_type_place');
const newItemImage = popupAddItem.querySelector('.popup-add-item__input_type_link');


function addNewItem(evt) {
  evt.preventDefault();  
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
  const deleteButton = elementsItem.querySelector('.item__delete-button');
  const likeButton = elementsItem.querySelector('.item__like-button');
  elementsItem.querySelector('.item__image').src = newItemImage.value;
  elementsItem.querySelector('.item__title').textContent = newItemTitle.value;
  const imagePopup = elementsItem.querySelector('.image-popup');
  const itemImage = elementsItem.querySelector('.item__image');
  elementsItem.querySelector('.image-popup__image').src = newItemImage.value;
  elementsItem.querySelector('.image-popup__title').textContent = newItemTitle.value;
  const imagePopupCloseButton = elementsItem.querySelector('.image-popup__close-button');

  function showImagePopup() {
    imagePopup.classList.add('popup_opened');
  };  
  
  function closeImagePopup() {    
    imagePopup.classList.remove('popup_opened');
  };
  
  imagePopupCloseButton.addEventListener('click', closeImagePopup);
  itemImage.addEventListener('click', showImagePopup);
  likeButton.addEventListener('click', switchLikeButton);
  deleteButton.addEventListener('click', deleteItem);
  elements.prepend(elementsItem);
  
  closeNewItemPopup(evt);
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