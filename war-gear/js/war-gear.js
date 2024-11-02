import { DarkLightMode, BackgroundImages } from "../../js/lordscalc.js";
import { GearSet } from "./gear-set.js";
import { Monster } from "./monster.js";
import { ScoreCalculator } from "./score-calculator.js";

export class WarGear {

    _monsters = {}
    _monster2;
    _selectedSet;
    _scoreCalculator;

    constructor() {
        this.Setup();
    }

    Setup() {
        
        DarkLightMode.setupButton();
        BackgroundImages.setImages();

        this._monsters["serpent-gladiator"] = new Monster("serpent-gladiator");
        this._monsters["serpent-gladiator"].AddEventListener("gear-changed", (inst) => this.GearChanged(inst));
        this._monsters["arctic-flipper"] = new Monster("arctic-flipper");
        this._monsters["arctic-flipper"].AddEventListener("gear-changed", (inst) => this.GearChanged(inst));
        this._monsters["necrosis"] = new Monster("necrosis");
        this._monsters["necrosis"].AddEventListener("gear-changed", (inst) => this.GearChanged(inst));
        this._selectedSet = new GearSet();
        this._scoreCalculator = new ScoreCalculator(this._selectedSet);

    }

    GearChanged(instance) {
        console.log("Got event" + instance.Id);

        this._selectedSet.SetGear(instance);
    }

}