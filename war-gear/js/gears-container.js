import { BaseClass } from "./base-class.js";
import { Monster } from "./monster.js";
import { GearLayouts } from "./gear-layouts.js";



export class GearsContainer extends BaseClass {

    _monsters = {};
    _gearLayouts;
    _clickBehaviorElm;
    _isClickSelectingGear = true;
    _lastClickedGearForInfoPanel = null;

    get Monsters() {
        return this._monsters;
    }

    constructor(infoPanel) {
        super();
        this.Setup();
    }

    Setup() {
        this.MakeMonsters();
        this.SetupClickBehavior();
        this._gearLayouts = new GearLayouts(this._monster);
    }

    SetupClickBehavior() {
        this._clickBehaviorElm = document.getElementById("click-behaviour-toggle-input");
        this._clickBehaviorElm.addEventListener("change", (event) => { this.ClickBehaviorChanged(event); });
    }

    ClickBehaviorChanged(event) {
        if (event.target.checked) {
            this._isClickSelectingGear = false;
        } else {
            this._isClickSelectingGear = true;
        }
    }

    MakeMonsters() {

        this._monsters = {
            "serpent-gladiator": new Monster("serpent-gladiator"),
            "arctic-flipper": new Monster("arctic-flipper"),
            "necrosis": new Monster("necrosis")
        }

        Object.keys(this._monsters).forEach((key) => {
            this._monsters[key].AddEventListener("gear-clicked", (inst) => this.GearClicked(inst));
        });
    }

    GearClicked(gear) {
        if (this._isClickSelectingGear) {
            this.DispatchEvent("gear-changed", gear);
            this._lastClickedGearForInfoPanel = null;
        }
        else  {
            if (this._lastClickedGearForInfoPanel != null 
                && this._lastClickedGearForInfoPanel == gear) {
                this.DispatchEvent("deactivate-info-panel", gear);
                this._lastClickedGearForInfoPanel = null;
            }
            else {
                this.DispatchEvent("activate-info-panel", gear);
                this._lastClickedGearForInfoPanel = gear;
            }
        }
    }
}