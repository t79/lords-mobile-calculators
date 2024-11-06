import { BaseClass } from "./base-class.js";
import { SelectedGear } from "./selected-gear.js";



export class SelectedGearsContainer extends BaseClass {

    _selected;

    constructor() {
        super();
        this.Setup();
    }

    Setup() {

        this._selected = {
            "HELMET": new SelectedGear("helmet"),
            "ARMOR": new SelectedGear("armor"),
            "LEGS": new SelectedGear("legs"),
            "MAIN_HAND": new SelectedGear("main-hand"),
            "OFF_HAND": new SelectedGear("off-hand"),
            "ACCESSORY_1": new SelectedGear("accessory-1"), 
            "ACCESSORY_2": new SelectedGear("accessory-2"), 
            "ACCESSORY_3": new SelectedGear("accessory-3")
        }

        Object.values(this._selected).forEach((gear) => {
            gear.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
            gear.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        });
    }

    SetGear(inst) {
        this._selected[inst.GearType].SetGear(inst);
        console.log("Gear set: " + inst.Id);
        this.DispatchEvent("gear-changed");
    }

    GetGearSet() {
        const set = [];
        Object.values(this._selected).forEach((item) => {
            if (item.Gear != null) {
                set.push(item.Gear);
            }
        });
        return set;
    }

    ActivateInfoPanel(inst) {
        this.DispatchEvent("activate-info-panel", inst);
    }

    DeactivateInfoPanel(inst) {
        this.DispatchEvent("deactivate-info-panel", inst);
    }
}