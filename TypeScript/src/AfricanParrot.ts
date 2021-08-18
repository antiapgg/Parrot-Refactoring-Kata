import { Parrot } from "./parrot";

export class AfricanParrot extends Parrot {

    constructor(private readonly numberOfCoconuts: number){
        super();
    }
    
    public getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }
  
    private getLoadFactor(): number {
        return 9;
    }
}