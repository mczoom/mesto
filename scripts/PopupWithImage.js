import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._itemTemplate = document.querySelector('#item').content.querySelector('.item');
        this._itemElement = this._itemTemplate.cloneNode(true);
        this._itemImage = this._itemElement.querySelector('.item__image');
        this._imagePopupPicture = document.querySelector('.image-popup__image');
        this._imagePopupTitle = document.querySelector('.image-popup__title');
    }


    open() {
        
        this._imagePopupTitle.textContent = this._name;
        this._imagePopupPicture.src = this._itemImage;
        this._imagePopupTitle.alt = this._name;
        

       
        super.open();
    }
}