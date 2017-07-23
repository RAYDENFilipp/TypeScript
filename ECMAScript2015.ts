/*jshint esversion: 6*/
import { IFighter } from './IFighter/ifighter';
import { Fighter } from './fighter/fighter';
import { ImprovedFighter } from './improvedFighter/improvedFighter';
import { fight } from './fight/fight';

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter();

fight(fighter, improvedFighter, 2);
