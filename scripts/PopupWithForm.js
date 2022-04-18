import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._form = document.querySelector('.form');
        this._handleFormSubmit = handleFormSubmit;
    }
    
    
    _getInputValues() {
        this._inputList = document.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    }


    setEventListeners() {
        super._setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        
            this._handleFormSubmit(this._getInputValues());
            
          });
    }


    close() {
        super.close();
        this._form.reset();
    }
}