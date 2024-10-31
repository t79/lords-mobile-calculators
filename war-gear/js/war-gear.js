import { DarkLightMode, BackgroundImages } from "../../js/lordscalc.js";
import { GearSet } from "./gear-set.js";
import { Monster } from "./monster.js";

export class WarGear {

    _monster;
    _monster2;
    _selectedSet;

    constructor() {
        this.Setup();
    }

    Setup() {
        
        DarkLightMode.setupButton();
        BackgroundImages.setImages();

        this._monster = new Monster("serpent-gladiator");
        this._monster.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));
        this._monster2 = new Monster("artic-flipper");
        this._monster2.AddEventListener("gear-changed", (inst) => this.GearChanged(inst).bind(this));

        this._selectedSet = new GearSet;
    }

    GearChanged(instance) {
        console.log("Got event" + instance.Id);

        this._selectedSet.SetGear(instance);
    }

}