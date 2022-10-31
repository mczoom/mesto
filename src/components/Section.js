export class Section {
    constructor ({items, renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);        
    }


    renderElements(items) {
        items.reverse().forEach(item => {
            this._renderer(item);
        });      
    }

    addItem(element) {
        this._containerSelector.prepend(element);
    }
}