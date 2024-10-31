


export class OutputTrope {

    _type;
    _outputElm = {
        parent: null,
        atk: null,
        atkValue: null,
        def: null,
        defValue: null,
        hp: null,
        hpValue: null
    }

    set Atk(value) {
        if (value > 0) {
            this.SetValue("atk", value);
        } else {
            this.Clear("atk");
        }
    }

    set Hp(value) {
        if (value > 0) {
            this.SetValue("hp", value);
        } else {
            this.Clear("hp");
        }
    }

    set Def(value) {
        if (value > 0) {
            this.SetValue("def", value);
        } else {
            this.Clear("def");
        }
    }

    constructor(type) {
        this._type = type;
        this.Setup();
    }

    Setup() {
        this._outputElm.parent = document.getElementById("calc-output-" + this._type);
        this._outputElm.atk = this._outputElm.parent.getElementsByClassName("calc-output-atk")[0];
        this._outputElm.atkValue = this._outputElm.atk.getElementsByClassName("output-value")[0];
        this._outputElm.def = this._outputElm.parent.getElementsByClassName("calc-output-def")[0];
        this._outputElm.defValue = this._outputElm.def.getElementsByClassName("output-value")[0];
        this._outputElm.hp = this._outputElm.parent.getElementsByClassName("calc-output-hp")[0];
        this._outputElm.hpValue = this._outputElm.hp.getElementsByClassName("output-value")[0];
        
    }

    Clear(boostType) {
        this._outputElm[boostType].style.display = none;
        if(this._outputElm.atk.style.display == "none" &&
            this._outputElm.hp.style.display == "none" &&
            this._outputElm.def.style.display == "none") {
            this._outputElm.parent.style.display = "none";
        }
    }

    SetValue(boostType, value) {
        console.log(this._outputElm[boostType + "Value"]);
        this._outputElm[boostType + "Value"].innerHTML = Math.round(value * 10) / 10;
        if(this._outputElm[boostType].style.display === "none") {
            this._outputElm[boostType].style.display = "block";
        }
        if(this._outputElm.parent.style.display === "none") {
            this._outputElm.parent.style.display = "grid";
        }
    }
}