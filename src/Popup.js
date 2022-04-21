export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }


    open() {        
        this._popup.classList.add('popup_opened');        
             
        document.addEventListener('keydown', this._handleEscClose);
    }


    close() {
        this._popup.classList.remove('popup_opened');
        
        document.removeEventListener('keydown', this._handleEscClose);
    }


    _handleEscClose = (evt) => {
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
