export class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {        
        this._userName = document.querySelector(userNameSelector);
        this._userOccupation = document.querySelector(userInfoSelector);
        
        this._inputName = document.querySelector('.popup__input_type_name');
        this._inputOccupation = document.querySelector('.popup__input_type_occupation');
    }


    getUserInfo() {     
        this._userInfo = {};
        
        this._userInfo.username = this._userName.textContent;
        this._userInfo.useroccupation = this._userOccupation.textContent; 

        this._inputName.value = this._userInfo.username;
        this._inputOccupation.value = this._userInfo.useroccupation;

        return this._userInfo; 
    }


    setUserInfo({user}) {        
        this._userName.textContent = user.username;
        this._userOccupation.textContent = user.useroccupation;
    }
}