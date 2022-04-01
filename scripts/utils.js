class Utils {
    constructor() {

  }


removeСlosePopupByEscListener() {
    document.removeEventListener('keydown', closePopupByEsc);
}

closePopup(popup) {
    popup.classList.remove('popup_opened');
    removeСlosePopupByEscListener();
}

closePopupByEsc = (evt) => {
  
    if(evt.key === 'Escape') {
      const popupIsOpened = document.querySelector('.popup_opened');
      closePopup(popupIsOpened);
    }    
}

setСlosePopupByEscListener() {
  document.addEventListener('keydown', closePopupByEsc);
}

openPopup(popup) {    
    popup.classList.add('popup_opened');
    setСlosePopupByEscListener();
  }
}