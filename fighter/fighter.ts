import { IFighter } from '../IFighter/ifighter';

class Fighter implements IFighter {
  readonly name: string;
  readonly power: number;
  health: number;
  constructor(name = 'Scorpio', power = 1, health = 15) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage: number): void {
    this.health -= damage;

    if (this.health > 0) {
      console.log(`${this.name} health: ${this.health}`);
    } else {
      this.health = 0;
      console.log(`${this.name} is dead`);
    }
  }

  hit(enemy: any, point: number): void {
    let damage: number = this.power * point;
    enemy.setDamage(damage);
  }
}

export { Fighter };