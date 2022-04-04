import {imagePopup} from './constants.js';

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


export function resetPopupFormInputs(form) {
    form.reset();
  };