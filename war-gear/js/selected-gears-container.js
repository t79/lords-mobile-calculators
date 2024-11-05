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

        this._selected.HELMET.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.HELMET.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.ARMOR.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.ARMOR.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.LEGS.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.LEGS.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.MAIN_HAND.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.MAIN_HAND.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.OFF_HAND.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.OFF_HAND.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.ACCESSORY_1.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.ACCESSORY_1.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.ACCESSORY_2.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.ACCESSORY_2.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._selected.ACCESSORY_3.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selected.ACCESSORY_3.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
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
        console.log("Deactivate info panel");
        this.DispatchEvent("deactivate-info-panel", inst);
    }
}