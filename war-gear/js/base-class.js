

export class BaseClass {

    _eventCallbacks = {};

    constructor() {

    }

    AddEventListener(eventType, callback) {
        if(typeof callback !== "function") return;
        if(this._eventCallbacks[eventType] === undefined) {
            this._eventCallbacks[eventType] = [];
        }

        this._eventCallbacks[eventType].push(callback);
    }

    DispatchEvent(eventType, instance = this) {
        if(this._eventCallbacks[eventType] === undefined) return;
        
        this._eventCallbacks[eventType].forEach(callback => {
            callback(instance);
        })
    }

    _types = {
        5: "COMMON",
        4: "UNCOMMON",
        3: "RARE",
        2: "EPIC",
        1: "LEGENDARY",
        0: "MYTHIC"
    }

    _gearTypes = {
        0: "HELMET",
        1: "ARMOR",
        2: "LEGS",
        3: "MAIN_HAND",
        4: "OFF_HAND",
        5: "ACCESSORY_1",
        6: "ACCESSORY_2",
        7: "ACCESSORY_3",
        "HELMET": "HELMET",
        "ARMOR": "ARMOR",
        "LEGS": "LEGS",
        "MAIN_HAND": "MAIN_HAND",
        "OFF_HAND": "OFF_HAND",
        "ACCESSORY_1": "ACCESSORY_1",
        "ACCESSORY_2": "ACCESSORY_2",
        "ACCESSORY_3": "ACCESSORY_3"
    }
}