export class UserInfo {
    constructor({userNameSelector, userInfoSelector, userAvatarSelector}) {        
        this._userName = document.querySelector(userNameSelector);
        this._userOccupation = document.querySelector(userInfoSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }


    getUserInfo() {     
        this._userInfo = {};
        
        this._userInfo.username = this._userName.textContent;
        this._userInfo.useroccupation = this._userOccupation.textContent; 
        this._userInfo.avatar = this._userAvatar.src;
        

        return this._userInfo; 
    }


    setUserInfo = (user) => {        
        this._userName.textContent = user.name;
        this._userOccupation.textContent = user.about;
        this._userAvatar.src = user.avatar;
    }
}
