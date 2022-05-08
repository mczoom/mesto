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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });        
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
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


 
    deleteCard(id) {
        return fetch (`${this._baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }



    likeCard(id) {
        return fetch (`${this._baseUrl}cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


    removeLikeCard(id) {
        return fetch (`${this._baseUrl}cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: 'eaf754aa-42d0-42bf-81d5-b64b44519c5f',
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
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
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });        
    }
}