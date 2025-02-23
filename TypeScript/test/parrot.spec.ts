import { expect } from "chai";
import "mocha";
import { EuropeanParrot } from "../src/EuropeanParrot";
import { AfricanParrot } from "../src/AfricanParrot";
import { NorwegianBlueParrot } from "../src/NorwegianBlueParrot";

describe("Parrot", () => {

    it("gets speed of European Parrot", () => {
        const parrot = new EuropeanParrot();

        expect(parrot.getSpeed()).eql(12);
    });

    it("gets speed of African Parrot with one coconut", () => {
        const parrot = new AfricanParrot(1);

        expect(parrot.getSpeed()).eql(3);
    });

    it("gets speed of African Parrot with two coconuts", () => {
        const parrot = new AfricanParrot(2);

        expect(parrot.getSpeed()).eql(0);
    });

    it("gets speed of African Parrot with no coconuts", () => {
        const parrot = new AfricanParrot(0);

        expect(parrot.getSpeed()).eql(12);
    });

    it("gets speed of Norwegian Blue Parrot nailed", () => {
        const parrot = new NorwegianBlueParrot(1.5, true);

        expect(parrot.getSpeed()).eql(0);
    });

    it("gets speed of Norwegian Blue Parrot not nailed", () => {
        const parrot = new NorwegianBlueParrot(1.5, false);

        expect(parrot.getSpeed()).eql(18);
    });

    it("gets speed of Norwegian Blue Parrot not nailed high voltage", () => {
        const parrot = new NorwegianBlueParrot(4, false);

        expect(parrot.getSpeed()).eql(24);
    });
});
