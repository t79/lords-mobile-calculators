import { BaseClass } from "./base-class.js";
import { SelectedGearsContainer } from "./selected-gears-container.js";
import { Gear } from "./gear.js";



export class Monster extends BaseClass {

    _id;
    _gear;
    _selectedSet;
    _styleRoot;

    constructor(id) {
        super();
        this._id = id;

        this.SetupGears();
    }

    SetupGears() {
        this._gear = {
            helmet: new Gear(this._id, this._gearTypes["HELMET"]),
            armor: new Gear(this._id, this._gearTypes["ARMOR"]),
            legs: new Gear(this._id, this._gearTypes["LEGS"]),
            mainHand: new Gear(this._id, this._gearTypes["MAIN_HAND"]),
            offHand: new Gear(this._id, this._gearTypes["OFF_HAND"]),
            accessory1: new Gear(this._id, this._gearTypes["ACCESSORY_1"]),
            accessory2: new Gear(this._id, this._gearTypes["ACCESSORY_2"]),
            accessory3: new Gear(this._id, this._gearTypes["ACCESSORY_3"])
        }

        Object.values(this._gear).forEach((gear) => {
            gear.AddEventListener("gear-clicked", (inst) => this.DispatchEvent("gear-clicked", inst));
        });
        
        this._styleRoot = document.querySelector(":root");
    }

    GearChanged(gear) {
        this.DispatchEvent("gear-clicked", gear);
    }

    LayoutChangeToRow(index) {
        console.log("Layout change to row: " + index + " : --" + this._id + "-top-line " + (2 + index * 3));
        this._styleRoot.style.setProperty(`--${this._id}-top-line`, 2 + index * 3);
    }


}