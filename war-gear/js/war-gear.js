import { DarkLightMode, BackgroundImages } from "../../js/lordscalc.js";
import { FilterAndQuery } from "./filter-and-query.js";
import { SelectedGearsContainer } from "./selected-gears-container.js";
import { ScoreCalculator } from "./score-calculator.js";
import { InfoPanel } from "./info-panel.js";
import { GearsContainer } from "./gears-container.js";

export class WarGear {

    _gears;
    _selectedGears;
    _scoreCalculator;
    _filterAndQuery;
    _gearLayouts;
    _infoPanel;

    constructor() {
        this.Setup();
    }

    Setup() {
        this.SetupLayoutAndPanels();
        this.SetupGears();
        this.SetupSelectedGears();
        this.SetupSetupFilterAndCalculationLogic();
    }

    SetupSetupFilterAndCalculationLogic() {
        this._scoreCalculator = new ScoreCalculator(this._selectedGears);
        this._filterAndQuery = new FilterAndQuery();
    }

    SetupSelectedGears() {
        this._selectedGears = new SelectedGearsContainer();
        this._selectedGears.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._selectedGears.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
    }

    SetupGears() {
        this._gears = new GearsContainer();
        this._gears.AddEventListener("gear-changed", (inst) => this.GearChanged(inst));
        this._gears.AddEventListener("activate-info-panel", (inst) => this.ActivateInfoPanel(inst));
        this._gears.AddEventListener("deactivate-info-panel", (inst) => this.DeactivateInfoPanel(inst));
    }

    SetupLayoutAndPanels() {
        DarkLightMode.setupButton();
        BackgroundImages.setImages();
        this._infoPanel = new InfoPanel();
        window.addEventListener("resize", () => { this.PageResized(); });
    }

    GearChanged(instance) {
        console.log("GearChanged");
        this._selectedGears.SetGear(instance);
        this._infoPanel.UpdateContent();
    }

    ActivateInfoPanel(inst) {
        console.log("ActivateInfoPanel");
        this._infoPanel.SetPanel(inst);
    }

    DeactivateInfoPanel(inst) {
        this._infoPanel.HidePanel();
    }

    PageResized() {
        this._infoPanel.ReDraw();
    }

}