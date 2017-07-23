/*jshint esversion: 6*/

class Fighter {
  readonly name: string;
  readonly power: number;
  protected health: number;
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

class ImprovedFighter extends Fighter {
  constructor(name: string = 'Raiden', power: number = 1, health: number = 8) {
    super(name, power, health);
  }

  doubleHit(enemy: any, point: number): void {
    point *= 2;
    super.hit(enemy, point);
  }
}

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter();

function fight(fighter1: any, fighter2: any, ...point: Array<number>): void {
 let point_acumulated: number = point.reduce( (firstVal: number, secondVal: number): number => {
    return firstVal + secondVal;
  });

  while(true) {
    if (fighter1.health > 0) {
      fighter1.hit(fighter2, point_acumulated);
    }
    if (fighter2.health > 0) {
      fighter2.doubleHit(fighter1, point_acumulated);
    }
    if (fighter1.health === 0) {
      console.log(`${fighter2.name} wins!`);
      break;
    }
    if (fighter2.health === 0){
      console.log(`${fighter1.name} wins!`);
      break;
    }
  }

}

fight(fighter, improvedFighter, 2);
