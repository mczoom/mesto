export const imagePopup = document.querySelector('.image-popup');
export const imagePopupPicture = imagePopup.querySelector('.image-popup__image');
export const imagePopupTitle = imagePopup.querySelector('.image-popup__title');



export const closeImagePopup = () => {
    closePopup(imagePopup);  
  };


export const removeСlosePopupByEscListener = () => {
    document.removeEventListener('keydown', closePopupByEsc);
};


export const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    removeСlosePopupByEscListener();
};


export const closePopupByEsc = (evt) => {
  
    if(evt.key === 'Escape') {
      const popupIsOpened = document.querySelector('.popup_opened');
      closePopup(popupIsOpened);
    }    
};


export const setСlosePopupByEscListener = () => {
  document.addEventListener('keydown', closePopupByEsc);
};


export const openPopup = (popup) => {    
    popup.classList.add('popup_opened');
    setСlosePopupByEscListener();
};


export function getImagePopupData() {
    const card = event.target.closest('.item');
    const cardPicture = card.querySelector('.item__image');
    const cardTitle = card.querySelector('.item__title');
    
    imagePopupPicture.src = cardPicture.src;
    imagePopupPicture.alt = cardTitle.textContent;
    imagePopupTitle.textContent = cardTitle.textContent;
  };


export function resetPopupFormInputs(form) {
    form.reset();
  };