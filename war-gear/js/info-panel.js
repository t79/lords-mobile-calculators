


export class InfoPanel {

    _panelElm;
    _panelContentElm;
    _gear = null;
    _isVisible = false;

    constructor() {
        this.Setup();
    }

    Setup() {
        this.GetDOMElements();
    }

    GetDOMElements() {
        this._panelElm = document.getElementById('info-panel');
        this._panelContentElm = {
            earlierGear: document.getElementById("info-panel-earlier-gear"),
            earlierGearSlot1: document.getElementById("info-panel-earlier-gear-1"),
            earlierGearSlot2: document.getElementById("info-panel-earlier-gear-2"),
            earlierGearSlot3: document.getElementById("info-panel-earlier-gear-3"),
            earlierGearSlot4: document.getElementById("info-panel-earlier-gear-4"),
            earlierGearSlot5: document.getElementById("info-panel-earlier-gear-5"),
            earlierGearSlot6: document.getElementById("info-panel-earlier-gear-6"),
            earlierGearSlot7: document.getElementById("info-panel-earlier-gear-7"),
            earlierGearSlot8: document.getElementById("info-panel-earlier-gear-8"),
        }
    }

    SetPanel(inst) {
        if (this._gear != null) {
            this._gear.LostInfoPanel();
        }
        this._gear = inst;

        this.FillContent();

        const windowWidth = window.innerWidth;
        const rect = this._panelElm.getBoundingClientRect();
        const topHeight = document.body.getBoundingClientRect().top;
        const coords = inst.LowerCenterPoint;
        let leftBoarder = coords.x - rect.width/2;
        let arrowPosition = "50%";
        if (leftBoarder < 10) {
            const leftTmp = leftBoarder;
            leftBoarder = 10;
            arrowPosition = (50 - (leftBoarder - leftTmp) / rect.width * 100) + "%";
        }
        if (leftBoarder + rect.width > windowWidth - 20) {
            console.log("Too far right");
            const leftTmp = leftBoarder;
            leftBoarder = windowWidth - rect.width - 20;
            arrowPosition = (50 - (leftBoarder - leftTmp) / rect.width * 100) + "%";
        }
        this._panelElm.style.top = (coords.y - topHeight) + "px";
        this._panelElm.style.left = leftBoarder + "px";
        this._panelElm.style.backgroundPosition = arrowPosition + " 0";
        this._panelElm.style.opacity = "1";
        this._isVisible = true;
    }

    HidePanel() {
        this._panelElm.style.opacity = "0";
        this._isVisible = false;
    }

    ReDraw() {
        if (this._isVisible && this._gear != null) {
            this.SetPanel(this._gear);
        }
    }

    UpdateContent() {
        console.log("Update content");
        if (this._isVisible && this._gear != null) {
            this.EarlierContent();
        }
    }

    FillContent() {
        this.EarlierContent();
    }

    EarlierContent() {
        if (this._gear.IsSelectedGearElm == false) {
            this._panelContentElm.earlierGear.style.display = "none";
            return;
        }
        const earlierGear = this._gear.GetEarlierGear;

        for (let i = 0; i < earlierGear.length; i++) {
            const gear = earlierGear[i];
            this._panelContentElm["earlierGearSlot" + (i + 1)].src = gear.CurrentIcon;
            this._panelContentElm["earlierGearSlot" + (i + 1)].style.display = "block";
        }
        for (let i = earlierGear.length; i < 8; i++) {
            this._panelContentElm["earlierGearSlot" + (i + 1)].style.display = "none";
        }

        if (earlierGear.length > 0) {
            this._panelContentElm.earlierGear.style.display = "block";
        }
        else {
            this._panelContentElm.earlierGear.style.display = "none";
        }
    }
}