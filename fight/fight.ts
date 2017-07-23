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

export { fight };