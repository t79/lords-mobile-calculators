import { ScoreOutputPanel } from "./score-output-panel.js";



export class SelectedGear {

    _id;
    _imgElm;
    _gear = null;
    _previousImgElm;

    get Gear() {
        return this._gear;
    }

    constructor(id) {
        this._id = id;
        this.Setup();
    }

    Setup() {
        this._imgElm = document.getElementById("selected-" + this._id);
        this._previousImgElm = {
            gear1: {
                gear: null,
                imgElm: document.getElementById("selected-previous-" + this._id + "-1")
            },
            gear2: {
                gear: null,
                imgElm: document.getElementById("selected-previous-" + this._id + "-2") 
            },
            gear3: {
                gear: null,
                imgElm: document.getElementById("selected-previous-" + this._id + "-3")
            },
            gear4: {
                gear: null,
                imgElm: document.getElementById("selected-previous-" + this._id + "-4")
            }
        };
    }

    SetGear(inst) {
        this.MovePreviousGear(inst);
        this._imgElm.src = inst.CurrentIcon;
        this._gear = inst;

    }

    MovePreviousGear(newGear) {
        if(this._gear == null || this._gear == undefined || newGear == this._gear) {
            return;
        }

        this._gear.IsSelected = false;

        if (this._previousImgElm.gear3.gear != null && this._previousImgElm.gear3.gear != newGear) {
            this._previousImgElm.gear4.imgElm.src = this._previousImgElm.gear3.gear.CurrentIcon;
            this._previousImgElm.gear4.gear = this._previousImgElm.gear3.gear;
            this._previousImgElm.gear4.imgElm.style.opacity = 1;
        }
        if (this._previousImgElm.gear2.gear != null && this._previousImgElm.gear2.gear != newGear) {
            this._previousImgElm.gear3.imgElm.src = this._previousImgElm.gear2.gear.CurrentIcon;
            this._previousImgElm.gear3.gear = this._previousImgElm.gear2.gear;
            this._previousImgElm.gear3.imgElm.style.opacity = 1;
        }
        if (this._previousImgElm.gear1.gear != null && this._previousImgElm.gear1.gear != newGear) {
            this._previousImgElm.gear2.imgElm.src = this._previousImgElm.gear1.gear.CurrentIcon;
            this._previousImgElm.gear2.gear = this._previousImgElm.gear1.gear;
            this._previousImgElm.gear2.imgElm.style.opacity = 1;
        }
        this._previousImgElm.gear1.imgElm.src = this._gear.CurrentIcon;
        this._previousImgElm.gear1.gear = this._gear;
        this._previousImgElm.gear1.imgElm.style.opacity = 1;
    }


}