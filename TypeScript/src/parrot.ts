export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export class Parrot {
    private static readonly baseSpeed: number = 12;
    private static readonly loadFactor: number = 9;

    constructor(private parrotType: ParrotTypes,
                private numberOfCoconuts: number,
                private voltage: number,
                private isNailed: boolean) {
    }

    public getSpeed(): number {
        return this.getParrotType();
        throw new Error("Should be unreachable");
    }

    private getParrotType() {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return Parrot.baseSpeed;
            case ParrotTypes.AFRICAN:
                return Math.max(0, Parrot.baseSpeed - Parrot.loadFactor * this.numberOfCoconuts);
            case ParrotTypes.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * Parrot.baseSpeed);
    }

}
