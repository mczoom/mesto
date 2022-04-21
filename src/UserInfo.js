export class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {        
        this._userName = userNameSelector;
        this._userOccupation = userInfoSelector;
        
        this._inputName = document.querySelector('.popup__input_type_name');
        this._inputOccupation = document.querySelector('.popup__input_type_occupation');
    }


    getUserInfo() {     
        this._userInfo = {};
        this._userInfo.name = this._userName.textContent;
        this._userInfo.occupation = this._userOccupation.textContent;

        return this._userInfo;
    }


    setUserInfo(name, info) {        
        this._userName.textContent = this._inputName.value;
        this._userOccupation.textContent = this._inputOccupation.value
    }
}