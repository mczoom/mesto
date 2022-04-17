export class Popup {
    constructor (popupSelector) {
        this._popup = popupSelector;
    }


    open = () => {    
        
        this._popup.classList.add('popup_opened');
        //setСlosePopupByEscListener();
     
    }


    close() {
        this._popup.classList.remove('popup_opened');
        //removeСlosePopupByEscListener();
    }


    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
          }    
    }


    setEventListeners() {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => {
            popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                this.close();
                }
              if (evt.target.classList.contains('popup__close-button')) {
                this.close();
                }
              });
          })
    }
    
}
