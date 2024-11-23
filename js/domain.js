export default class Character {
    constructor(name, health = 100, attack = 10) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    getInfo() {
        return `${this.name} - Health: ${this.health}, Attack: ${this.attack}`;
    }
}