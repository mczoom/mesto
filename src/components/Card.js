export class Card {
    constructor (itemObj, templateSelector, handleCardClick, userID, {handleCardDelete, handleCardLike}) {
      this._name = itemObj.name;
      this._link = itemObj.link;
      this._cardId = itemObj._id;
      this._likes = itemObj.likes;
      this._ownerId = itemObj.owner._id;
      this._userId = userID;      

      this._handleCardClick = handleCardClick;
      this._handleCardDelete = handleCardDelete;
      this._handleCardLike = handleCardLike;
      
      this._itemTemplate = document.querySelector(templateSelector).content.querySelector('.item');      
      this._deletePopup = document.querySelector('.popup-confirm');
    }

   
    setLikeButton = (likes) => {
      this._likesCounter.textContent = likes.length;
        if(!this.isCardLiked()) {
          this.setLikeButtonActive();
        } else {
          this.setLikeButtonInactive();
        }
      }

    setLikeButtonActive = () => {
      this._itemLikeButton.classList.add('item__like-button_active');
    }

    setLikeButtonInactive = () => {
      this._itemLikeButton.classList.remove('item__like-button_active');
    }


    isCardLiked = () => {
      const cardIsLiked = this._itemLikeButton.classList.contains('item__like-button_active')
        return cardIsLiked;
      }    

        
    deleteItem = () => {
        this._itemElement.remove();
    }
    

    _setItemEventListeners = () => {
        this._itemImage.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });

        this._itemLikeButton.addEventListener('click', () => {
          this._handleCardLike();          
        });        


        this._itemDeleteButton.addEventListener('click', () => {
          this._handleCardDelete();
        });
    } 


    createItem = () => {
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

      this._likesCounter.textContent = this._likes.length;

      if(this._likes.map(item => item._id).includes(this._userId)) {
        this._itemLikeButton.classList.add('item__like-button_active');
      }   
              
      this._setItemEventListeners();  
      return this._itemElement;
    }
}