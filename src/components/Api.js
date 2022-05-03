export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._form = document.querySelector('.popup__form');
        this._userName = document.querySelector('.profile__user-name');
        this._userOccupation = document.querySelector('.profile__user-occupation');
        this._userNameInput = this._form.querySelector('.popup__input_type_name');
        this._userOccupationInput = this._form.querySelector('.popup__input_type_occupation');

        this._popupAddItemInputName = document.querySelector('.popup__input_type_place');
        this._popupAddItemInputLink = document.querySelector('.popup__input_type_link');        
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
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
    
    
    addNewCard(card) {
        return fetch (`${this._baseUrl}cards`, {
            method: 'POST',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
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


    setUserInfo() {
        return fetch (`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${this._userNameInput.value}`,
                about: `${this._userOccupationInput.value}`
              })
        })
          .then((result) => {
            this._userName.textContent = result.name;
            this._userOccupation.textContent = result.about;
          })
    }













}