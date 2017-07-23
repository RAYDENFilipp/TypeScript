interface IFighter {
  readonly name: string;
  readonly power: number;
  health: number;
  setDamage: (damage: number) => void;
  hit: (enemy: any, point: number) => void;
  doubleHit?: (enemy: any, point: number) => void;
}

export { IFighter };