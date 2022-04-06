import {closeImagePopup, openPopup} from './utils.js';
import {imagePopup, imagePopupPicture, imagePopupTitle} from './constants.js';

export class Card {
    constructor (itemObj, templateSelector, handleCardClick) {
      this._name = itemObj.name;
      this._link = itemObj.link;
      this._itemTemplate = document.querySelector(templateSelector).content.querySelector('.item');
      this._handleCardClick = handleCardClick;    
    }

    _getImagePopupData = () => {                
        imagePopupPicture.src = this._link;
        imagePopupPicture.alt = this._name;
        imagePopupTitle.textContent = this._name;        
      };
    

    _showImagePopup = () => {
        openPopup(imagePopup);
        this._getImagePopupData();
    }


    _switchLikeButton = () => {
        this._itemLikeButton.classList.toggle('item__like-button_active');
    }

      
    _deleteItem = () => {
        const deleteCard = this._itemDeleteButton.closest('.item');
        deleteCard.remove();
    }


    _setItemEventListeners = () => {
        this._itemImage.addEventListener('click', this._showImagePopup);
        /*this._itemImage.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });*/
        this._itemLikeButton.addEventListener('click', this._switchLikeButton);
        this._itemDeleteButton.addEventListener('click', this._deleteItem);  
    }


    createItem() {
      this._itemElement = this._itemTemplate.cloneNode(true);
      
      this._itemLikeButton = this._itemElement.querySelector('.item__like-button');
      this._itemDeleteButton = this._itemElement.querySelector('.item__delete-button');

      this._itemImage = this._itemElement.querySelector('.item__image');
      this._itemTitle = this._itemElement.querySelector('.item__title');
       
      this._itemImage.src = this._link;
      this._itemImage.alt = this._name;
      this._itemTitle.textContent = this._name;
              
      this._setItemEventListeners();  
      return this._itemElement;
    }
}