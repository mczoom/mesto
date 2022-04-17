import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._itemImage = document.querySelector('.item__image').src;
        this._itemText = 'ppp';
    }


    open() {
        this._imagePopupPicture = document.querySelector('.image-popup__image');
        this._imagePopupTitle = document.querySelector('.image-popup__title');
        //this._imagePopupPicture.src = this._itemImage;
        this._imagePopupTitle.textContent = this._itemText.textContent;
        super.open();
    }
}