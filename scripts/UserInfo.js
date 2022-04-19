export class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {        
        this._userName = userNameSelector;
        this._userOccupation = userInfoSelector;
        this._form = document.querySelector('.popup__form');


        //this._inputName = this._form.querySelector('.popup__input_type_name');
        //this._inputOccupation = this._form.querySelector('.popup__input_type_occupation');

    }


    getUserInfo() {     
        this._userInfo = {};
        this._userInfo.name = this._userName.textContent;
        this._userInfo.occupation = this._userOccupation.textContent;

        return this._userInfo;
    }


    setUserInfo() {
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._userInfo = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
          
        return this._userInfo;
    }
}