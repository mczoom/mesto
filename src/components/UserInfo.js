export class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {        
        this._userName = document.querySelector(userNameSelector);
        this._userOccupation = document.querySelector(userInfoSelector);
    }




    getUserInfo() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-40/users/me', {
        headers: {
            authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
        }
    })
      .then(res => res.json())
      .then((result) => {
        this._userName.textContent = result.name;
        this._userOccupation.textContent = result.about;
      });
    }

   
    
    setUserInfo({user}) {        
        this._userName.textContent = user.username;
        this._userOccupation.textContent = user.useroccupation;
    }
} 