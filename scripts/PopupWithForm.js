import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._popup = popupSelector;
        this._form = popupSelector.querySelector('.form');
        this._handleFormSubmit = handleFormSubmit;
    }
    
    
    _getInputValues() {
        
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
          
        return this._formValues;
    }


    setEventListeners = () => {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        
            this._handleFormSubmit(this._getInputValues());
            this.close();
          });
    }


    close() {
        super.close();
        this._form.reset();
    }
}