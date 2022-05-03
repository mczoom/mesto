export class Section {
    constructor ({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
        //this._api = api;
    }


    renderElements() {
        this._items.forEach(item => {
            this._renderer(item);
        });      
    }


    /*saveItem(data) {
        this._api.addNewCard({
            name: data.name,
            link: data.link
        })
            .then((res) => this.addItem(res.link));
    }*/


    addItem(element) {
        this._containerSelector.prepend(element);
    }
}