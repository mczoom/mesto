const initialItems = [
    {
      name: 'Черное море',
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
      name: 'Черное море',
      link: './images/grid-photos/ship.jpg'
    },
    {
      name: 'Море Лаптевых',
      link: './images/grid-photos/moonlight-ocean.jpg'
    },
    {
      name: 'Рыболовные шхуны в Астрахани',
      link: './images/grid-photos/boats.jpg'
    }
  ]; 

//Добавить на страницу 6 карточек по умолчанию
const elements = document.querySelector('.elements');

function addingInitialItems() {
    initialItems.forEach(function(card) {
        const itemTemplate = document.querySelector('#item').content;
        const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
        elementsItem.querySelector('.item__image').src = card.link;
        elementsItem.querySelector('.item__title').textContent = card.name;
        elements.append(elementsItem);
    });    
}
addingInitialItems();



//Отобразить попап добавления новой карточки
const addButton = document.querySelector('.profile__add-button');
const popupAddItem = document.querySelector('.popup-add-item');

function showNewItemPopup(evt) {
    evt.preventDefault();
    popupAddItem.classList.add('popup-add-item_opened');
}

addButton.addEventListener('click', showNewItemPopup);



//Закрыть попап добавления новой карточки
const addItemCloseButton = popupAddItem.querySelector('.popup-add-item__close-button');

function closeNewItemPopup(evt) {
  evt.preventDefault();
  popupAddItem.classList.remove('popup-add-item_opened');
};

addItemCloseButton.addEventListener('click', closeNewItemPopup);




//Добавить новую карточку и автоматически закрыть попап
const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__container');
const newItemTitle = popupAddItem.querySelector('.popup-add-item__input_type_place');
const newItemImage = popupAddItem.querySelector('.popup-add-item__input_type_link');



function addNewItem(evt) {
  evt.preventDefault();
  const itemTemplate = document.querySelector('#item').content;
  const elementsItem = itemTemplate.querySelector('.item').cloneNode(true);
  elementsItem.querySelector('.item__image').src = newItemImage.value;
  elementsItem.querySelector('.item__title').textContent = newItemTitle.value;
  elements.prepend(elementsItem);
  closeNewItemPopup(evt);
};

popupAddItemForm.addEventListener('submit', addNewItem);



//Добавить возможность лайкать карточки
/*const likeButton = document.querySelector('.item__like-button');

likeButton.addEventListener('click', function(evt) {
  evt.target.classList.toggle('item__like-button_active');
});*/


 













const userName = document.querySelector('.profile__user-name');
const popupUserName = document.querySelector('.popup__input_type_name')


function fillPopupUserName() {
    popupUserName.value = userName.textContent;
}



const userOccupation = document.querySelector('.profile__user-occupation');
const popupUserOccupation = document.querySelector('.popup__input_type_occupation');

function fillPopupUserOccupation() {
    popupUserOccupation.value = userOccupation.textContent;
}



const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

function editProfile(evt) {
    evt.preventDefault();
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



const popupForm = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = popupUserName.value;
    userOccupation.textContent = popupUserOccupation.value; 
    closeProfilePopup(evt);
}

popupForm.addEventListener('submit', formSubmitHandler);

