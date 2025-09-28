/*
* interface && class
* */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class  Character implements CharacterInterface {

    constructor(public name: string, public moveSpeed: number , private extra:string) {

    }

    move(): void {
        console.log(`${this.name} moved at speed of ${this.moveSpeed}`);
    }
}

const character = new Character('Hero', 10, 'Extra Info');