


export class GearLayouts {
    
    _monsters

    constructor(monsters) {
        this._monsters = monsters;
    }

    Reverse() {
        const count = Object.keys(this._monsters).length;
        let i = 0;
        Object.values(this._monsters).forEach((monster) => {
            const row = count - 1 - i++;
            monster.LayoutChangeToRow(row);
        });
    }

}