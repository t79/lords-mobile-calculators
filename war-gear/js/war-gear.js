import { DarkLightMode, BackgroundImages } from "../../js/lordscalc.js";
import { FilterAndQuery } from "./filter-and-query.js";
import { GearSet } from "./gear-set.js";
import { Monster } from "./monster.js";
import { ScoreCalculator } from "./score-calculator.js";
import { GearLayouts } from "./gear-layouts.js";
import { InfoPanel } from "./info-panel.js";

export class WarGear {

    _monsters = {}
    _monster2;
    _selectedSet;
    _scoreCalculator;
    _filterAndQuery;
    _gearLayouts;
    _infoPanel;

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
        this._selectedSet.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selectedSet.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
        this._scoreCalculator = new ScoreCalculator(this._selectedSet);
        this._filterAndQuery = new FilterAndQuery();
        this._gearLayouts = new GearLayouts(this._monsters);
        this._infoPanel = new InfoPanel();
        //this._gearLayouts.Reverse();

        window.addEventListener("resize", () => { this.PageResized(); });
    }

    GearChanged(instance) {
        console.log("Got event " + instance.Id);

        this._selectedSet.SetGear(instance);
        this._infoPanel.UpdateContent();
    }

    ActivateInfoPanel(inst) {
        this._infoPanel.SetPanel(inst);
    }

    DeactivateInfoPanel(inst) {
        console.log("Deactivate info panel");
        this._infoPanel.HidePanel();
    }

    PageResized() {
        this._infoPanel.ReDraw();
    }

}