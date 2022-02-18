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



const addButton = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup-add-place');

function addNewItem(evt) {
    evt.preventDefault();
    popupAddPlace.classList.add('popup-add-place_opened');
}

addButton.addEventListener('click', addNewItem);











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
    closeProfilePopup();   
}

popupForm.addEventListener('submit', formSubmitHandler);