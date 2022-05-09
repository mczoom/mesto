export const validationElements = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    invalidInput: 'popup__input_invalid',
    submitButtonSelector: '.submit-button',
    inactiveButtonClass: 'submit-button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
  };
  
  
  export const popupEditAvatarForm = document.querySelector('.popup-edit-avatar__form');
  export const editAvatarButton = document.querySelector('.profile__avatar-edit-button');
  export const avatarImage = document.querySelector('.profile__avatar');
  
  export const popupAddItemAddButton = document.querySelector('.profile__add-button');
  export const popupAddItem = document.querySelector('.popup-add-item');
  export const popupAddItemForm = popupAddItem.querySelector('.popup-add-item__form');
  
  export const popupEditProfile = document.querySelector('.popup-edit-profile');
  export const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
  export const userNameInput = popupEditProfileForm.querySelector('.popup__input_type_name'); 
  export const userOccupationInput = popupEditProfileForm.querySelector('.popup__input_type_occupation');
  export const profileEditButton = document.querySelector('.profile__edit-button');
  
  export const userName = document.querySelector('.profile__user-name');
  export const userOccupation = document.querySelector('.profile__user-occupation');