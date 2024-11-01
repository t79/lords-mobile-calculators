import { DarkLightMode, BackgroundImages } from "../../js/lordscalc.js";
import { GearSet } from "./gear-set.js";
import { Monster } from "./monster.js";
import { ScoreCalculator } from "./score-calculator.js";

export class WarGear {

    _monster;
    _monster2;
    _selectedSet;
    _scoreCalculator;

    constructor() {
        this.Setup();
    }

    Setup() {
        
        DarkLightMode.setupButton();
        BackgroundImages.setImages();

        this._monster = new Monster("serpent-gladiator");
        this._monster.AddEventListener("gear-changed", (inst) => this.GearChanged(inst));
        this._monster2 = new Monster("artic-flipper");
        this._monster2.AddEventListener("gear-changed", (inst) => this.GearChanged(inst));

        this._selectedSet = new GearSet();
        this._scoreCalculator = new ScoreCalculator(this._selectedSet);

    }

    GearChanged(instance) {
        console.log("Got event" + instance.Id);

        this._selectedSet.SetGear(instance);
    }

}