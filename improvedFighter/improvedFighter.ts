import { IFighter } from '../IFighter/ifighter';
import { Fighter } from '../fighter/fighter';

class ImprovedFighter extends Fighter implements IFighter {
  constructor(name: string = 'Raiden', power: number = 1, health: number = 8) {
    super(name, power, health);
  }

  doubleHit(enemy: any, point: number): void {
    point *= 2;
    super.hit(enemy, point);
  }
}

export { ImprovedFighter };