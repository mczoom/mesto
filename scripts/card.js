class Card {
    constructor (itemObj, templateSelector) {
      this._name = itemObj.name;
      this._link = itemObj.link;
      this._itemTemplate = document.querySelector(templateSelector).content.querySelector('.item');
      

      
      this._itemLikeButton = this._itemTemplate.querySelector('.item__like-button');
      this._itemDeleteButton = this._itemTemplate.querySelector('.item__delete-button');
      
    }

    _showImagePopup() {
        openPopup(imagePopup);
        getImagePopupData();
        imagePopup.addEventListener('click', closeImagePopup);  
      }

    _switchLikeButton = () => {
        this._itemLikeButton.classList.toggle('item__like-button_active');
      }
      
    _deleteItem = () => {
        const deleteCard = this._itemDeleteButton.closest('.item');
        deleteCard.remove();
    }


    _setItemEventListeners() {
        this._itemImage.addEventListener('click', showImagePopup);
        this._itemLikeButton.addEventListener('click', this._switchLikeButton);
        this._itemDeleteButton.addEventListener('click', this._deleteItem);  
    }


    createItem() {
      const itemElement = this._itemTemplate.cloneNode(true);  
      this._itemImage = itemElement.querySelector('.item__image');
      this._itemTitle = itemElement.querySelector('.item__title');
       
      this._itemImage.src = this._link;
      this._itemImage.alt = this._name;
      this._itemTitle.textContent = this._name;
              
      this._setItemEventListeners();  
      return this._itemTemplate;
    }



    


}