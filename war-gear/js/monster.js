import { BaseClass } from "./base-class.js";
import { GearSet } from "./gear-set.js";
import { Gear } from "./gear.js";



export class Monster extends BaseClass {

    _id;
    _gear;
    _selectedSet;

    constructor(id) {
        super();
        this._id = id;

        this.SetupGears();
    }

    SetupGears() {
        this._gear = {
            //helmet: new Gear(this._id + "-helmet"),
            //armor: new Gear(this._id + "-armor"),
            //legs: new Gear(this._id + "-legs"),
            //mainHand: new Gear(this._id + "-main-hand"),
            offHand: new Gear(this._id, this._gearTypes["OFF_HAND"]),
            accessory1: new Gear(this._id, this._gearTypes["ACCESSORY_1"]),
            accessory2: new Gear(this._id, this._gearTypes["ACCESSORY_2"]),
            accessory3: new Gear(this._id, this._gearTypes["ACCESSORY_3"])
        }
        this._gear.offHand.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));
        this._gear.accessory1.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));
        this._gear.accessory2.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));
        this._gear.accessory3.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));


    }

    GearChanged(instance) {
        console.log("Got event" + instance.Id);

        this.DispatchEvent("gear-changed", instance);
    }


}