export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._userName = document.querySelector('.profile__user-name');
        this._userOccupation = document.querySelector('.profile__user-occupation');
    }

    getInitialCards() {
        return fetch (`${this._baseUrl}cards`, {
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
        });
    }
     
        


    getUserInfo() {
        return fetch (`${this._baseUrl}users/me`, {
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















}