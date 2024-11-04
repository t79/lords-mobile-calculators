import { BaseClass } from "./base-class.js";
import { ScoreOutputPanel } from "./score-output-panel.js";



export class SelectedGear extends BaseClass {

    _id;
    _imgElm;
    _gear = null;
    _earlierGear = [];
    _hasInfoPanel = false;

    get Gear() {
        return this._gear;
    }

    get GetEarlierGear() {
        return this._earlierGear;
    }

    get IsSelectedGearElm() {
        return true;
    }

    get LowerCenterPoint() {
        const rect = this._imgElm.getBoundingClientRect();
        return { 
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height
        }
    }

    constructor(id) {
        super();
        this._id = id;
        this.Setup();
    }

    Setup() {
        this._imgElm = document.getElementById("selected-" + this._id);
        this._imgElm.addEventListener("click", this.IconClicked.bind(this));
    }

    IconClicked() {
        if (this._hasInfoPanel) {
            this.DispatchEvent("deactivate-info-panel", this);
            this._hasInfoPanel = false;
        }
        else {
            this.DispatchEvent("activate-info-panel", this);
            this._hasInfoPanel = true;
        }
    }

    SetGear(inst) {
        if (this._gear != null && this._gear != inst) {
            this._earlierGear.push(this._gear);
            this._gear.IsSelected = false;
        }
        this._imgElm.src = inst.CurrentIcon;
        this._gear = inst;

    }

    LostInfoPanel() {
        this._hasInfoPanel = false;
    }   

    




}