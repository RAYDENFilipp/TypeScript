"use strict";
exports.__esModule = true;
var fighter_1 = require("./fighter/fighter");
var improvedFighter_1 = require("./improvedFighter/improvedFighter");
var fight_1 = require("./fight/fight");
var fighter = new fighter_1.Fighter();
var improvedFighter = new improvedFighter_1.ImprovedFighter();
fight_1.fight(fighter, improvedFighter, 2);
