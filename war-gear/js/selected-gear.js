


export class SelectedGear {

    _id;
    _imgElm;

    constructor(id) {
        this._id = id;
        this.Setup();
    }

    Setup() {
        this._imgElm = document.getElementById("selected-" + this._id);
    }

    SetGear(inst) {
        this._imgElm.src = inst.CurrentIcon;
    }
}