import { BaseClass } from "./base-class.js";


export class Gear extends BaseClass {

    _id;
    _gearType;
    _elm;
    _iconElm;
    _isSelected = false;

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

    _currentType = 0;

    constructor(id, gearType) {
        super();
        this._id = id + this._gearIdTail[this._gearTypes[gearType]];
        this._gearType = gearType;
        this.Setup();
    }

    Setup() {
        this._elm = document.getElementById(this._id);
        this._iconElm = this._elm.getElementsByClassName("gear-icon-frame")[0];
        this._iconElm.addEventListener('click', () => this.IconClicked().bind(this));
    }

    IconClicked() {
        if (this._isSelected) {
            this._currentType = (this._currentType + 1) % 6;
        }
        this._iconElm.src = this.CurrentSelectedIcon;
        this._isSelected = true;
        console.log("Clicked " + this._id + " " + this._currentType);
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
        "ACCESSORY": "-accessory"
    }
}