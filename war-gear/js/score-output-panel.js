import { OutputTrope } from "./output-trope.js";


export class ScoreOutputPanel {

    _outputTropes;

    set InfAtk(value) {
        this._outputTropes.inf.Atk = value;
    }

    set RangeAtk(value) {
        this._outputTropes.range.Atk = value;
    }

    set CavAtk(value) {
        this._outputTropes.cav.Atk = value;
    }

    set ArmyAtk(value) {
        this._outputTropes.army.Atk = value;
    }

    set InfDef(value) {
        this._outputTropes.inf.Def = value;
    }

    set RangeDef(value) {
        this._outputTropes.range.Def = value;
    }

    set CavDef(value) {
        this._outputTropes.cav.Def = value;
    }

    set ArmyDef(value) {
        this._outputTropes.army.Def = value;
    }

    set InfHp(value) {
        this._outputTropes.inf.Hp = value;
    }   

    set RangeHp(value) {
        this._outputTropes.range.Hp = value;
    }

    set CavHp(value) {
        this._outputTropes.cav.Hp = value;
    }

    set ArmyHp(value) {
        this._outputTropes.army.Hp = value;
    }

    constructor() {
        this.Setup();
    }

    Setup() {
        this._outputTropes = {
            inf: new OutputTrope("inf"),
            range:  new OutputTrope("range"),
            cav: new OutputTrope("cav"),
            army: new OutputTrope("army")
        }
    }
}