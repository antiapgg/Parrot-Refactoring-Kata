import { Parrot } from "./parrot";

export class NorwegianBlueParrot extends Parrot {
    constructor( 
        private readonly voltage: number,
        private readonly isNailed: boolean){
            super();
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage();
    }

    private getBaseSpeedWithVoltage(): number {
        return Math.min(24, this.voltage * this.getBaseSpeed());
    }
}