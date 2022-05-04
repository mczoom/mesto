export class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {        
        this._userName = document.querySelector(userNameSelector);
        this._userOccupation = document.querySelector(userInfoSelector);
    }


    getUserInfo() {     
        this._userInfo = {};
        
        this._userInfo.username = this._userName.textContent;
        this._userInfo.useroccupation = this._userOccupation.textContent; 

        return this._userInfo; 
    }


    setUserInfo(user) {        
        this._userName.textContent = user.name;
        this._userOccupation.textContent = user.about;
    }
}