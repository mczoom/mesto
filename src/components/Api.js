export class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;       
    }
    

    getInitialCards() {
        return fetch (`${this._baseUrl}cards`, {
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
            }
        })
        .then(this._checkResponse);
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
        .then(this._checkResponse);
    }


    getUserInfo() {
        return fetch (`${this._baseUrl}users/me`, {
          headers: {
              authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f'
          }
      })
      .then(this._checkResponse);
    }


    setUserInfo(userData) {
        return fetch (`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(this._checkResponse);
    }


 
    deleteCard(id) {
        return fetch (`${this._baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse);
    }



    likeCard(id) {
        return fetch (`${this._baseUrl}cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse);
    }


    removeLikeCard(id) {
        return fetch (`${this._baseUrl}cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(this._checkResponse);
    }


    setNewAvatar(pic) {
        return fetch (`${this._baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pic)
        })
        .then(this._checkResponse);        
    }


    _checkResponse(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
    }


    getMainData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()])
    }
}