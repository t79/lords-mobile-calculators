import { ScoreOutputPanel } from "./score-output-panel.js";
import { SelectedGearsContainer } from "./selected-gears-container.js";


export class ScoreCalculator {

    _gearSet
    _scorePanel;

    constructor(gearSet) {
        this._gearSet = gearSet;
        this.Setup();
    }

    Setup() {
        this._scorePanel = new ScoreOutputPanel();
        this._gearSet.AddEventListener("gear-changed", (gs) => this.GearChanged(gs));
    }

    GearChanged(gs) {
        const result = {}
        const set = this._gearSet.GetGearSet();
        for (let i = 0; i < set.length; i++) {
            const boost = set[i].CurrentBoostValues;
            Array.from(["Inf","Range","Cav","Army"]).forEach(key1=> {
                Array.from(["ATK", "HP", "DEF", "Army"]).forEach(key2=> {
                    const value = boost[key1 + " " + key2];
                    if (value != undefined) {
                        const key2m = key2.slice(0, 1).toUpperCase() + key2.slice(1).toLowerCase()
                        result[key1 + key2m] = (result[key1 + key2m] || 0) + value;
                    }
                });
            });
        }

        Object.keys(result).forEach(key=> {
            eval(`this._scorePanel.${key} = ${result[key]}`);
        });
    }
}