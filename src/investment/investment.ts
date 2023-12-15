export class Investment {
    private _id: number;
    private _value: number;
    private _dueDays: number;

    constructor(value:number, dueDays:number) {
        this._value = value;
        this._dueDays = dueDays;
    }

    get value():number {
        return this._value;
    }

    get dueDays():number {
        return this._dueDays;
    }

    set value(value:number) {
        this._value = value;
    }

    set dueDays(dueDays:number) {
        this._dueDays = dueDays;
    }
}