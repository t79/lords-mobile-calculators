import { BaseClass } from "./base-class.js";


export class Gear extends BaseClass {

    _id;
    _gearType;
    _elm;
    _iconElm;
    _infoPanelElm;
    _hasGear;
    _isSelected = false;
    _boostValues;

    _currentType = 0;

    get Id() {
        return this._id;
    }  
    
    get GearType() {
        return this._gearType;
    }

    get CurrentIcon() {
        return this._iconElm.getAttribute(this._attributes[this._types[this._currentType]]);
    }

    get CurrentSelectedIcon() {
        return this._iconElm.getAttribute(this._attributes[this._types[this._currentType]] + "-selected");
    }

    get CurrentBoostValues() {
        console.log(this._boostValues);
        console.log(this._types[this._currentType].toLowerCase());
        console.log(this._boostValues[this._types[this._currentType].toLowerCase()]);
        return this._boostValues[this._types[this._currentType].toLowerCase()];
    }

    set IsSelected(value) {
        this._isSelected = value;
        if (value) {
            this._iconElm.src = this.CurrentSelectedIcon;
        }
        else {
            this._iconElm.src = this.CurrentIcon;
        }
    }

    get IsSelectedGearElm() {
        return false;
    }

    constructor(id, gearType) {
        super();
        this._id = id + this._gearIdTail[this._gearTypes[gearType]];
        this._gearType = gearType;
        this.Setup();
    }

    Setup() {
        this._elm = document.getElementById(this._id);
        if (this._elm.getAttribute("data-empty") === "true") {
            this._hasGear = false;
            return;
        }
        else {
            this._hasGear = true;
        }
        this._iconElm = this._elm.getElementsByClassName("gear-icon-frame")[0];
        this._iconElm.addEventListener('click', () => this.IconClicked());
        this._infoPanelElm = this._elm.getElementsByClassName("info-panel-container")[0];
        this._boostValues = JSON.parse(this._infoPanelElm.getAttribute("data-boost"));
    }

    IconClicked() {
        if (this._isSelected) {
            this._currentType = (this._currentType + 1) % 6;
        }
        this._iconElm.src = this.CurrentSelectedIcon;
        this._isSelected = true;
        this.DispatchEvent("gear-changed");
    }

    _attributes = {
        "COMMON": "data-common",
        "UNCOMMON": "data-uncommon",
        "RARE": "data-rare",
        "EPIC": "data-epic",
        "LEGENDARY": "data-legendary",
        "MYTHIC": "data-mythic"
    }

    _gearIdTail = {
        "HELMET": "-helmet",
        "ARMOR": "-armor",
        "LEGS": "-legs",
        "MAIN_HAND": "-main-hand",
        "OFF_HAND": "-off-hand",
        "ACCESSORY_1": "-accessory",
        "ACCESSORY_2": "-accessory",
        "ACCESSORY_3": "-accessory"
    }
}