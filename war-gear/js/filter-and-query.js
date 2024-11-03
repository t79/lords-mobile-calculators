


export class FilterAndQuery {

    _headerElm;
    _headerCaret;
    _bodyElm;
    _isOpen = false;

    constructor() {
        this.Setup();
    }

    Setup() {
        this._headerElm = document.getElementById("filter-query-header");
        this._headerElm.addEventListener("click", () => this.OpenAndClose().bind(this));
        this._headerCaret = document.getElementById("filter-query-caret");
        this._bodyElm = document.getElementById("filter-query-body");
    }

    OpenAndClose() {
        console.log("OpenAndClose");
        if (this._isOpen) {
            this._headerCaret.src = "layout/square-caret-right-solid.svg"
            this._bodyElm.style.display = "none";
            this._isOpen = false;
        } else {
            this._headerCaret.src = "layout/square-caret-down-solid.svg"
            this._bodyElm.style.display = "flex";
            this._isOpen = true;
        }
    }
}