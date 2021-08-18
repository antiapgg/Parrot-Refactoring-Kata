import { Parrot } from "./parrot";

export class EuropeanParrot extends Parrot {
    public getSpeed(): number {
        return this.getBaseSpeed();
    }
}