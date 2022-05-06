import {Popup} from './Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        
        
        this._form = this._popup.querySelector('.form');

    }

    setEventListeners = () => {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
            
            
          });
    }

    setSubmitHandler = (action) => {
        this._handleSubmit = action;
    }


}