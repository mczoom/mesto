import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
                
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.submit-button');

        this._handleFormSubmit = handleFormSubmit;
    }
    
    
    _getInputValues() {        
        this._inputList = this._form.querySelectorAll('.popup__input');
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
          });
          
        return formValues;
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


    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._submitButton.textContent;
        }
      }
}