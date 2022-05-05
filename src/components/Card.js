export class Card {
    constructor (itemObj, templateSelector, handleCardClick, userID) {
      this._name = itemObj.name;
      this._link = itemObj.link;
      this._likesAmount = itemObj.likes;
      this._itemTemplate = document.querySelector(templateSelector).content.querySelector('.item');
      this._handleCardClick = handleCardClick;

      this._ownerId = itemObj.owner._id;
      this._userId = userID;
            
      this._deletePopup = document.querySelector('.popup-confirm');
    }

   
    _switchLikeButton = () => {
        this._itemLikeButton.classList.toggle('item__like-button_active');
    }

     
    openDeleteConfirmationPopup = () => {
      this._deletePopup.classList.add('popup_opened');
    }


    _deleteItem = () => {
        this._itemElement.remove();
    }


    _setItemEventListeners = () => {
        this._itemImage.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });
        this._itemLikeButton.addEventListener('click', this._switchLikeButton);
        this._itemDeleteButton.addEventListener('click', this.openDeleteConfirmationPopup);
        //this._itemDeleteButton.addEventListener('click', this._deleteItem);  
    }


    createItem() {
      this._itemElement = this._itemTemplate.cloneNode(true);
      
      this._itemLikeButton = this._itemElement.querySelector('.item__like-button');
      this._itemDeleteButton = this._itemElement.querySelector('.item__delete-button');

      if(this._ownerId === this._userId) {
        this._itemDeleteButton.classList.add('item__delete-button_active');
      }

      this._itemImage = this._itemElement.querySelector('.item__image');
      this._itemTitle = this._itemElement.querySelector('.item__title');
      this._likesCounter = this._itemElement.querySelector('.item__like-counter');
       
      this._itemImage.src = this._link;
      this._itemImage.alt = this._name;
      this._itemTitle.textContent = this._name;

      this._likesCounter.textContent = this._likesAmount.length;
              
      this._setItemEventListeners();  
      return this._itemElement;
    }
}