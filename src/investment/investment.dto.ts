export class InvestmentInsertDTO {
    private _value: number;
    private _dueDays: number;

    constructor(value: number, dueDays: number) {
        this._value = value;
        this._dueDays = dueDays;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get dueDays(): number {
        return this._dueDays;
    }

    set dueDays(dueDays: number) {
        this._dueDays = dueDays;
    }
}

export class InvestmentUpdateDTO {
    private _value: number;
    private _dueDays: number;

    constructor(value: number, dueDays: number) {
        this._value = value;
        this._dueDays = dueDays;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get dueDays(): number {
        return this._dueDays;
    }

    set dueDays(dueDays: number) {
        this._dueDays = dueDays;
    }
}

export class InvestmentInsertResponseDTO {
    private _value: number;
    private _success: boolean;

    constructor(value: number, success: boolean) {
        this._value = value;
        this._success = success;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get success(): boolean {
        return this._success;
    }

    set success(success: boolean) {
        this._success = success;
    }
}

export class InvestmentUpdateResponseDTO {
    private _value: number;
    private _dueDays: number;
    private _success: boolean;

    constructor(value: number, dueDays: number, success: boolean) {
        this._value = value;
        this._dueDays = dueDays;
        this._success = success;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get dueDays(): number {
        return this._dueDays;
    }

    set dueDays(dueDays: number) {
        this._dueDays = dueDays;
    }

    get success(): boolean {
        return this._success;
    }

    set success(success: boolean) {
        this._success = success;
    }
}
